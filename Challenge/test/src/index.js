const form = document.querySelector(".form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");
const showing = document.querySelector(".showing");
const target = document.querySelector(".target");

const EMAIL_LS = "email";
const PW_LS = "password";

let eList = [];
let pList = [];

//6번째 =eList, pList를 불러와서 localStorage에 저장하는 역할
function saveData() {
  localStorage.setItem(EMAIL_LS, JSON.stringify(eList));
  localStorage.setItem(PW_LS, JSON.stringify(pList));
}

function drawList() {
  target.innerHTML = JSON.stringify(eList[0]);
  target.innerHTML = JSON.stringify(pList[0]);
}

//5번째
function paintEmail(text) {
  const newId = eList.length + 1;
  const eObj = {
    email: text,
    id: newId,
  };
  eList.push(eObj);
  email.value = "";
  saveData();
}

function paintPw(text) {
  const newId = pList.length + 1;
  const pObj = {
    password: text,
    id: newId,
  };
  pList.push(pObj);
  password.value = "";
  saveData();
}

//4번째
function handleSubmit(event) {
  event.preventDefault();
  const eValue = email.value;
  const pValue = password.value;
  paintEmail(eValue);
  paintPw(pValue);
}

//3번째 save한 걸 불러오는 차례다. 밑에 if부분은 7번째로 작성한다. 가져온것을 parse 즉
//자바스크립트 object로 변환해주는 역할을 한다.
function loadData() {
  const loadedEmail = localStorage.getItem(EMAIL_LS);
  const loadedPw = localStorage.getItem(PW_LS);
  if (loadedEmail !== null) {
    const parsedEmail = JSON.parse(loadedEmail);
    const parsedPw = JSON.parse(loadedPw);
    parsedEmail.forEach(function (em) {
      paintEmail(em.email);
    });
    parsedPw.forEach(function (pw) {
      paintPw(pw.password);
    });
  }
}

//2번째
function init() {
  loadData();
  form.addEventListener("submit", handleSubmit);
  showing.addEventListener("click", drawList);
}

init();
