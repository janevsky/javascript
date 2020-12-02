let person = {
    name: 'Ivana',
    lname: 'Kozolovska',
    year: 2020
};

class Person {
    /*constructor(name, lname, year) {
        this.name = name;
        this.lname = lname;
        this.year = year;
    }*/
    // constructor
    constructor(name = '', lname = '', year = 0) {
        this.name = name;
        this.lname = lname;
        this.year = year;
    }

    getName() {
        return this.name;
    }

    // methods
    fullName = () => {
        return this.name + ' ' + this.lname;
    }
}
// instance
let p = new Person('Ivana', 'Kozolovska', 2020);
let p1 = new Person('John', 'Kozolovski', 2020);

console.log(p);
console.log(p1.fullName());