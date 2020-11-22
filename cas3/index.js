console.time('script');
// console.assert example
let a = 3;
let b = 4;
let c = (a >= b || a == 3);
// console.assert(a + b < 10, 'The sum of the numbers is not greater than 10');
console.assert(a >= b || a !== 3, 'a is not greater of equal to b nor is different from 3');

// console.trace example
function foo() {
    function bar() {
        console.trace();
    }
    bar();
}
foo();
console.timeEnd('script');
/* setTimeout(() => {
    console.timeEnd('script');
}, 5000); */

// Conditional statements
/* if(a > 0) {
    console.log('a is a positive number');
}
if(a < 0) {
    console.log('a is a negative number');
} */

/* if (a > 0) {
    console.log('a is a positive number');
} else {
    console.log('a is a negative number');
}
 */
a = 10;
/* wrong result at the end !!!
 if (a === 0) {
    console.log('a is a zero');
} else if (a > 0 && a % 2 === 0) {
    console.log('a is a positive and even number');
} else {
    console.log('a is a negative and odd number');
} */

if (a === 0) {
    console.log('a is a zero');
} else if (a > 0) {
    // the number is positive
    if (a % 2 === 0) {
        // the number is even
        console.log('a is a positive and even number');
    } else {
        // the number is odd
        console.log('a is a positive and odd number');
    }
} else {
    // the number is negative
    if (a % 2 === 0) {
        // the number is even
        console.log('a is a negative and even number');
    } else {
        // the number is odd
        console.log('a is a negative and odd number');
    }
}

if (a === 0) {
    console.log('a is a zero');
} else if (a % 2 === 0) {
    // the number is even
    if (a > 0) {
        // the number is positive
        console.log('a is a positive and even number');
    } else {
        // the number is negative
        console.log('a is a negative and even number');
    }
} else {
    // the number is odd
    if (a > 0) {
        // the number is positive
        console.log('a is a positive and odd number');
    } else {
        // the number is negative
        console.log('a is a negative and odd number');
    }
}

/* if (a === 0) {
    console.log('a is a zero');
} else  */
if ((a > 0) && (a % 2 === 0)) {
    console.log('a is a positive and even number');
} else if ((a > 0) && (a % 2 !== 0)) {
    console.log('a is a positive and odd number');
} else if ((a < 0) && (a % 2 === 0)) {
    console.log('a is a negative and even number');
} else if ((a < 0) && (a % 2 !== 0)) {
    console.log('a is a negative and odd number');
} else {
    console.log('a is a zero');
}

// Task 01
// Write a JavaScript conditional statement to find the sign of 
// product of three numbers. Display an alert box with the specified sign.