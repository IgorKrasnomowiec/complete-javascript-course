'use strict';

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `${firstName} are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear > 1981 && birthYear <= 1996) {
//       const firstName = `steaven`;
//       const str = `Oh,and you are a milenieal ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 2));
//       output = `new output`;
//     }
//   }
//   printAge();
//   return age;
// }
// const firstName = `Jonas`;
// calcAge(1993);

// console.log(year);
// console.log(me);
// console.log(job);

// var me = `jonas`;
// let job = `teacher`;
// const year = 1993;

// console.log(addDecl(2, 4));
// function addDecl(a, b) {
//   return a + b;
// }
// const addExp = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;
// var numProduducts = 10;

// console.log(numProduducts);
// if (!numProduducts) {
//   deleteShoppingCard();
// } else {
//   console.log(`you dont need to delete products`);
// }
// function deleteShoppingCard() {
//   console.log(`all products deleted!`);
// }

// // console.log(typeof undefined);
// let b = `to jest b`;
// let a = ``;

// function checkStatement(argumentsa, b) {
//   if (argumentsa == false) {
//     console.log(`undefined is false `);
//     console.log(b);
//   } else {
//     console.log(`undefined is not false`);
//   }
// }
// checkStatement(a, 4);

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);
// console.log(this);

// const caclAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// // caclAge(1991);

// const jonas = {
//   year: 1991,
//   caclAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.caclAge();

// const matilda = {
//   year: 2017,
// };

// matilda.caclAge = jonas.caclAge;

// const jonas = {
//   firsName: 'Jonas',
//   year: 1991,
//   caclAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const self = this;
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 19196);
//     };
//     isMillenial();
//   },
//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firsName}`);
//   },
// };

// jonas.caclAge();

// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 5);
// addExp(2, 5, 6, 7, 8, 9);

// // var addArrow = (a, b) => a + b;

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(oldAge);

// const me = {
//   myName: 'igor',
//   age: 30,
// };

// const friend = me;

// friend.age = 27;

// console.log(friend);
// console.log(me);

// let lastName = `williams`;
// let oldLastName = lastName;

// lastName = `davis`;

// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: `jessica`,
//   lastName: `williams`,
//   age: 27,
// };

// let marriedJessica = jessica;

// console.log(marriedJessica);
// console.log(jessica);

// marriedJessica = {
//   firstName: `sadsadsa`,
// };

// console.log(marriedJessica);
// console.log(jessica);

const jessica = {
  firstName: `jessica`,
  lastName: `williams`,
  age: 27,
  family: [`alice`, `bob`],
};

const jessicaCopy = Object.assign({}, jessica);

jessicaCopy.lastName = `davis`;

jessicaCopy.family.push(`mary`);
jessicaCopy.family.push(`john`);

console.log(`after marriage:`, jessica);
console.log(`before marriage`, jessicaCopy);
