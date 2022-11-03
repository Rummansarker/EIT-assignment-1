
// entries ()

let phoneName = {
    apple : "14 pro max",
    color : "silver",
    ram : "8gb"
}
for (let [key , value] of Object.entries(phoneName)){
    console.log(`${key} : ${value}`);
}

// hasOwn ()

let object1 = {};
object1.property1 = 42;
console.log(object1.hasOwnProperty('property1'));


// keys ()

let student = {
    name : "Hanif",
    age : 21,
    cgpa : 3.57
}

console.log(Object.keys(student));

// values ()

let bikeNames = {
    yahama : "R15",
    bajaj : "pulser",
    tvs : "metro plus"
}

console.log(Object.values(bikeNames));

// using spread operator for merging two object 

let names1 = {
    name: "Rumman",
    age : 20,

}

let names2 = {
    cgpa : 3.50,
    occupation : "Student"
}

let name = {...names1, ...names2};
console.log(name);