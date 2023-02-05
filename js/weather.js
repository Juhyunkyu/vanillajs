/* 날씨 API
https://home.openweathermap.org/ 가입
Current Weather Data 에 api doc클릭
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
여기주소에 lat={lat} 와 lon={lon} 을 위에 찾은 위도 경도를 안에 넣어준다(ex lon = lon)
{API key}는 로긴 오른쪽 위에 My API keys 에 있다 복사해서 {}안에 붙여넣는다.
*/

// 가입한 사이트에 나의 키 복붙
const API_KEY = "f6d2d12b8b62d299a3a4c4ebb312d321";

function onGeoOk(position){
    // console.log(position); 
    //위치 허용 할것인가 뜨고 콘솔에 들어가보면 coords: 리스트에 
    //내위치의 latitude(위도) longitude(경도) 를 볼수있다
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // 백틱으로 써야함
    //참고 &units=metric 하면 temp(온도) 화시가 섭씨로 바뀜
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    // 주소 들어가보면 정리가 안됨 웹스토어에 JOSN VIEW 설치
    console.log(url);
    fetch(url)
        .then((response) => response
        .json()).then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:last-child");
            // console.log(data.name, data.weather[0].description);
            temp.innerText = `${data.main.temp}도`;
            city.innerText = data.name;
            weather.innerText = data.weather[0].description;
    });

}
function onGeoError(){
    alert("can't find you. NO wheather for you.");
}

// getCurrentPosition(successCallback함수,errorCallback함수)
// 하나는 정상 작동 하나는 에러가 떳을때의 함수 두개의 함수를 가진다
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);