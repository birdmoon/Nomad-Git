const select = document.querySelector(".js-select"); //select를 지정한 상수

function setItem() {
  const value = select.options[select.selectedIndex].value;
  localStorage.setItem("country", value);
  //옵션의 value값들을 country라는 항목으로 세팅해서 저장해라.
}

function updateValue() {
  const selectCountry = localStorage.getItem("country");
  //setItem에서 저장한 country항목을 selectCountry 변하지 않는 상수에 담아라.
}

function saveItem() {
  setItem();
}
//saveItem을 실행하면 setItem 함수가 실행된다.

select.addEventListener("change", saveItem);
//select 함수가 변경이 되었을 때 saveItem을 실행해라.

function init() {
  updateValue(); //업데이트함수.. 그니까 setItem에서 얻은 항목을 가져와서 보여줘라.
}

init();
