// dodeluvachki (assignment) operatori
/*
    = - dodeluva vrednost
    += - soberi i dodeli vrednost
    -= - odzemi i dodeli vrednost
    *= - pomnozi i dodeli vrednost
    /= - podeli i dodeli vrednost
    %= - presmetaj ostatok i dodeli vrednost
    */

//let x += 2; 
let x = 2;
x += 3; // x = x + 3;
console.log(x);


// Task 01
// Implement some of the given assignemnt operators

let y = 5
y *= 2
console.log(y)

let a = 6;
let b = 12;
let c = 2;

//c /= (b / a);

c %= 3; // c = c % 3; -> c = 2 % 3
console.log(c);

// Alerts
// 1. alert

window.alert("Hello World");
alert("Hello again!");

// 2. confrim

let result = window.confirm("Do you really want to leave?");

console.log(result);

// Console logging

console.error("The user is not logged in!"); // outputs an error message
console.table(["apples", "oranges", "bananas"]); // display data as a table
console.log(["apples", "oranges", "bananas"]);

let person = { name: "Baze", year: 2020 };
console.dir(person);
console.dir(location); // displays interactive list of the properties of the specified object
console.log(location);
console.info("Semos course: Javascript basics.");
console.time("script");
setTimeout(() => {
    console.timeEnd("script");
}, 5000);