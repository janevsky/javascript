/*HOMEWORK 3*/
//1. Write a JavaScript conditional statement to sort three numbers. Print the result.

// Истите променливи се користат за првата и втората задача.

/*let a = 5;
let b = 4;
let c = 3;
let prvo;
let vtoro;
let treto;

if (a > b && a > c) {
    prvo = a;
} else if (b > a && b > c) {
    prvo = b;
} else {
    prvo = c;
}

if ((a > b && a < c) || (a > c && a < b)) {
    vtoro = a;
} else if ((b > a && b < c) || (b > c && b < a)) {
    vtoro = b;
} else {
    vtoro = c;
}

if (a < b && a < c) {
    treto = a;
} else if (b < a && b < c) {
    treto = b;
} else {
    treto = c;
}

console.log("prvo mesto e", prvo);
console.log("vtoro mesto e", vtoro);
console.log("treto mesto e", treto);*/


//2. Write a JavaScript conditional statement to find the largest of five numbers. Print the result.

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

if (a > b && a > c && a > d && a > e) {
    console.log("Najgolem broj e", a)
} else if (b > a && b > c && b > d && b > e) {
    console.log("Najgolem broj e", b)
} else if (c > a && c > b && c > d && c > e) {
    console.log("Najgolem broj e", c)
} else if (e > a && e > b && e > c && e > d) {
    console.log("Najgolem broj e", e)
} else {
    console.log("Najgolem broj e", d)
}

/*
3. Compute the average marks of the following students. Then, use the average to
determine the corresponding grade.
Student_Name	Marks
David	    80
Vinoth	    77
Divya	    88
Ishitha	    95
Thomas	    68

Range	Grade
<60	    F
<70	    D
<80	    C
<90	    B
<100	A
*/

let David = 80;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Thomas = 68;

let fGrade = 60;
let DGrade = 70;
let CGrade = 80;
let BGrade = 90;
let AGrade = 100;

let average = (David + Vinoth + Divya + Ishitha + Thomas) / 5

if (average <= fGrade) {
    console.log("Ocenkata e F")
} else if (average <= DGrade) {
    console.log("Ocenkata e D")
} else if (average <= CGrade) {
    console.log("Ocenkata e C")
} else if (average <= BGrade) {
    console.log("Ocenkata e B")
} else {
    console.log("Ocenkata e A")
}

//4. For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening).

let vreme = 5;

if (vreme >= 5 && vreme <= 10) {
    console.log("Good Morning!")
} else if (vreme >= 11 && vreme <= 16) {
    console.log("Good afternoon!")
} else {
    console.log("Good evening!")
}

//5. For a given day, print out whether it is a day of the work week or weekend.

let den = "Monday"

if (den == "Monday" || den == "Tuesday" || den == "Wendsday" || den == "Thursday" || den == "Friday") {
    console.log("Deneska e raboten den")
} else if (den == "Saturday" || den == "Sunday") {
    console.log("Deneska e neraboten den")
}

//6. For a given month, print out in which season it belongs.

let mesec = "септември";

if (mesec == "јуни" || mesec == "јули" || mesec == "август") {
    console.log("Лето")
} else if (mesec == "септември" || mesec == "октомври" || mesec == "ноември") {
    console.log("Есен")
} else if (mesec == "декември" || mesec == "јануари" || mesec == "февруари") {
    console.log("Зима")
} else if (mesec == "март" || mesec == "април" || mesec == "мај") {
    console.log("Пролет")
} else {
    console.warn("Немате ставено месец")
}