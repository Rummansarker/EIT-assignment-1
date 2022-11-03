// 1.using for loop method

for(let i=1; i<=10; i++){
    for(let j = 1; j<=i; j++){
        console.log(j);
    }
    console.log("<br>");
}

// 2. using loop-of method

let number = [1,2,4,5,6];
for(let x of number){
    console.log(x);
}

let carsNames1 = ["BMW", "Audi", "Mark 2"];
for(let newCarNames of carsNames1){
    console.log(newCarNames);
}

// 3. using loop-in method 

let students = {
    ID : 101,
    name : "Rubayet",
    cgpa : 3.75
}

for(let studentInfo in students){
    console.log(`${studentInfo} : ${students[studentInfo]}`);
}


