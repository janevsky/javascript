// pass by value & pass by reference

function sum(x, y) {
    return x + y;
}
let a = 3;
let b = a;

sum(a, b);
console.log(a);
console.log(b);


/*let changeA = (a) => {
    a = 5;
}

changeA(a);
console.log(a); // nema da se promeni nisto*/


let changeA = () => {
    a = 5;
}

changeA(a);
console.log(a);
console.log(b); // ke se promeni (b) spored (a) dokolku stavime b = a; vo funkcijata changeA()


// TASK 01
// create two person objects. Try the above example with the objects.

let person1 = { name: 'Blagoja', lastname: 'Janevski' };
let person2 = person1;

let changePerson = (person) => {
    person.name = 'Branko';
};

changePerson(person1);

console.log(person1);
console.log(person2);


// asynchronous code execution

/*console.log('Hello World!');
console.log('Hi');

setTimeout(() => {
    console.log('TIMEOUT');
}, 2000);

console.log('Bye');*/

// Promise
// 1. async and await commands

let timeout_func = () => {
    return new Promise((resolve, reject) => { //callback funkcija
        setTimeout(() => {
            console.log('TIMEOUT');
            return resolve('Finished');
            //resolve reject('not finished');
        }, 2000);
    });
};

let wait_for_timeout = async() => {
    let response = await timeout_func();
    console.log(response);
    console.log('Bye');
};

wait_for_timeout();