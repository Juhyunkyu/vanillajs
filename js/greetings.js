/*const loginForm = document.getElementById("login=form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/
//위에꺼랑 밑에꺼랑 같음
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 이렇게 user의 유효성 검사는 중요하다 그러나 여기서는 기본브라우저에서 제공한다
function onLoginBtnClick(){
    //console.dir(loginInput);
    const username = loginInput.value;
    if(username === ""){
        alert("Please write your name!!!");
    }
    //변수.length 길이를 알려준다 js 기본 장난감 
    else if(username.length > 15){
        alert("Your name is too long");
    }else{
        onLoginSubmit(event);
    }
}

//form은 submit될때 자동으로 새로고침을한다 브라우져 기본동작

const loginForm = document.querySelector("#login-form");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

//니코샘은 변수가 all string일때 변수명을 올대문자로 쓴다 (중요하지 않는 변수)
const HEDDEN_CLASSNAME = "hidden";
const username_KYE = "username";

function onLoginSubmit(event){
    //preventDefault() 함수는 브라우저 기본동작을 실행하지 못하게 막아주는것
    event.preventDefault();
    loginForm.classList.add(HEDDEN_CLASSNAME);
    const username = loginInput.value;
    console.log(username);

    //로칼 스토리지 콘솔옆 애플리케이션에서 볼수있다
    //localStorage.    setItem getItem removeItem 3개만 쓰면됨
    localStorage.setItem(username_KYE,username);

    //greeting.innerText = "Hello " + username; 밑에꺼랑 같음
    /*greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HEDDEN_CLASSNAME); 밑에 겹쳐서 함수씀*/
    paintGreetings(username);

} //보통 이렇게 관행처럼 쓴다

function paintGreetings(saveUername){
    greeting.innerText = `Hello ${saveUername}`;
    greeting.classList.remove(HEDDEN_CLASSNAME);
}

const saveUername = localStorage.getItem(username_KYE);
//콘솔창에  localStorage.getItem("username") 쳐보면 값이 없음 null이뜨는걸 볼수있다
if(saveUername === null){
    loginForm.classList.remove("hidden");
    //loginForm.addEventListener("submit",onLoginSubmit);

    //유효성 검사를 하게 넣어봄 위에는 니코 쌤 강의
    loginForm.addEventListener("submit",onLoginBtnClick);
}
else {    
    paintGreetings(saveUername);
    /*greeting.innerText = `Hello ${saveUername}`;
    greeting.classList.remove(HEDDEN_CLASSNAME); 코딩이 겹쳐 함수씀*/
}

// function handleLickClick(event){
//     event.preventDefault();
//     console.dir(event);
//    // alert("Clicked"); 이것이 실행될때는 Link가 움직이지 않는다
// }

// link.addEventListener("click",handleLickClick);