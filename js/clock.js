const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h2"),
  dateContainer = document.querySelector(".js-date"),
  dateTitle = dateContainer.querySelector("h1"),
  jsDays = document.querySelector(".js-days"),
  daysTitle = document.querySelector("h1");

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  const week = ["日", "月", "火", "水", "木", "金", "土"];
  dateTitle.innerHTML = `${month}<font size="20px">월</font> ${date}<font size="20px">일</font>`;
  daysTitle.innerHTML = `<font size="20px">${week[today.getDay()]}</font>`;
}

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const month = date.getMonth();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getDate();
  getTime();
  setInterval(getTime, 1000);
}

init();
