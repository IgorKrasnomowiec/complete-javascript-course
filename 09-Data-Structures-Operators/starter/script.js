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
