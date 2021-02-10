'use strict';
// const bookings = [];
// const createBooking = function (flightNum, numPassangers = 4 * 5, price = 199) {
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking(`LH123`, undefined, 4);

// const flight = `LH234`;
// const jonas = {
//   name: `igor Krasnomowiec`,
//   passport: 9309245232,
// };
// const checkIn = function (flightNum, passanger) {
//   flightNum = `Lh999`;
//   passanger.name = `Mr.` + passanger.name;
//   if (passanger.passport === 9309245232) {
//     alert(`Check in`);
//   } else {
//     alert(`wrong passport`);
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);

//////////////// IMPORTANT ////////////////////

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(` `);
// };

// //higer-order function
// const transformer = function (str, fn) {
//   console.log(`original string:${str}`);
//   console.log(`transformed string: ${fn(str)}`);
//   console.log(`transformed by: ${fn.name}`);
// };

// transformer(`javaScript is the best!`, upperFirstWord);
// transformer(`javaScript is the best!`, oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}${name}`);
//   };
// };

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet(`hey`);
// greeterHey(`jonas`);
// greeterHey(`steaven`);

// const calculate = pro => param => console.log(` ${pro} ${param}`);

// calculate(`Here is first  PRO   argument`)(`In here is second argument`);

// const lufthansa = {
//   airline: `Lufthansa`,
//   iataCode: `LH`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name}booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, `Jonas Schmedtmann`);
// lufthansa.book(635, `Jonas Schmith`);

// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };
// console.log(eurowings);

// const book = lufthansa.book;

// //Does not work
// // book(23, `sarah Williams`);
// book.call(eurowings, 23, ` Sarah Williams`);
// console.log(eurowings.bookings);
// console.log(lufthansa.bookings);

// const swiss = {
//   airline: `Swiss Airs Lines`,
//   iataCode: `LX`,
//   bookings: [],
// };

// book.call(swiss, 583, `Marry Cooper`);

// //Bind
// // book.call(eurowings, 23, ` Sarah Williams`);
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, `Steven Williams`);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23(`Igor Krasnomowiec`);
// bookEW23(`Martha Cooper`);

// //With event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;

//   console.log(this.planes);
// };
// lufthansa.buyPlane();
// console.log(lufthansa.planes);

// document
//   .querySelector(`.buy`)
//   .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

//Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(23));

// const addTax = function (rate) {
//   return function (value) {
//     console.log(`${value + rate * value}`);
//   };
// };
// addTax(0.43)(100);

// const poll = {
//   question: `what is your favourite programing language?`,
//   options: [`0:Javascript`, `1:Python`, `2:Rust`, `3:C++`],
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const promptValue = parseInt(
//       prompt(
//         `what is your favourite programing language?
//       0:Javascript
//       1:Python
//       2:Rust
//       3:C++`
//       )
//     );
//     if (typeof promptValue === `number` && promptValue == 0) {
//       this.answers[0]++;
//     } else if (typeof promptValue === `number` && promptValue == 1) {
//       this.answers[1]++;
//     } else if (typeof promptValue === `number` && promptValue == 2) {
//       this.answers[2]++;
//     } else if (typeof promptValue === `number` && promptValue == 3) {
//       this.answers[3]++;
//     } else {
//       console.log(`You didnt put number or the number is too high`);
//     }
//     poll.displayResult();
//   },
//   displayResult: function (type = `string`) {
//     if (type === `string`) {
//       console.log(`Poll results are ${poll.answers}`);
//     } else if (type === `array`) {
//     } else {
//       console.log(`You didnt put string nor array`);
//     }
//   },
// };

// document
//   .querySelector(`.poll`)
//   .addEventListener(`click`, poll.registerNewAnswer.bind(poll));
// poll.displayResult(`array`);

// const runOnce = function () {
//   console.log(`This will never run again`);
// };

// //IIFE

// (function () {
//   console.log(`This will never run again`);
//   const isPrivate = 23;
// })();

// (() => {
//   console.log(`This will ALSO never run again`);
// })();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

// let f = 27;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// // Re-assigning f function
// h();
// f();

// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all${n} pasengers`);
//     console.log(`there are 3 groups , each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };
// boardPassenger(180, 3);
(function () {
  const header = document.querySelector(`h1`);
  header.style.color = `red`;
  document.body.addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();
