// let v. var
// console.log(carId); 
// // error if carId declared with let (preferred behavior)
// // undefined if carId declared with var

// var carId = 42;

// if(true) {
//     let cardId = 100;
//   } 
// console.log(cardId); // cardId is undefined

// Rest Parameters
// function sendCars(...allCarIds) {
//     allCarIds.forEach( id => console.log(id) );
// }

// console.log(sendCars('ABC', 1, 2, 3));

// Destructuring Arrays
// let carIds = [1, 2, 3];
// let car1, remainingCars;
// [car1, ...remainingCars] = carIds; // 1 [2, 5]
// [, , ...remainingCars] = carIds;
// [car1, car2] = carIds;

// console.log(remainingCars); // [3]

// Destructuring Objects into new variables
