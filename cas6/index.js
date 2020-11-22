// ciklusi koristime za elementi da bidat provereni i dokolku se ispolneti da zavrsat

let fruits = ['Apple', 'Banana', 'Orange'];
let students = [{
        firstName: 'John',
        lastName: 'Doe',
        index: 20201
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        index: 20202
    },
    {
        firstName: 'David',
        lastName: 'Vinoth',
        index: 20203
    },
    {
        firstName: 'Divya',
        lastName: 'Ishitha',
        index: 20204
    },
    {
        firstName: 'Thomas',
        lastName: 'Edgardson',
        index: 20205
    }
];

//forEach

students.forEach(student => {
    console.log(student);
    // ili za poedinecno
    console.log(student.firstName);
});

console.log("END");
let numbers = [1, 4, 2, 7, 6, 10];

//filter - ni ovozmozuva da ni se vrati niza

let greaterThanThree = [];
let j = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
        greaterThanThree.push(numbers[i]);
        //greaterThanThree[greaterThanThree.length] = numbers[i];
        // ili
        //greaterThanThree[j] = numbers[i];
        // j++;

    }

}
console.log("greater then three array");
console.log(greaterThanThree);

let popElement = greaterThanThree.pop();
console.log("element", popElement);
console.log(greaterThanThree);
popElement = greaterThanThree.pop();
console.log("element", popElement);
console.log(greaterThanThree);

greaterThanThree = numbers.filter(number => {
    return number > 3; // in my imaginary array add the element that suttiesfies the condition
});

console.log(greaterThanThree);
numbers.sort();
console.log(numbers);
//let numbers = [1, 4, 12, 7, 6, 10];
// SITE BROEVI SE PROVERUVAAT MEGJUSEBNO OD NIZATA PRV BROJ SO POSLEDEN PRV SO 4ti itn itn...
numbers.sort((a, b) => {
    //console.log(a)
    //console.log(b)
    return a - b // od pomal kon pogolem
        //return b - a //od pogolem kon pomal
});
console.log(numbers);

console.warn("MAP")

// map - 

numbers = [4, 9, 16, 25];
let square = numbers.map(Math.sqrt);
console.log(square);

let byTen = numbers.map(number => {
    return numbers * 10;
});
console.log(byTen);


console.warn("REDUCE")

// reduce 

numbers = [1, 2, 3, 4];
let accumulator = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    console.log(currentValue);
    return accumulator + currentValue;

});
console.log(accumulator);


// Task 01
// Write a program to find sum of all the numbers between 1 to n.

numbers = [1, 2, 3, 4, 5];
let niza = numbers.reduce((niza, currentValue) => {
    return niza + currentValue;

});
console.log("The sum of all is" + " " + niza);


// Task 02
// Write a program to print multiplication table of any number.

let broj = 1;
let broj1;
for (let i = 1; i <= 10; i++) {
    broj1 = i * broj;

    console.log(`${i}*${broj} = ${broj1}`);
};

// Task 03