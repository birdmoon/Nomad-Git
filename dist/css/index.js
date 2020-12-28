const t1 = document.querySelector("#t1");

function handleClick() {
  t1.style.color = "teal";
  t1.style.background = color = "white";
}

function mouseOut() {
  t1.style.color = "orange";
  t1.style.background = color = "tomato";
}

const age = prompt("How old are you?");

if (age > 18) {
  console.log("You can drink");
} else {
  console.log("you can't");
}

t1.addEventListener("click", handleClick);

t1.addEventListener("mouseout", mouseOut);
