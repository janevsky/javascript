// Arrays

let carA = {
    type: "Audi",
    model: "A6",
    year: 2018,
    color: "black"

};

let carB = {
    type: "FA",
    model: "A6",
    year: 2018,
    color: "black"

};

//let cars = ["Audi", "BMW", "Jeep"];
let ages = [24, 27, 33];

//console.log(cars);
//console.log(cars[2]);

// Task 01

let cars = [{
        type: "Audi",
        model: "A6",
        year: 2018,
        color: "Black"

    },
    {
        type: "BWM",
        model: "M3",
        year: 2020,
        color: "Silver"

    }
];
console.log(cars[1].year);

let model = cars[1].model;
console.log(`The model od the car is ${model}`)

// task 02

cars[1].model = "M6";
console.log(`The year is changed to ${cars[1].model}`);


// array typeof

let numberOfCars = cars.length; // lenght broi kolku index ima vo cars
console.log(numberOfCars);

// JSON format

/*"carC" = {
    "type": "TEST",
    "model": "TEST",
    "year": 2018,
    "color": ["test", "test", "test"]

};*/

let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(text);
/*
//unpack from JSON
let employees = JSON.parse(text);
console.log(employees);*/

//pack from JSON
let employees = JSON.parse(text);
employees.employees[0].firstName = "Ivana"
console.log(JSON.stringify(employees));


// Loops - ciklusi
carsLoops = [{
        type: "Audi",
        model: "A6",
        year: 2018,
        color: "Black"

    },
    {
        type: "BWM",
        model: "M3",
        year: 2020,
        color: "Silver"

    },
    {
        type: "Ford",
        model: "A6",
        year: 2018,
        color: "Black"

    },
    {
        type: "Opel",
        model: "M3",
        year: 2020,
        color: "Silver"

    }
];

// for loop

for (let i = 0; i < carsLoops.length; i++) {
    // code to be executed
    console.log("i", i);
    console.log(carsLoops[i].type);
}
console.log("for ENDED");

// for in loop - bara object!!!
for (let prop in carsLoops[0]) {
    //console.log(prop);
    console.log(carsLoops[1].hasOwnProperty(prop));
}
console.log("ENDED");

// for of loop
for (let value of carsLoops) {
    console.log(value);
}
console.log("ENDED");

// while loop
let i = 0;

while (i < carsLoops.length) {
    console.log(carsLoops[i]);
    i++;
}
console.log("ENDED");

// do while loop
let j = 0;
do {
    console.log(carsLoops[j])
    j++;
} while (j < carsLoops.length);
console.log("ENDED");