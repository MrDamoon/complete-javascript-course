const country = "Poland";
const continent = "Europe";
let population = 36;
const isIsland = false;
let language;
language = "Polish";
const description = `${country} is in ${continent}, and its ${population} milions people speaking ${language}`;

// console.log(description);

//Coding challenge #1
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;

//console.log(markBMI, johnBMI, markHigherBMI);

//Coding challenge #2
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI} is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI} is higher than Mark's (${markBMI})`);
}

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`
//   );
// }