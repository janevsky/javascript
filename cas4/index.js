// switch - case

let a = "a"

switch (a) {
    case "a": // a === "a"
        console.log("the variable has value a");
        break; //exit the switch

    case "b":
        console.log("the variable has value b");
        break;
    case "a":
        console.log("the variable has value a");
    default:
        console.log("the variable has word as value")
}

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("This is a work day");
        break;

    case "Tuesday":
        console.log("This is a work day");
        break;

    case "Wendsday":
        console.log("This is a work day");
        break;

    case "Thursday":
        console.log("This is a work day");
        break;

    case "Friday":
        console.log("This is a work day");
        break;
    case "Saturday":
        console.log("This is a weekend day");
        break;

    case "Sunday":
        console.log("This is a weekend day");
        break;

    default:
        console.log("This is not a day");
}

// Objects

/*
let car1_type = "Audi";
let car2_type = "BMW";
let car3_type = "Mercedes";
*/

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

//let carA_type = carA.type;
//console.log(carA_type);

let carB_type = carB.type;
//console.log(carB_type);

let carA_type = carA["type"];
console.log(carA_type);

carA["type"] = "BMW"; // let a = 3; a = 5;
console.log(carA["type"]);

// dodavanje na novo properti na eden vekje napraven objekt

//carA.doors = 5;
console.log(carA.doors);
// ili na sledniov nacin
carA["doors"] = 5;


console.log(carA);