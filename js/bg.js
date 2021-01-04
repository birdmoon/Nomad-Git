const body = document.querySelector("body");

const IMG_NUMBER = 14;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  //Math.random()*5 1~5번까지 랜덤으로 번호호출 소숫점 포함.
  //Math.floor .1, .3, .9 소숫점 아래는 다 버려라는 함수
  //결국 합쳐서 14번의 소숫점 호출
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
