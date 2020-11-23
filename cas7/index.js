console.warn(" CAS 7")

// var & let scrope

var x = 1;
//var y = "1";
//x == y
if (x === 1) {
    var x = 2;
    console.log(x);
};

console.log(x);

console.warn("END");

var y = 1;

if (y === 1) {
    let y = 2;
    console.log(y);
};

console.log(y);

console.warn("END");

// Functions

//traditional functions

function print() {
    console.log("Hello world");
};
print();
console.warn("END");

/*console.log("Hello world");
console.log("Hello world again");
console.log("Hello world again again");
console.log("Hello world again again again");*/

function print1(message) {
    console.log(message);
    return true;
};

print1("Hello world!")
print1("Hello world again!")

let result = print1("Hello world")

if (result) {
    console.log("Message printed");
} else {
    console.log("Message not printed");
};
console.warn("END");

// task 01
// Create a function that will return the sum of two numbers. Execture the function.

function sumNumbers(a, b) {
    return a + b;
}
let c = sumNumbers(2, 3);

console.log(c); // ova moze i posle IF ciklus

if (c % 2 === 0) {
    console.log("the result is even");
} else {
    console.log("the result is odd");
};

console.log(c);

console.warn("END TASK 01");

let print_message = function(message) {
    console.log(message);
};

print_message("Hello");

console.warn("END");

// fat arrow functions

let sum_numbers = (x, y) => {
    return x + y;
};

s = sum_numbers(5, 8);
console.log(s);
console.warn("END");

// VEZBI

// Print the following pattern
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

let num = " ";

for (let i = 1; i < 6; i++) {

    console.log(i);
    num += (i + " ");
    console.log(num);

}

console.warn("VEZBA 1");