const clock = document.querySelector("h2#clock");

function getClock() {
    //new Date() 오늘 년도 날짜 시간을 보여준다
    const date = new Date();
    //padStar() 함수는 내가 가지고있는 string을 보다 길게 만들어야할때 사용

    //앞에 문자 길이는 2여야하고 2가 안되면 앞에 "0"을 넣어라 padStart
    //"1".padStart(2,"0") >>>>> "01"
    //"1".padEnd(2,"0") >>>>> "10"
    //그래서 date는 string으로 변경하려고 String()을 씀
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${minute}:${seconds}`;
    //mdn살펴보면 한번에 해결하는 방법도 있음 대신 앞에 오전 오후가 붙음
    // clock.innerText = new Date().toLocaleTimeString();
}
/*
setInterval(함수명, 3000);//3초 뒤에 호출 계속
setTimeout(함수명, 3000);//3초뒤에 호출 */
getClock()
setInterval(getClock, 1000);

