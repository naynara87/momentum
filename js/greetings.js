
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if(username === ""){
//         alert("이름을 입력하세요.")
//     }else if(username.length > 15){
//         alert("이름이 너무 길어요.")
//     }else{
//         alert(username + "님 환영합니다.")
//     }
// }

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    // 브라우저가 기본 동작을 실행하지 못하게 막기 
    // event object는 preventDefault함수를 기본적으로 갖고 있음
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = "Hello! " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const saveUsername = localStorage.getItem("username"); 

if(saveUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    //show the greetings
    paintGreetings(saveUsername);
}