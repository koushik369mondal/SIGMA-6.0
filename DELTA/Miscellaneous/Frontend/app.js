// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let arr2 = [1,2,3,4,5,6,7,8,9,10];

// arr1.sayHello = () => {
//     console.log("Hello, I am array");
// };

// arr2.sayHello = () => {
//     console.log("Hello, I am array");
// };

// arr1.sayHello == arr2.sayHello
// false

// "abc".toLocaleUpperCase == "xyz".toLocaleUpperCase
// true

// function personMaker(name, age){
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         },
//     };
//     return person;
// }

// let p1 = personMaker("kaushik", 20);
// let p2 = personMaker("Gaurav", 39);

//constructors - does not return anything & start with capital
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function(){
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// let p1 = new Person("kaushik", 20);
// let p2 = new Person("Gaurav", 39);

// class person {
//     constructor(name, age){
//         console.log("person class constructor")
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// class student extends person {
//     constructor(name, age, marks){
//         console.log("student class constructor");
//         super(name, age);  // call parent constructor
//         this.marks = marks;
//     }
// }
// class teacher extends person{
//     constructor(name, age, subject){
//         console.log("teacher class constructor");
//         super(name, age);  // call parent constructor
//         this.subject = subject;
//     }
// }

class Mammal {
    constructor(name){
        this.name = name;
        this.type = "warm-bloded";
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Mammal {
    constructor(name){
        super(name);
    }
    bark(){
        console.log(`wooff...`);
    }
}

class Cat extends Mammal {
    constructor(name){
        super(name);
    }
    mew(){
        console.log(`mew...`);
    }
    
    //override
    eat(){
        console.log(`${this.name} is eating cat food.`);
    }
}