const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

let toDos = [];
//filterFN은 forEach에서 function을 실행하는 것 같이 각각의 아이템과 같이 실행이 될거임.
//filter는 array의 모든 아이템을 통해 함수를 실행하고 그리고 true인 아이템들만 가지고
//새로운 array를 만들음.
function filterFn(toDo) {
  return toDo.id === 1;
}

function deleteToDo(event) {
  //   const btn = event.target;
  //   const li = btn.parentNo;
  //   toDoList.removeChild(li);
  console.log(event.target.parentNode.parentNode);
  const btn = event.target;
  const li = btn.parentNode.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); //parseInt는 string을 숫자로 바꿔줌
  }); //filter는 함수 하나를 실행하는 것임.
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //JSON.stringify는 자바스크립트 object를 string으로 바꿔준다.
}

function paintToDo(text) {
  //text는 handleSubmit 펑션에서 가져온 currentValue
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerHTML = '<i class="fas fa-window-close"></i>';
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  span.innerHTML = text;
  li.appendChild(span); //appendChild는 부모성격(여기서는 li에 해당) element에 넣는것임
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

const TODOS_LS = "toDos"; //Todo 로컬 스토리지에 불러온 것 toDos를 변수 TODOS_LS로 정의한다.

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); //String을 Object로 바꿔준다.
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
    //forEach는 함수를 실행할 때 array에 담겨 있는 것들을 각각에 한번씩 함수를 실행시켜 주는거다.
    //array, string, object 모두 function이 있다. 대부분 array가 있고 그 안에 있는
    //각각에 대한 뭔가를 해줘야하지. 자바스크립트가 그걸 돕느다.
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
