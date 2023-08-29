//

let weight = "88.3";
let height = "1.75";

const weightAsNumber = Number.parseFloat(weight.replace(",", "."));
const heightAsNumber = Number.parseFloat(height);
const bmi = weightAsNumber / Math.pow(heightAsNumber, 2);
const mesaj = `BMI pentru cineva cu inaltimea ${heightAsNumber}, si greutatea ${weightAsNumber} este ${bmi}`;
// console.log();

const element = document.getElementById("test");
element.innerText = mesaj;
