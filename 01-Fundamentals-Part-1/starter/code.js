// // let js = "amazing";

// // console.log(40 + 8 + 20);

// // console.log("Igor");
// // console.log(23);

// // let firstName = "vakir";
// // console.log(firstName);
// // console.log(typeof js);

// // let year;
// // console.log(year);

// // console.log(typeof year);
// // year = 1991;
// // console.log(typeof year);
// // console.log(typeof null);

// // let age = 30;
// // age = 31;
// // const birth = 1993;
// // birth = 1992;

// console.log(ageSarah, ageJonas);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// //2**3 means to the power of 3=2*2*2

// const fistName = "igor";
// const lastName = "krasnomowiec";

// console.log(fistName + " " + lastName);

// let x = 10 + 5;
// x += 10; //x=x+10; =25
// x *= 4; //x=x*4;=100
// x++; //x=x+1;
// x--; //x=x-1;

// console.log(x);
// //Comparison operators
// console.log(ageJonas > ageSarah); // >,<,>=.<=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);
// let x, y;
// x = y = 25 - 10 - 5; // x=y=10, x=10
// console.log(x, y);

// const avarageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, avarageAge);

// const markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi);
// const massIgor = 90;
// const heightIgor = 1.8;

// const bmiIgor = massIgor / heightIgor ** 2;
// console.log(bmiIgor);

// const firstName = "igor";
// const job = "teacher";
// const bithYear = 1991;
// const year = 2037;
// const igor =
//   "I'm " + firstName + ",a " + (year - bithYear) + " years old " + job + "!";
// console.log(igor); // bad

// const igorNew = `I'm ${firstName}, a ${year - bithYear} year old ${job}! `;
// console.log(igorNew); // good

// console.log(`tutaj
// stawiam
// nowa
// linie`);

// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can start her driving licence`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`sarah is too young to have driving licence.
//   ${yearsLeft} years left to have it`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBmi = markWeight / markHeight ** 2;
// console.log(markBmi);

// const johnBmi = johnWeight / johnHeight ** 2;
// console.log(johnBmi);

// if (markBmi > johnBmi) {
//   console.log(`Mark's Bmi ${markBmi} is higher than John's ${johnBmi}`);
// } else {
//   console.log(`John have higher BMI`);
// }
// const inputYear = "1991";
// console.log(2020 + Number(inputYear));

//type coercion JS converting strings to numbers automaticly
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3); //10 result
// console.log("23" + "10" - 3); //2307 result
// console.log("23" * "2"); //46 result
// console.log("23" > "18"); //true

// let n = "1" + 1; //'11'
// n = n - 1; // '11' string is converting to number
// console.log(n);

//5 falsy values: 0,"",undefined, null, NaN; THEY BECOME FALSE WHEN WE TRY TO CONVERT THEM TO BOOLEAN!
//FALSE
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(0));

// const money = 0;

// if (money) {
//   console.log(`Dont spend it all `);
// } else {
//   console.log(`You should get a job`); //Its gonna show THIS because 0 IS FALSE
// }

// let height;
// if (height) {
//   console.log("Yay! height is defined");
// } else {
//   console.log(`Height is undefined`); //Its gonna show THIS because UNDEFINED IS FALSE
// }

// const age = 18;

// if (age === 18) console.log("You just became an adult :D"); // Allways supposed to use === It call triple equal operator

// const favourite = Number(prompt("whats your favourite number")); // Number- Converting everything what is in bracket(nawias) to number

// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) {
//   //'23'==23
//   console.log(`cool! 23 is an amazing number`);
// } else if (favourite === 7) {
//   console.log(`i like 7 as well :D`);
// } else {
//   console.log("I dont like this number");
// }
// if (favourite !== 23) console.log("why not 23?");

// const hasDriversLicence = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive");
// // } else {
// //   console.log(`Somone else should drive`);
// // }

// const isTired = false; //C
// console.log((hasDriversLicence && hasGoodVision) || isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log(`Somone else should drive`);
// }

// const dolphinsAvarageScore = (96 + 108 + 89) / 3;
// const koalAvarageScore = (88 + 91 + 110) / 3;

// if (dolphinsAvarageScore > koalAvarageScore) {
//   console.log(`Dolphins won`);
// } else if (koalAvarageScore > dolphinsAvarageScore) {
//   console.log(`Koalas won`);
// } else if (dolphinsAvarageScore === koalAvarageScore) {
//   console.log(`Both teams WON`);
// }

// //Bonus 1
// const dolphinsAvarageScore = (96 + 108 + 89) / 3;
// const koalAvarageScore = (88 + 91 + 110) / 3;
// const minimumAvaragePoints = 100;

// if (
//   dolphinsAvarageScore > koalAvarageScore &&
//   dolphinsAvarageScore >= minimumAvaragePoints
// ) {
//   console.log(`Dolphins won and have minimum avarage poins`);
// } else if (
//   koalAvarageScore > dolphinsAvarageScore &&
//   koalAvarageScore >= minimumAvaragePoints
// ) {
//   console.log(`Koalas won and have minimum avarage points`);
// } else if (dolphinsAvarageScore === koalAvarageScore) {
//   console.log(`Both teams WON`);
// }

// const day = `tuesday`;

// switch (day) {
//   case "monday": //day==='monday'
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case "tuesday":
//     console.log(`Prepare theory videos`);
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//   case "friday":
//     console.log(`record videos`);
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy weekend");
//     break;
//   default:
//     console.log("enter a valid day");
// }
// let input = "friday";

// if (input === "monday") {
//   console.log("We have monday");
// } else if (input === "tuesday") {
//   console.log("we have tuesday!!");
// } else if (input === "wednesday" || input === "thursday") {
//   console.log("we getting closer to friday");
// } else if (input === "friday") {
//   console.log(`Finally friday`);
// } else if (input === "saturday" || input === "sunday") {
//   console.log("weekend!");
// } else {
//   console.log("You need to put valid week name");
// }

// const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine`)
// //   : console.log(`I have to dring water`);
// const age = 23;
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = `wine`;
// } else {
//   drink2 = `water`;
// }
// console.log(drink2);

// console.log(`I like to drink ${drink}`);

// let billValue = prompt("put tip Value");

// if (billValue > 50 && billValue <= 300) {
//   console.log(
//     `The bill was ${billValue},the tip was ${billValue * 0.15}, total is ${
//       billValue * 0.15
//     }+${billValue}`
//   );
// }

// let bill = 100;

// let tip = bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

// console.log(`Bill is ${bill}, tip is ${tip} for all is ${bill + tip}`);
