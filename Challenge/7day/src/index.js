const toDoForm = document.querySelector(".js-todoform"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  toDoFinish = document.querySelector(".js-toDoFinish");

const TODOS_LS = "toDos";
const COMPLETE_LS = "complete";

let toDos = [];
let complete = [];

function finishToDo(text) {
  const li = document.createElement("li");
  const reDoBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  reDoBtn.innerHTML = `<i class="fas fa-redo"></i>`;
  delBtn.innerHTML = `<i class="fas fa-times"></i>`;

  delBtn.addEventListener("click", deleteReDo);

  const span = document.createElement("span");
  const newId = complete.length + 1;

  toDoFinish.appendChild(li);

  li.appendChild(reDoBtn);
  // span.innerText = text;
  li.appendChild(delBtn);
  li.id = newId;

  const reDoObj = {
    redo: toDos[text],
    id: newId,
  };

  complete.push(reDoObj);

  saveReDos();
  // console.log(event.target.parentNode);
  // // checkBtn.style.display = "none";
  // const btn = event.target;
  // const li = btn.parentNode.parentNode;
  // const reDoBtn = document.createElement("button");
  // reDoBtn.innerHTML = `<i class="fas fa-redo"></i>`;
  // li.appendChild(reDoBtn);
  // // toDoList.removeChild(li);
  // toDoFinish.appendChild(li);
  // const cleanToDos = toDos.filter(function (toDo) {
  //   return toDo.id !== parseInt(li.id);
  // });
  // toDos = cleanToDos;
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode;
  toDoList.removeChild(li);
  saveToDos();

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function deleteReDo(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode;
  toDoFinish.removeChild(li);
  saveReDos();

  const cleanReDos = complete.filter(function (reDo) {
    return reDo.id !== parseInt(li.id);
  });
  complete = cleanReDos;
  saveReDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveReDos() {
  localStorage.setItem(COMPLETE_LS, JSON.stringify(complete));
}

// function saveReDos() {}

function paintToDo(text) {
  const li = document.createElement("li");
  const checkBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
  delBtn.innerHTML = `<i class="fas fa-times"></i>`;

  delBtn.addEventListener("click", deleteToDo);
  checkBtn.addEventListener("click", handleCheck);

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

  toDos.push(toDoObj);

  saveToDos();
}

function handleCheck(event) {
  //form 안에 submit 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 사용 (submit은 작동됨)
  const rbtn = event.target;
  const li2 = rbtn.parentNode.parentNode;
  toDoList.removeChild(li2);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li2.id);
  });
  toDos = cleanToDos;

  saveToDos();
  finishToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  //form 안에 submit 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 사용 (submit은 작동됨)
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedReDos = localStorage.getItem(COMPLETE_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
  if (loadedReDos !== null) {
    const parsedReDos = JSON.parse(loadedReDos);
    parsedReDos.forEach(function (reDo) {
      finishToDo(reDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
