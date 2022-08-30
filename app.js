let scoreOne = document.getElementById("scoreOne");
let PlusOneBtn = document.getElementById("buttonPlus1");
let PlusThreeBtn = document.getElementById("buttonPlus3");

let scoreTwo = document.getElementById("scoreTwo");
let plusOneBtnTwo = document.getElementById("buttonPlus1Two");
let plusThreeBtnTwo = document.getElementById("buttonPlus3Two");

let pointOne = 0;
let pointTwo = 0;

function increaseBy1() {
  scoreOne.innerText = pointOne;
  pointOne++;
}
function increaseBy3() {
  scoreOne.innerText = pointOne;
  pointOne += 3;
}
function increaseBy1Two() {
  scoreTwo.innerText = pointTwo;
  pointTwo++;
}
function increaseBy3Two() {
  scoreTwo.innerText = pointTwo;
  pointTwo += 3;
}
