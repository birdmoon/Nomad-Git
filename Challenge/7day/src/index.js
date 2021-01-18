const toDoForm = document.querySelector(".js-todoform"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  toDoFinish = document.querySelector(".js-toDoFinish");
ul = document.querySelector("ul");

const TODOS_LS = "toDos";
const COMPLETE_LS = "complete";

let toDos = [];
let complete = [];

function finishToDo(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode;

  toDoFinish.appendChild(li);
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode;
  if (typeof value === toDoList) {
    toDoList.removeChild(li);
    saveToDos();
  } else {
    toDoFinish.removeChild(li);
    saveToDos();
  }
  //event에 target이라는 것이 있어 <button> 이 계속 뜨게 하는 기능
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
  //toDos옆에 붙은 filter의 기능도 forEach와 마찬가지로 배열의 오브젝트 별로 실행을 하게 된다.
  //filterFn에 함수에 정의 된 것은 각 배열들의 숫자를 대입했을 때 아이디의 값들이 1로 된다.
  //cleanToDos와 filter가 하는 것은 filterFn이 체크가 된 아이템들의 array를 주는 것이다.
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
//saveToDos는 toDos의 값들을 local에 저장하는 함수.
//local storage에는 자바스크립트의 data를 저장할 수 없슴.. 오직 스트링만 저장할 수 있다.
//그래서 data값에 JSON.stringify로 감싸준다.

function paintToDo(text) {
  const li = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
  delBtn.innerHTML = `<i class="fas fa-times"></i>`;

  delBtn.addEventListener("click", deleteToDo);
  checkBtn.addEventListener("click", finishToDo);

  const span = document.createElement("span");
  const newId = toDos.length + 1;

  span.innerText = text;
  li.appendChild(span);
  li.appendChild(checkBtn);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  //text라는 키에 text가 value로 올 것이고, id는 toDos에 담긴 배열의 수+1을 담는다.
  toDos.push(toDoObj); //toDos 배열함수에 toDoObj를 푸시한다.
  saveToDos();
}

// function paintToDoFinish(text) {
//   // const li = document.createElement("li");

//   // const delBtn = document.createElement("button");
//   // checkBtn.innerHTML = `<i class="fas fa-check"></i>`;

//   // delBtn.innerHTML = `<i class="fas fa-times"></i>`;
//   // delBtn.addEventListener("click", deleteToDo);
//   // const span = document.createElement("span");
//   // const newId = toDos.length + 1;

//   // const toDoObj = {
//   //   text: text,
//   //   id: newId,
//   // };

//   //text라는 키에 text가 value로 올 것이고, id는 toDos에 담긴 배열의 수+1을 담는다.
//   // toDos.push(toDoObj); //toDos 배열함수에 toDoObj를 푸시한다.
//   saveToDos();
// }

function handleSubmit(event) {
  event.preventDefault();
  //form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 사용 (submit은 작동됨)
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; //인풋값에 입력하고 엔터를 치면 다시 빈공간으로 나오게 하려고 작성
}

function something(toDo) {
  paintToDo(toDo.text);
  //toDos안에 text를 줬으니, toDo.text를 출력할 수 있다.
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(something);
    //forEach()는 array에 담겨있는 것들을 각각에 한번씩 함수를 실행시켜 주는것임. Array를 위한 펑션
    //이 라인에서는 parse 즉, 가져온 것을 자바스크립트 object로 변환해줄 것이고
    //각각 paintToDo함수에 구체적으로 toDo.text에 대해 실행될꺼야.
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
