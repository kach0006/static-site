// const d = new Date();
// let hour = d.getHours();

// console.log(hour);

// if (hour < 5) {
//   console.log("Godnat");
// } else if (hour >= 5) {
//   console.log("Godmorgen");
// } else if (hour >= 10) {
//   console.log("Goddag");
// } else {
//   console.log("Godaften");
// }

// let point;
// point = 0;
// document.querySelector("#btn").addEventListener("click", getPoint);

// function getPoint() {
//   console.log("getPoint");
//   //   point = point + 1;
//   point++;
//   document.querySelector("#pointCalc").textContent = point;
// }

// const myBeverage = document.querySelector(".beverages");
// myBeverage.addEventListener("click", alcoholCheck);
// const nonAlcoholic = ["cola", "fanta"];

// function alcoholCheck(event) {
//   if (nonAlcoholic.includes(event.target.alt)) {
//     console.log("You chose a non-alcoholic beverage");
//     document.querySelector("#bevContent").textContent = "You chose a non-alcoholic beverage";
//   } else {
//     console.log("You chose an alcoholic beverage");
//     document.querySelector("#bevContent").textContent = "You chose an alcoholic beverage";
//   }
//   console.log(event.target.alt);
// }

let numberInput = document.querySelector("#num");
document.querySelector("#btn").addEventListener("click", checkNumber);

function checkNumber() {
  let correctNumber = Math.round(Math.random() * 10);
  console.log(correctNumber);

  if (numberInput.value == correctNumber) {
    console.log("Correct number");
    document.querySelector("#result").textContent = "Correct number, you win nothing!";
  } else {
    console.log("Wrong number, try again");
    document.querySelector("#result").textContent = "Wrong number, try again!";
  }
}
