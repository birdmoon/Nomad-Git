// You're gonna need this
const title = document.querySelector("h1");
const dday = document.querySelector("h2");
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  const date = new Date();
  nowDay = date;
  // Don't delete this.
  const xmasDay = new Date("2021-07-29:00:00:00+0900"); //대한민국 표준시

  const remain = xmasDay - nowDay;

  const days = Math.floor(remain / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remain / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remain / (1000 * 60)) % 60);
  const seconds = Math.floor((remain / 1000) % 60);

  dday.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s `;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  title.innerHTML = `Time Until Christmas`;
}
init();
