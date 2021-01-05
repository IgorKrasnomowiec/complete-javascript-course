'use strict';

// function caclAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName} ,you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're millenial,${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }

// const firstName = `Jonas`;
// caclAge(1993);

// //variables

// console.log(me);
// // console.log(job);
// // console.log(teacher);

// var me = `Jonas`;
// let job = `teacher`;
// const year = 1991;

//functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// // };
// // const addArrow = (a, b) => a + b;

// //example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`all products deleted!`);
// }

// console.log(this);

// const caclAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// caclAge(1991);

// console.log(this);

// const caclAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// caclAgeArrow(1980);

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
// matilda.caclAge();

// const f = jonas.caclAge;

// // f();

// const jonas = {
//   firstName: `jonas`,
//   year: 1991,
//   caclAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: () => console.log(`hey ${this.firstName}`),
// };
// jonas.greet();

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'jonas',
//   age: 30,
// };
// const friend = me;

// friend.age = 27;

// console.log(`friend:`, friend);
// console.log(`me:`, me);

// let age = 30;
// let oldAge = age;

// age = 35;
// console.log(age);
// console.log(oldAge);

const jessica = {
  firstName: `jessica`,
  lastName: `Williams`,
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = `devis`;
console.log(`before marriage:`, jessica);
console.log(`AFTER marriage:`, marriedJessica);

marriedJessica = {};
