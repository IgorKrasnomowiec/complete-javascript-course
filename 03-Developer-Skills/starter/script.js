// Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const tempetures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// //what is tempeture amplitude?
// //aswer difference between highest and lowest temp

// //2) how to ignore errors
// //find max value in temp array
// //fint minimum value in arr
// //sumstract min from max(amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
// };
// calcTempAmplitude([3, 7, 4, 27]);
// // //max=3

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt(`degrees celsius:`),
//   };
//   console.log(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}C in ${i + 1} days `);
  }
};
printForecast(data2);
