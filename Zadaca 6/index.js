/* HOMEWORK 6 */
people = [
    { fname: 'David', lname: 'Rayy', age: 34 },
    { fname: 'Suzanne', lname: 'Collins', age: 38 },
    { fname: 'Walter', lname: 'Isaacson', age: 24 },
    { fname: 'John', lname: 'Doe', age: 51 },
    { fname: 'Jane', lname: 'Donnson', age: 20 }
];

// Calculate the sum of the ages - people array

let sumAge = 0;

for (let i = 0; i < people.length; i++) {
    sumAge += people[i].age;
}
console.log(sumAge);

console.warn("END 1");

// Find the people that are older than 36

for (i = 0; i < people.length; i++) {
    if (people[i].age >= 36) {
        console.log(people[i].fname);
    }
}
console.warn("END 2");

// Find the people that are smaller than 24

for (i = 0; i < people.length; i++) {
    if (people[i].age <= 24) {
        console.log(people[i].fname);
    }
}
console.warn("END 3");

// Find the person with the longest name

let longName = "Baze";

for (i = 0; i < people.length; i++) {
    if (people[i].fname.length > longName.length) {
        longName = people[i].fname
    }
}
console.log(longName);

console.warn("END 4");

numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];

// Multiply every element by 3 

let multiNumber = numbers.map(a => {
    return a * 3;
});
console.log(multiNumber);

console.warn("END 5");

// Sort the numbers (ascending and descending)

numbers.sort((a, b) => {
    return a - b;
});
console.log(numbers);

numbers.sort((a, b) => {
    return b - a;
});
console.log(numbers);

console.warn("END 6");

// Find the sum of the numbers

let sumNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
}
console.log(sumNumbers);

console.warn("END 7");

// Find max and min in the array

numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

console.warn("END 8");

// Find second largest element in the array

numbers.sort((a, b) => {
    return b - a;
});
console.log(numbers[1]);

console.warn("END 9");

// Find the total numbers of even and odd elements in the array

let odd = [];
let even = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
    } else {
        odd.push(numbers[i]);
    }
}
console.log(even.length);
console.log(odd.length);
console.warn("END 10");

// Count number of digits in a number

let numberDigi = 6549;

console.log((numberDigi + "").length);

console.warn("END 11");

// Print the following pattern
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

let pattern = " ";

for (let i = 1; i < 6; i++) {
    console.log(pattern += i + " ");
}
console.warn("END 12");

// Write a program to find power of a number.

let broj1 = 5;
let broj2 = 2;

console.log(Math.pow(broj1, broj2));
console.warn("END 13");

array = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200];

// Given an array loop throught it and display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration

for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0) {
        console.log(array[i])
        if (array[i] === 150) {
            break;
        }
    }
}
console.warn("THE END OF HOMEWORK")