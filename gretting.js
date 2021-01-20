/*
이름이 입력되지 않았을 때는 input을 받는 화면 출력
input이 입력시 local storage에 저장후 새로고침 해도 저장 될수 있게 구현
*/

const greeting = document.querySelector(".js-form"),
    inputName = greeting.querySelector("input"),
    greetingText = document.querySelector(".js-greetings");

const USER_LS="currentUser",
SHOWING_CN="showing",
HIDE="hide";

function saveUserName(userName) {
    localStorage.setItem(USER_LS, userName);
}

//감출건 감추고 보일건 보이게
function paintName(userName) {
    greeting.classList.remove(SHOWING_CN);
    greeting.classList.add(HIDE);
    greetingText.classList.remove(HIDE)
    greetingText.classList.add(SHOWING_CN);
    greetingText.innerText=`Hello ${userName}`;
}

//preventDefault()로 이름이 사라지는 일 방지
//value는 form이 아닌 input에서 받아온다
function handlingSubmit(event) {
    event.preventDefault();
    const tempName = inputName.value;
    console.log(tempName);
    paintName(tempName)
    saveUserName(tempName);
}

//input을 받을 form을 활성화 시키고 form에 eventListner 더해줌
//input에 eventListner add할 시 정상 작동 x
function waitForName()
{
    greeting.classList.remove(HIDE);
    greeting.classList.add(SHOWING_CN);
    greeting.addEventListener("submit", handlingSubmit);
}


function loadName() {
    const userName = localStorage.getItem(USER_LS);
    if (userName !== null) {
        paintName(userName);
    }
    else{
        waitForName();
    }
}

function init() {
    loadName();
}

init();