// string = tekst
// deklariranje na promenliva
let name = "Baze";
let year = 2001;
year = 2000; // promena na vrednost na LET promenliva
year++; //year = year + 1;
year--; //year = year - 1;
// pechatenje na promenlivata vo console inspect element
console.log(name);
console.log(year);

// primitivni tipovi
/*

    String ""
    Number 12
    Boolean true, false
    undefined
    null

*/

//neprimitivni tipovi
/*

    object {} - objekt
    array [] - niza
    regular expressions RegExp

*/

let person = { name: "Ivana", year: 2020 };
let people = [{ name: "Ivana", year: 2020 }, { name: "Baze", year: 2020 }];
let isHot = false; //boolean
let weather = undefined;
let car = null;

console.log("ova e tip  -> " + typeof(isHot));

// deklaracija na konstanta

const pi = 3.14;
// ako e "const" ne moze da se smeni vrednosta
console.log(pi);

// aritmetichki operatori
/*
    + - sobiranje
    - - odzemanje
    / - delenje
    * - mnozenje
    % - modul (ostatok pri delenje na dva broja)
    ++ - inkrement (zgolemuvanje na vrednosta na promenilivata za eden)
    -- - dekrement (namaluvanje na vrednosta na promenlivata za eden)
*/

// Zadaca 1
// Da se deklariraat dva broja i da se soberat

let a = 1;
let b = 2;
console.log(a + b)
console.log("a + b")

//console.log("Zbirot na broevite e: " + a + b);
//console.log("Zbirot na broevite e: " + (a + b));

//operatori za sporedba
/*
    == - ednakvo na (sporedba spored vrednost)
    === - ednakvo na (sporedba spored vrednost i spored tip)
    != - razlicno na (sporedba spored vrednost)
    !== - razlicno na (sporedba spored vrednost i spored tip)
    > - pogolemo od ( a > b )
    >= - pogolemo i ednakvo na ( a>=b )
    < - pomalo od (a < b )
    <= - pomalo od i ednakvo na ( a <= b )
*/

console.log(a === b);

// logicki operatori
/*
    && - logicko i (a > b && b < 9)    - apmersanti
    || - logicko ili (a > b || b < 9)
    ! - negacija !(a > b && b < 9)
*/

console.log(a < b && a < 0);
console.log(a < b || a < 0);

/* pseudo code example 
ako (uslovot e ispolnet) {
    izbrisi go ovoj kod
} ako uslovot ne e ispolnet {
    izvrshi go ovoj kod
}
*/