/*HOMEWORK*/
console.time("Timer for homework");
//1. Declare variables and use the assignment operators ( print the results)

let a = 10;
let b = 5;
let c = 20;

a /= 5;
b -= 2;
c %= 11;

console.log(a);
console.log(b);
console.log(c);

//2. Try out the two kind of alerts that have been studied.

alert("The next popup will give you an option.");
let popup = window.confirm("Please choose carefully!");
console.log(popup);

//3. Try out the different types of loggings in the console

console.error("You choosed wisely!");
console.log("The next log will generate top 5 genres for 2020");
console.log(["Top 5 Genres", "Hip-Hop", "Electro", "R&B", "Pop", "Rock"]);
console.log("The next table will generate index number of students.");
console.table(["Name", "Isla-Rae Day", "Madelaine Potter", "Oakley Millar", "Montana Nichols", "Halle Hewitt"]);

//* Bonus: Try and find out new types of loggings in the console

console.info("Testing this new console logging")
console.timeLog("Timer for homework");
console.warn("Time ending soon");
console.info(popup);
console.dir(popup);
console.timeEnd("Timer for homework");
console.group("Group of logs");
console.info("Test1");
console.info("Test2");
console.info("Test3");
console.info("Test4");
console.info("Test5");