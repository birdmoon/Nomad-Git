const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", //loadName()함수에 localStroage.getItem(USER_LS) 호출한 변수
  SHOWING_CN = "showing"; //css에 블럭으로 정의한 클래스

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); //폼에 이벤트가 발생하면 Document 자체가 리프레쉬 대니까 그걸 막아주기 위해 사용
  const currentValue = input.value; //input에 value 값을 설정해서 뿌려준다.
  // console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
// paintGreeting은 폼을 지우고 greeting을 보여주는 함수.
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `hello ${text}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
