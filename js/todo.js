const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// 위랑 같음 const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//localStorge 키값 선언
const TODOS_KYE = "todos";

// 리스트의 배열 새로고침해도 이전값 저장하게 let을 씀 
let toDos = [];

//localStorage에 키에 "todos" 값에 toDos배열을 스트링으로 넣는다
//나중에 이string 값이 자바스크립의 배열으로 만들기 위에
function saveToDos() {
    localStorage.setItem(TODOS_KYE, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // console.log(event);
    // console.log(event.target.parentElement);

    //delete버튼이 어떤건지 알아내고 변수에 넣어준다
    const list = event.target.parentElement;

    //filter는 배열(toDos)의 전체를 하나씩 보면서 실행(todo)
    //설명 클릭한 list.id가 filter한id랑 같은거 빼고 toDos배열에 넣어라
    toDos = toDos.filter((todo) => todo.id !== parseInt(list.id));    
    // 리스트 삭제는 뒤에 remove()붙여주면 끝
    list.remove();
    //업데이트!!!
    saveToDos();

}

//input 값(newTodo)을 넣어 호출 
function paintToDo(newTodoObj) {
    // console.log("i will paint", newTodoObj);
    // li생성 list변수에 넣음
    const list = document.createElement("li");
    // span생성 listSpan변수에 넣음
    list.id = newTodoObj.id;

    const listSpan = document.createElement("span");
    //생성된 span에 newTodoObj(input.value) 값을 넣음
    listSpan.innerText = newTodoObj.text;

    //버튼을 생성하고 변수선언
    const delBtn = document.createElement("button");
    //버튼 이름을 넣음
    delBtn.innerText = "X";

    //버튼을 클릭했을때 deleteToDo 호출
    delBtn.addEventListener("click", deleteToDo);
    // <li>랑 <span> 을 만들고 li밑에 span을 넣는거
    //appendChild는 맨끝에 붙음 
    //list 밑에 listSpan 생성 그밑에 delBtn 생성
    list.appendChild(listSpan);
    list.appendChild(delBtn);
    //test  console.log(list);

    //todo-list 밑에 list 추가하는것
    toDoList.appendChild(list);

}

//input의 값을 넣고 엔터키를 눌렀을때
function handleToDoSubmit(event) {
    //input의 기본동작 submit을 막고
    event.preventDefault();
    //toDoInput.value 값을 새로운 newTodo에 넣고
    const newTodo = toDoInput.value;
    //toDoInput.value 값에 "" 빈칸을준다
    toDoInput.value = "";
    // console.log(newTodo, toDoInput.value);

    // id를 만들기위해 오브젝트를 만들고 id는 Date.new()로 랜덤한 숫자를 넣
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    // toDos의 배열에 input값(newTodo)을 추가한다
    // toDos.push(newTodo);
    //paintToDo 함수에 넣은 값을 넣고 호출
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item){
    console.log("this is the turn of",item);
}
*/
const savedToDos = localStorage.getItem(TODOS_KYE);
//아무값이 없음 null로 뜬다 
// console.log(savedToDos); 문자열로 보임
if (savedToDos !== null){
    //string으로 되어있는 saveToDos 값을 배열로 다시뿌려준다 JSON.parse
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos); 배열로 바뀜

    // forEach는 배열의 각각에 item에 대해 function을 실행할수있다
    /* 
    이런식으로 function 을 줘도 된다
    parsedToDos.forEach(sayHello); */

    //배열이 빈칸으로 시작하기때문에 새로고침하면 데이터가 없어짐
    //toDos 배열에 parsedToDos값을 넣어준다
    // toDos 는 const 가 아니고 let 이여야한다.
    toDos = parsedToDos;

    //함수쓰지않고 짧게 바로쓰는것
    parsedToDos.forEach((item) => console.log("this is the turn of", item));

    //결론은 paintToDo 라는 함수가 리스트
    parsedToDos.forEach(paintToDo);
}




// -----------------localStorage--------------------------
//  키에 데이터 쓰기
// localStorage.setItem("key", value);

//  키로 부터 데이터 읽기
// localStorage.getItem("key");

//  키의 데이터 삭제
// localStorage.removeItem("key");

//  모든 키의 데이터 삭제
// localStorage.clear();

//  저장된 키/값 쌍의 개수
// localStorage.length;

// --------------JSON.parse JSON.stringify-------------------
// localStorage.getItem("todos")
// '["a","b","c","d"]'
// JSON.parse(localStorage.getItem("todos"))
// (4) ['a', 'b', 'c', 'd']