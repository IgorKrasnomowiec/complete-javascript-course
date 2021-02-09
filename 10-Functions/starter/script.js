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

const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name}booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, `Jonas Schmedtmann`);
lufthansa.book(635, `Jonas Schmith`);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};
console.log(eurowings);

const book = lufthansa.book;

//Does not work
// book(23, `sarah Williams`);
book.call(eurowings, 23, ` Sarah Williams`);
console.log(eurowings.bookings);
console.log(lufthansa.bookings);

const swiss = {
  airline: `Swiss Airs Lines`,
  iataCode: `LX`,
  bookings: [],
};

book.call(swiss, 583, `Marry Cooper`);

//Bind
// book.call(eurowings, 23, ` Sarah Williams`);
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, `Steven Williams`);
