/* ДОМАШНА РАБОТА 01
    1. Декларирај променливи од сите примитивни типови.
*/
let a = "promenliva";
let b = 5;
let c = false;
let d = undefined;
let e = null;

// 2. Испечати ги соодветно вредностите и типовите на променливите.

console.log(a + ' type ' + typeof(a));
console.log(b + ' type ' + typeof(b));
console.log(d + ' type ' + typeof(c));
console.log(c + ' type ' + typeof(d));
console.log(e + ' type ' + typeof(e));

// 3. Промени ја вредноста на некоја од променливите.

c = true;
console.log(c);

// 4. Креирај константа и обиди се да и доделиш нова вредност. Што се случува?

const f = 8;
//f = 7;

// 5. Декларирај променливи и употреби ги аритметичките оператори (да се испечатат резултатите)
let g = 2;
let h = 3;

console.log(g - h);
console.log(g + h);
console.log(g / h);
console.log(g * h);
console.log(g % h);
console.log(g++);
console.log(g--);

// 6. Декларирај променливи и употреби ги операторите за споредба (да се испечатат резултатите)

console.log(g == h);
console.log(g === h);
console.log(g != h);
console.log(g !== h);
console.log(g > h);
console.log(g >= h);
console.log(g < h);
console.log(g <= h);

// 7. Декларирај променливи и употреби ги логичките оператори (да се испечатат резултатите)

console.log(h < g && h >= 5);
console.log(!(h > g && h < 0));

// the end