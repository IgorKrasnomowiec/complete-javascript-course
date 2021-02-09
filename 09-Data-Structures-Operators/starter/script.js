// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     time = `whatever`,
//     address = 'If you didnt put it we gonna deliver under The bridge',
//     mainIndex,
//     starterIndex,
//   }) {
//     console.log(
//       `You delivered ${this.starterMenu[starterIndex]},${this.mainMenu[mainIndex]}
//       on addres ${address} on time ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is Your delicious pasta with ${ing1},${ing2},${ing3}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(
//       `pizza will come with ${mainIngredient} main topping and ${otherIngredient}`
//     );
//   },
// };
// // restaurant.orderPizza(`cheese`, `paprika`, `tomato`, `something`);
// // const arr = [1, 2, ...[3, 4]];
// // const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// // console.log(others);
// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];

// // console.log(pizza, risotto, otherFood);
// // console.log(...restaurant.mainMenu);
// // console.log(otherFood);

// // const { fri, ...rest } = restaurant.openingHours;
// // console.log(rest);

// // const add = function (...numbers) {
// //   let sum = 0;
// //   numbers.forEach(element => {
// //     sum += element;
// //   });
// //   console.log(sum);
// // };
// // add(2, 3);
// // add(2, 3, 4);

// // const x = [23, 5, 7];

// // add(...x);

// // const ingredients = [
// //   prompt(`Lets make pasta! Ingriedent 1?`),
// //   prompt(`ingriedent 2`),
// //   prompt(`ingridient 3`),
// // ];
// // restaurant.orderPasta(...ingredients);
// // console.log(ingredients);
// // const arr = [7, 8, 9];
// // const newArr = [7, 8, 9, ...arr];
// // console.log(...newArr);
// // const newMenu = [...restaurant.mainMenu, `Gnocci`];
// // console.log(newMenu);
// // console.log(restaurant.mainMenu);
// // const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(allMenu);
// // const igor = 'igor';
// // console.log(...igor);
// // restaurant.orderDelivery({
// //   time: `22:00`,
// //   address: `via del sole,21`,
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // restaurant.orderDelivery({
// //   mainIndex: 1,
// //   starterIndex: 1,
// //   time: `21:00`,
// //   address: `kosmonautow 16`,
// // });

// // const {
// //   openingHours: {
// //     fri: { open: o, close: g },
// //   },
// // } = restaurant;
// // console.log(o, g);
// // const arr = [2, 3, 4];
// // const [a, b, c] = arr;

// // let [first, second] = restaurant.categories;
// // console.log(first, second);
// // [first, second] = [second, first];
// // console.log(first, second);

// // const [starterCourse, mainCourse] = restaurant.order(2, 0);
// // console.log(starterCourse, mainCourse);

// // const nested = [2, 4, [5, 6]];
// // const [x, , y] = nested;

// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);
// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;

// // console.log(restaurantName, hours, tags);

// //Mutating variables
// // let j = 111;
// // let i = 999;
// // const obj = { j: 23, i: 7, c: 15 };
// // ({ j, i } = obj);

// // console.log(j, i);
// // const a = 3;
// // const b = '';
// // const c = undefined;
// // const d = null;
// // const e = 3;

// // console.log(b  ? d : c);

// //Nullish:null and udefined

//_______________________BY MYSELF__________________________

//CODING CHALLANGE

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...playerNames) {
//     console.log(...playerNames);
//   },
// };
// //1
// const players1 = [...game.players[0]];
// console.log(players1);
// const players2 = [...game.players[1]];
// console.log(players2);
// //2
// const [neuer, ...fieldPlayers] = game.players[0];
// console.log(neuer);
// console.log(fieldPlayers);
// //3
// const [...allPlayers] = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// //4
// const players1Final = [...game.players[0], `thiago`, `coutinho`, `persic`];

// console.log(players1Final);

// //5   IMPORTANT! LEARN!
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, team2, draw);
// //6
// game.printGoals(`zidane`, `lewandowski`, `krasnomowiec`);

// //7
// team1 < team2
//   ? console.log(`team1 is more likely to win`)
//   : console.log(`team2 is more likely to win`);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({
//     time = `whatever`,
//     address = 'If you didnt put it we gonna deliver under The bridge',
//     mainIndex,
//     starterIndex,
//   }) {
//     console.log(
//       `You delivered ${this.starterMenu[starterIndex]},${this.mainMenu[mainIndex]}
//       on addres ${address} on time ${time}`
//     );
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is Your delicious pasta with ${ing1},${ing2},${ing3}`);
//   },
//   orderPizza(mainIngredient, ...otherIngredient) {
//     console.log(
//       `pizza will come with ${mainIngredient} main topping and ${otherIngredient}`
//     );
//   },
// };

// const someNames = new Map();

// someNames.set(1, `igor`).set(2, `arek`).set(3, `julek`).set(true, `wyro`);

// console.log(someNames);
// console.log(someNames.size);

// someNames.delete(2);

// console.log(someNames);
// console.log(someNames.size);
// const arr = [1, 2];
// someNames.set(arr, `kozak`);
// console.log(someNames);

// console.log(someNames.get(arr));

// const question = new Map([
//   [`question`, `what is the best program`],
//   [1, `c`],
//   [2, `java`],
//   [3, `javascript`],
//   [`correct`, 3],
//   [true, `correct`],
//   [false, `try again`],
// ]);

// console.log(question.get(`question`));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
// }

// const answer = prompt(`your answer`);

// if (answer === '1') {
// }

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2
// console.log(gameEvents);

// gameEvents.delete(64);

// //3
// console.log(gameEvents.size);
// //4
// for (const [key, value] of gameEvents) {
//   if (key < 45) console.log(`[FIRST HALF]${key}: ${value}`);
//   else console.log(`[SECOND HALF]${key}: ${value}`);
// }

// const airline = `TAP Air Portugal`;
// const plane = `A320`;
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(`b737`[0]);
// console.log(airline.length);
// console.log(airline.indexOf(`Portugal`));

// console.log(airline);
// console.log(airline.slice(3, -8));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`) console.log(`You got the middle seat`);
//   else console.log(`You got lucky`);
// };
// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23E`);
// checkMiddleSeat(`3E`);

// const myName = `igor`;
// const myName1 = `arek`;
// const myName2 = `asadsadas`;
// const myName3 = `are12k123213`;

// console.log(myName.slice(-1));asdsad
// console.log(myName1.slice(-1));asdsad
// console.log(myName2.slice(-1));asdsad
// console.log(myName3.slice(-1));asdsad
asdsad;
// const someArray = [`cos1`, `cos2`, `cos3`, `cos4`, `cos5`, `cos6`];

// console.log(someArray);

// console.log(airline.toLocaleLowerCase());
// console.log(airline.toLocaleUpperCase());

// //Fix capitalization in name
// const passanger = `iGOR`; // Igor
// const passangerLower = passanger.toLowerCase();
// console.log(passangerLower);
// const passangerCorrect =
//   passangerLower[0].toLocaleUpperCase() + passangerLower.slice(1);

// const fixingCapital = function (name) {
//   const yourName = name;
//   const yourNameToLower = yourName.toLowerCase();
//   const youNameCorrect =
//     yourNameToLower[0].toLocaleUpperCase() + yourNameToLower.slice(1);
//   console.log(youNameCorrect);
// };
// fixingCapital(`pEdAgogiCzny`);

// //Comparing emails
// const email = `hello@jonas.io`;
// const loginEmail = `  Hello@Jonas.Io \n`;

// const loweEmail = loginEmail.toLowerCase();
// const trimmedEmail = loweEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(loginEmail);

// //replacing
// const price = `288.97 zl`;
// const priceUS = price.replace(`zl`, `$`);
// console.log(priceUS);

// const announcement = `All passangers come to boarding door 23. Boarding door 23!`;

// console.log(announcement.replaceAll(`door`, `gate`));

// //Booleans

// const plane1 = `Airbus A320neo`;
// console.log(plane1.includes(`A320`));
// console.log(plane1.includes(`boing`));
// console.log(plane1.startsWith(`Air`));

// if (plane1.startsWith(`Airbus`) && plane1.endsWith(`neo`)) {
//   console.log(`Part of the new Airbus family`);
// }

// //check baggage

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
//     console.log(`You cannot come in`);
//   } else {
//     console.log(`you are welcome`);
//   }
// };
// checkBaggage(`I have laptop, camera and knife `);
// checkBaggage(`I have ball `);
// checkBaggage(`I have laptop and gun `);

// console.log(`a+very+nice+nice+string`.split(`+`));

// console.log(`igor krasnomowiec`.split(` `));

// const [firstName, lastName] = `Igor Krasnomowiec`.split(` `);
// console.log(firstName);
// console.log(lastName);
// const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);

// const capitalizedName = function (name) {
//   const names = name.split(` `);
//   const namesUpper = [];

//   for (const word of names) {
//     namesUpper.push(word[0].toUpperCase() + word.slice(1));
//   }
//   console.log(namesUpper.join(` `));
// };

// capitalizedName(`jessica ann smith davis`);
// capitalizedName(`igor krasnomowiec`);

// const names1 = [`cos 1`, `cos 2`, `cos 3`, `cos 4`];

// //padding

// const message = `go to 23!`;
// console.log(`igor Krasnomowiec`.padStart(50, `:D`).padEnd(100, ':('));

// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, `*`);
// };

// console.log(maskCreditCard(241244213));
// console.log(maskCreditCard(22132244213));
// console.log(maskCreditCard(55544213));

// //repeat
// const message2 = `Bad weather... All Departures Delayed...\n`;

// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`there are ${n} planes in line ${':D'.repeat(5)}`);
// };

// planesInLine(5);

document.body.append(document.createElement(`textarea`));
document.body.append(document.createElement(`button`));
const btn = document.querySelector(`button`);

btn.addEventListener(`click`, function (e) {
  const text = document.querySelector(`textarea`).value;
  const text1 = text.split(`\n`);
  text1.forEach(element => {
    const [first, second] = element.split(`_`);
    const final = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(final);
  });
});
