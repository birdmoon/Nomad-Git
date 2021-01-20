const statusNumber = document.querySelector("h2"),
  userNumber = document.querySelector(".js-number"),
  btn = document.querySelector(".js-btn"),
  desc = document.querySelector(".js-desc"),
  result = document.querySelector(".js-result");

const USER_LS = "userNum";
const COM_LS = "comNum";

let comNumber = Math.floor(Math.random() * 150);

function saveData() {
  localStorage.setItem(USER_LS, JSON.stringify(uValue));
  localStorage.setItem(COM_LS, JSON.stringify(cValue));
}

function paintUserNum(text) {
  const obj = { userNum: text };
  console.log(obj);
  saveUserNum();
}

//버튼이벤트 실행
function handleSubmit(event) {
  event.preventDefault();
  const uValue = userNumber.value;
  const cValue = comNumber;
  paintUserNum(uValue);
  paintComNum(cValue);
}

//로드한다.
function loadNum() {
  const loadedUserNum = localStorage.getItem(USER_LS);
  const loadedComNum = localStorage.getItem(USER_COM);
}

function init() {
  btn.addEventListener("submit", handleSubmit);
}

init();
