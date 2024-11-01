// Ways to declare an object

// 1
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "blue",
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}

// 2
const person2 = {};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 30;
person2.eyeColor = "blue";

// 3 with new keyword
const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 30;
person3.eyeColor = "blue";
person3.myCars = {
    1: "bmw",
    2: "audi",
}


// console.log(person1.fullName());
// console.log(person2.age);
// console.log(person3["eyeColor"])

// person3.dob = 20
// console.log(person3)
// delete person3["dob"];
// console.log(person3)

// const myArray = Object.entries(person1)
// const myString = JSON.stringify(person1);
// console.log(myString)

// Object Constructor
// function person(fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
//     this.age = 25;
// }

// const person11 = new person('vaibhav', 'shinde')
// const person12 = new person('onkar', 'shinde')
// console.log(person11, person12)

const person = new Object({ name: 'vaibhav', age: '25' })
console.log(person)
