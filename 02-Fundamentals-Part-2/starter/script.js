"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("i can drive");

// const interface = "audio";
// const private = 534;
// const if=23;

//--------------FUNCTIONS--------------

// function logger() {
//   console.log("My name is Igor");
// }
// //----------Calling /running/invoking function-------------

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function vegeProcessor(tomato, carrot) {
//   const juice = `Juice with ${tomato} tomatos and ${carrot} carrots `;
//   return juice;
// }

// const tomatojuice = vegeProcessor(20, 0);
// console.log(tomatojuice);
// const carrotJuice = vegeProcessor(0, 52);
// console.log(carrotJuice);
// const mixedJuice = vegeProcessor(10, 10);
// console.log(mixedJuice);

// FUNCTION DECLARATION

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1993);
// console.log(age1);

// //FUNCTION EXPRESSION

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1993);
// console.log(age1, age2);

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

//arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);
// const yearsUntilRetire = (name, age) => {
//   const retirement = 65 - age;
//   return console.log(`${name} gonna retire in ${retirement} years`);
// };

// const retirement = yearsUntilRetire("tomek", 50);
// console.log(retirement);

// function fruitCut(fruit) {
//   return fruit * 4;
// }

// function fruitCutter(oranges, apples) {
//   const orangePieces = fruitCut(oranges);
//   const applePieces = fruitCut(apples);
//   const juice = `You made juice from ${orangePieces} oranges and ${applePieces} apples`;
//   return juice;
// }
// console.log(fruitCutter(2, 2));

// const caclAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetire = function (birthYear, firstName) {
//   const age = caclAge(birthYear);
//   const retirement = 65 - age;
//   return `${firstName} gonna retire in ${retirement} years`;
// };
// console.log(yearsUntilRetire(1991, "igor"));

// const calcAverage = (firstValue, secondValue, thirdValue) =>
//   (firstValue + secondValue + thirdValue) / 3;

// const avarageDolphins = calcAverage(44, 23, 71);
// console.log(avarageDolphins);
// const avarageKoalas = calcAverage(85, 54, 41);
// console.log(avarageKoalas);

// const avarageDolphins2 = calcAverage(85, 54, 41);
// console.log(avarageDolphins);
// const avarageKoalas2 = calcAverage(23, 34, 27);
// console.log(avarageKoalas);

// function checkWinner(avarageDolphins, avarageKoalas) {
//   if (avarageDolphins >= 2 * avarageKoalas) {
//     console.log(`Dolphins won ${avarageDolphins} vs ${avarageKoalas}`);
//   } else {
//     console.log(`Koalas won ${avarageKoalas} vs ${avarageDolphins}`);
//   }
// }
// console.log(checkWinner(avarageDolphins, avarageKoalas));
// console.log(checkWinner(avarageDolphins2, avarageKoalas2));

// const frient1 = "Michael";
// const friend2 = "Michael";
// const friend3 = "Peter";

// const friends = ["Michael", "Michael", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2002);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends[friends.length - 1]);
// friends[2] = "Jay";
// console.log(friends);

// // friends=["bob","alice"]  CANNOT DO LIKE THAT
// const firstName = "Jonas";
// const jonas = [firstName, "JASDJADJS", 2037 - 1991, "teacher", friends];

// console.log(jonas);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];

// console.log(ages);

// const friends = ["Michael", "Michael", "Peter"];
// //ADD ELEMENTS
// const newLength = friends.push("Jay"); //PUSH --LAST
// console.log(friends);
// console.log(newLength);
// friends.unshift("John"); //UNSHIFT FIRST
// console.log(friends);

// //REMOVE ELEMENTS
// const popped = friends.pop(); //LAST
// friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // FIRST
// console.log(friends);

// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Michael"));
// console.log(friends.includes("bob"));
// console.log(friends.includes(23));
// console.log(friends);

// if (friends.includes("Michael")) {
//   console.log(`you have friend call Peter`);
// }

// const tipCalc = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
// console.log(tips, bills);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// const jonas = {
//   firstName: "jonas",
//   lastName: "Shmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   `what do you want to know about Jonas? Choose betwen firstName, lastName, age, job, and friends`
// );

// console.log(jonas[interestedIn]);
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Choose betwen firstName, lastName, age, job, and friends`");
// }

// jonas.location = "portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

//challange

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
// );

// const igorInfo = {
//   name: "igor",
//   lastName: "krasnomowiec",
//   jobName: "adviser",
//   country: "Poland",
// };
// const substitutionName = "Name";
// console.log(igorInfo.name);
// console.log(igorInfo.jobName);

// console.log(igorInfo["last" + substitutionName]);

// const interestedIn = prompt(
//   "What do you want to know about Igor. Choose between first name, lastName etc"
// );
// console.log(igorInfo[interestedIn]);

// if (igorInfo[interestedIn]) {
//   console.log(igorInfo[interestedIn]);
// } else {
//   console.log("Wrong request!Choose between first name, lastName etc");
// }

// igorInfo.occupation = "polish";
// igorInfo["mail"] = "igor@o2.pl";
// console.log(igorInfo.mail);
// console.log(igorInfo.occupation);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmeasd",
//   birthYear: 1993,
//   job: "teacher",
//   friends: ["michael", "peter", "steaven"],
//   hasDriversLicence: false,
//   caclAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   summary: function () {
//     return `${this.firstName} is a${this.caclAge()} -year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicence ? "a" : "no"} driving license`;
//   },
// };

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

//   caclAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
// //   },
// // };
// calcAge:function () {

// }

// console.log(jonas.caclAge());

// console.log(this);
// console.log(jonas["calcAge"](1993));

//Challange
//"Jonas is  a 46-year old teacher,and he as a driver's lisence."

// console.log(jonas.summary());

// const markMiller = {
//   name: "Mark",
//   lastName: "Miller",
//   height: 1.69,
//   weight: 78,
//   calcBmi: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const johnSmith = {
//   name: "John",
//   lastName: "Smith",
//   height: 1.95,
//   weight: 92,
//   calcBmi: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(markMiller.calcBmi());
// console.log(johnSmith.calcBmi());
// console.log(
//   `${markMiller.name} ${
//     markMiller.lastName
//   } BMI ${markMiller.calcBmi()} is higher than ${johnSmith.name}${
//     johnSmith.lastName
//   } BMI ${johnSmith.calcBmi()}`
// );

// console.log("lifting weights repetition 1");

//for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// const jonas = [
//   "Jonas",
//   `Schmedtmann`,
//   2037 - 1991,
//   `teacher`,
//   [`Michael`, `Peter`, `Steven`],
//   true,
// ];
// const types = [];

// console.log(jonas[0]);

// for (let i = 0; i < jonas.length; i++) {
//   //reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
//   //filling types array
//   //   types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log(`--ONLY STRINGS`);
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log(`--BREAK WITH NUMBER`);
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const igorInfo = ["Igor", "Krasnomowiec", 25, "wloclawek", true];
// const igorIFstring = [];
// for (let i = 0; i < igorInfo.length; i++) {
//   if (typeof igorInfo[i] === "number") continue;
//   console.log(igorInfo[i], typeof igorInfo[i]);
// }

// const jonas = [
//   "Jonas",
//   `Schmedtmann`,
//   2037 - 1991,
//   `teacher`,
//   [`Michael`, `Peter`, `Steven`],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------starting exercise ${exercise}`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   //   console.log(`WHILE lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`loope is about to end.. `);
// }

//CODING CHALLANGE 4

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(total));
