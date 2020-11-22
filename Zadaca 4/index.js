//1. Create person object with properties firstName and lastName and add coresponding values.

let person = {
    firstName: "Stojan",
    lastName: "Stojanov",
    car: "Audi",
    age: 65,
    city: "Skopje"
}

console.log(person);

//2. Print the values of the properties of the object. Use both approaches.

let person1 = {
    firstName: "Stojan",
    lastName: "Stojanov",
    car: "Audi",
    age: 55,
    city: "Skopje"
}

console.log(person1.car);
console.log(person1["age"]);

//3. Print the whole firstName and lastName of the person.

let person2 = {
    firstName: "Stojan",
    lastName: "Stojanov",
    car: "Audi",
    age: 40,
    city: "Skopje"
}

console.log(person2.firstName + " " + person.lastName);

//4. Add the property age and coresponding value to the person object. Use both approaches.
//adding color instead of age
let person3 = {
    firstName: "Stojan",
    lastName: "Stojanov",
    car: "Audi",
    age: 45,
    city: "Skopje"
}

person3.color = "Black";
person3["color"] = "Black";

console.log(person3);

//5. Print how old the person is.

console.log("The color of this person is" + " " + person3.color);

//6. Find the type of the variable person.

console.log("The type is" + " " + typeof person3);

//7. Create another person object. Populate the object with coresponding values.

let person4 = {
    firstName: "Jovan",
    lastName: "Jovanov",
    car: "BMW",
    age: 20,
    city: "Bitola"
}

//8. Find out which person is older.

if (person3.age > person4.age) {
    console.log(person3.lastName + " e postar od " + person4.lastName);
} else if (person3.age == person4.age) {
    console.log(person3.lastName + " i " + person4.lastName + " imaat isto godini.");
} else if (person3.age < person4.age) {
    console.log(person4.lastName + " e pomal od " + person3.lastName);
}

//9. Find out how many years the person1 is older/younger from person2.

switch (undefined) {
    case person3.age > person4.age:
        console.log(person3.firstName + " e postar od " + person4.firstName + (person3.age - person4.age) + " godini.");
        break;

    case person3.age < person4.age:
        console.log(person4.firstName + " e postar od " + person3.firstName + (person3.age - person4.age) + " godini.");
        break;

    default:
        console.log(person3.firstName + " i " + person4.firstName + " se ista vozrast");

}

//10. Create another peson object. Populate the object with coresponding values.

let person5 = {
    firstName: "Ivana",
    lastName: "Ivanova",
    car: "VW",
    age: 25,
    city: "Veles"
}

//11. Find the sum of the years of the people.

let wholeAge;

wholeAge = person.age + person1.age + person2.age + person3.age + person4.age + person5.age;
console.log(wholeAge + " vkupno godini");

//12. Find the average of the years of the people.

let averageAge;

averageAge = wholeAge / 6

console.log(averageAge);

//13. Find out who is the youngest of all three people.