// // 1. using concat method of array

let country1 = ["Bangladesh", "India"];
let country2 = ["Pakistan", "England"];
let country = country1.concat(country2);
console.log(country);
// document.write(country);

// 2. using every method of array 

let number = [10, 20, 30, 40, 50];

let numberValue = number.every(function(number){
    return number>=6;

});
console.log(numberValue);

let number1 = [1, 2, 3, 4, 5];
console.log(number1.fill(0, 2, 4));

