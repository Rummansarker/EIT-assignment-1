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

// 3.using fill method of array 

let number1 = [1, 2, 3, 4, 5];
console.log(number1.fill(0, 2, 4));

// 4. using push method of array

let myName1 = ["Rubayet", "Rumman", "Antor"];
myName1.push("Zaman");
console.log(myName1);

// 5. using pop method of array

let myName2 = ["Selim", "Raju","Sumon"];
myName2.pop();
console.log(myName2);

// 6. using unshift method of Array

let myName3 = ["Fahad", "Sabbir"];
myName3.unshift("Morsalin");
console.log(myName3);

// 7. using pop method of array

let myName4 = ["Munna", "Al amin","Rumman"];
myName4.shift();
console.log(myName4);

// 8. using slice method of array

let num1 = [1,2,3,4,5,6];
let num = num1.slice(1, 3);
console.log(num);

// 9.using splice method of array

let num2 = [2,3,4,5,7,8];
let spliceNumber = num2.splice(0, 4);
console.log(spliceNumber); 

// 10. using isArray method of array

let carsNames = ['BMW', 'Audi','Range Rover'];
console.log(Array.isArray(carsNames));

// 11. using sort method of array

let colorNames = ["red", "blue", "maroon", "white"];
colorNames.sort();
console.log(colorNames);

// 12. using reverse method of array 

let number4 = [33, 43,53,23,12,34];
number4.reverse();
console.log(number4);

// 13. using find method of array 

let number5 = [13, 32, 45, 65, 200,300];

let newnumbers = number5.find(function(number5){
    return number5 > 20;

});

console.log(newnumbers);

// 14. using findIndex method of array 

let numbers6 = [3, 21, 12, 6, 130, 45];
let newNumbers6 = numbers6.findIndex(function(numbers6){
    return numbers6 > 12;
})
console.log(newNumbers6);

// 15.using forEach method of array 

let numbers7 = [10,15,20,25,30];
numbers7.forEach(function(newnumbers7){
    console.log(newnumbers7);
});

// 16. using fill method of array 

let fruits = ["Banana", "Orange", "Apple"];
fruits.fill("Mango");
console.log(fruits);

// 17. using join method of array 

let bikeNames = ["Yamaha", "Bajaj", "Suzuki"];
let newBikeNames = bikeNames.join(" * ");
console.log(newBikeNames);

// 18. using includes method of array 

let friendsName = ["Rubayet", "Rumman", "Antor", "Raju"];
let newFriendsName = friendsName.includes("Rumman");
console.log(newFriendsName);

// 19. using filter method of array 

let ages = [21, 17, 43, 54, 12, 34];
let newAges = ages.filter(function(ages){
    return ages >= 18;
})
console.log(newAges);

// 20. using from method of array 

let textNames = "Rubayet"
let newTextNames = Array.from(textNames);
console.log(newTextNames);

// 21. using some method of array 

let numbers8 = [23,43,21,9,112,13,4.];
let newnumbers8 = numbers8.some(function(numbers8){
    return numbers8 > 25;
});
console.log(newnumbers8);

// 22. using map method of array 

let mapNumbers = [3, 6, 12, 15];
let newMapNumbers = mapNumbers.map(Math.pow);
console.log(newMapNumbers);

// using spread operator for concatenation two array 

let friendsNames1 = ["Rubayet", "Rumman"];
let friendsNames2 = ["Munna", "Antor"];
let friendsNames = [...friendsNames1, ...friendsNames2];
console.log(friendsNames);