const d = new Date();
let hour = d.getHours();

console.log(hour);

if (hour < 5) {
  console.log("Godnat");
} else if (hour >= 5) {
  console.log("Godmorgen");
} else if (hour >= 10) {
  console.log("Goddag");
} else {
  console.log("Godaften");
}

let point;
point = 0;
document.querySelector("#btn").addEventListener("click", getPoint);

function getPoint() {
  console.log("getPoint");
  //   point = point + 1;
  point++;
  document.querySelector("#pointCalc").textContent = point;
}
