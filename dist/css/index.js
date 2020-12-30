const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//   const hasClass = title.classList.contains(CLICKED_CLASS);
//   if (!hasClass) {
//     title.classList.add(CLICKED_CLASS);
//   } else {
//     title.classList.remove(CLICKED_CLASS);
//   }
// }

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

//toggle이란 메서드는 class가 있는지 없는지 유무를 따져서 속성값안에 값을 적용한다.

function init() {
  title.addEventListener("click", handleClick);
}

init();
