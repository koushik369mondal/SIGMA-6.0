// JS (Part2) Practice Questions

// Qs1
let num = 12;
if (num % 10 == 0) {
    console.log("good")
} else {
    console.log("bad")
}

// Qs2
// let Name = prompt("Enter your name: ")
// let age = prompt("Enter your age: ")
// alert(name + " is " + age + " years old.")
// alert(`${Name} is ${age} years old.`)

// Qs3
let quarter = "1";
switch (quarter) {
    case "1":
        console.log("January , February , March");
        break;
    case "2":
        console.log("April , May , June");
        break;
    case "3":
        console.log("July , August , September");
        break;
    case "4":
        console.log("October , November , December");
        break;
}

// Qs4
let char = "aluminium";
if (char[0] = ("a" || "A") && char.length > 5) {
    console.log("golden string")
} else {
    console.log("not golden string")
}

// Qs5
let num1 = 59;
let num2 = 9;
let num3 = 79;
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is largest`);
}
else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is largest`);
}
else {
    console.log(`${num3} is largest`);
}

// Qs6
let Num1 = 32;
let Num2 = 47852;
if ((Num1 % 10) == (Num2 % 10)) {
    console.log(`last digit is same ${Num1 % 10}`);
} else {
    console.log(`last digit is not same`);
}


// Part3

//Qs
let msg = "help!";
console.log(msg.trim().toUpperCase());

// Qs
let name1 = "ApnaCollage";
console.log(name1.slice(4, 9));
console.log(name1.indexOf("na"));
console.log(name1.replace("Apna", "Our"));

// Qs  
console.log(name1.slice(4).replace("l", "t"));
console.log(name1.slice(4).replace("l", "t").replace("l", "t"));

// Qs 
let month = ['january', 'july', 'march', 'august']
// let blocked = month.shift();
// console.log(month);
// let blockedd = month.shift();
// console.log(month);
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);

// Qs 
let months = ['january', 'july', 'march', 'august'];
months.splice(0, 2, "july", "june");
console.log(months)

// Qs 
let lang = ["C", "C++", "HTML", "JavaScript", "Python", "Java", "C#"];
lang.push("sql");
console.log(lang.reverse());
console.log(lang.reverse());
console.log(lang.reverse().indexOf("JavaScript"));

// Qs 
let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(game)
game[0][1] = 'O';
console.log(game);

// JS(Part3) Practice Questions 
// Qs1
let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);

// Qs2 
let arr2 = [7, 9, 0, -2];
let n2 = 3;
let ans2 = arr2.slice(arr.length - n);
console.log(ans2);

// Qs3 
let str = "Hello Guys";
if (str.length == 0) {
    console.log("String is empty");
} else {
    console.log("String is not empty");
}

// Qs4 
let str2 = "ApNaCoLaEgE";
let idx = 3;
if (str2[idx] == str2[idx].toLocaleLowerCase()) {
    console.log("Character is lowercase");
}
else {
    console.log("Character is not lowercase");
}

// Qs5
// let str3 = prompt("please enter a string");
let str3 = " Hell o    "
console.log(`original string = ${str3}`);
console.log(`string without spaces = ${str3.trim()}`);

// Qs6 
let arr4 = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if (arr4.indexOf(item) != -1) {
    console.log("element exists in array");
}
else {
    console.log("element does not exist in array");
}

// JS(Part4) Practice Questions
// Qs1 
let arr5 = [1, 2, 3, 4, 5, 6, 2, 3];
let num4 = 2;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] == num4) {
        arr5.splice(i, 1);
    }
}
console.log(arr5);

// Qs2
let number = 287152;
// count = number.toString().length;
// console.log(count);
let count = 0;
while (number > 0) {
    count++;
    number = Math.floor(number / 10);
}
console.log(count)

// Qs3 
let number1 = 2871523;
let sum = 0;
while (number1 > 0) {
    digit = number1 % 10;
    sum += digit;
    number1 = Math.floor(number1 / 10);
}
console.log(sum);

// Qs4 
let x = 5;
let factorial = 1;
for (let i = 1; i <= x; i++) {
    factorial *= i;
}
console.log(`The factorial of ${x} is ${factorial}`);

// Qs5
let arr6 = [3, 6, 9, 2, 4, 6, 8];
let largest = arr6[0];
for (let i = 1; i < arr6.length; i++) {
    if (arr6[i] > largest) {
        largest = arr6[i];
    }
}
console.log(largest);

// part5 
// Qs   
console.log(Math.floor(Math.random() * 100) + 1);

// Qs  
console.log(Math.ceil(Math.random() * 5));

console.log(Math.ceil(Math.random() * 5) + 20);

// JS (Part5) Practice Questions 
console.log("JS (Part5) Practice Questions ");

// Qs1 
let dice = Math.ceil(Math.random() * 6);
console.log(dice);

// Qs2 
let car = {
    name: "BMW",
    model: "BMW XM",
    color: "Black"
};
console.log(car.name);

// Qs 3 
let person = {
    name: "John",
    age: 25,
    city: "India",
}
console.log(person);
person.city = "New York";
console.log(person);
person.country = "United States";
console.log(person);

//part 6
// QS 1
function poem() {
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}
poem();

// Qs 2
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();
rollDice();
rollDice();
rollDice();

// Qs 3
function average(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(`Average is: ${avg}`)
}
average(3, 6, 9);

// Qs 4
function multiplicationTable(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${a} * ${i} = ${a * i}`);
    }
}
multiplicationTable(5);

//Diffrent way
function printTable(n) {
    for (i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}
printTable(6)

//Qs 5
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(3));

// Qs 6
let str4 = ["Hi", "Hello", "Bye", "!"];

function concat(str4) {
    let result = "";

    for (let i = 0; i < str4.length; i++) {
        result += str4[i];
    }
    return result;
}
console.log(concat(str4));

// Qs 7
let greet = "hello";  //global scope
function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);
    function innnerGreet() {
        console.log(greet); // we do not call it so it not run 
    }
}
console.log(greet);  //print global scope
changeGreet();  // print function scope

// JS (Part6) Practice Question
// Qs 1 
let arr7 = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num7 = 5;
// elements larger than a number num function
function getLargerElements(arr7, num7) {
    let largerElements = [];
    for (let i = 0; i < arr7.length; i++) {
        if (arr7[i] > num7) {
            largerElements.push(arr7[i]);
        }
    }
    return largerElements;
}
console.log(getLargerElements(arr7, num7));

// Qs 2
let str5 = "abcdabcdefgggh";
// function to get String with all unique elements
function getUnique(str5) {
    let ans = "";
    for (let i = 0; i < str5.length; i++) {
        let currChar = str5[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}
console.log(getUnique(str5));

// Qs 3
let country = ["Australia", "Germany", "United States of America"];
function longestName(country) {
    let ansIndex = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIndex].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIndex = i;
        }
    }
    return country[ansIndex];
}
console.log(longestName(country));

// Qs 4 
let str6 = "apnacollage";
function countVowels(str6) {
    let count = 0;
    for (let i = 0; i < str6.length; i++) {
        if (
            str6.charAt(i) == "a" ||
            str6.charAt(i) == "e" ||
            str6.charAt(i) == "i" ||
            str6.charAt(i) == "o" ||
            str6.charAt(i) == "u"
        ) {
            count++;
        }
    }
    return count;
}
console.log(`Total vowels are ${countVowels(str6)}`);

// Qs 5 
let start = 100;
let end = 1000;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));

// part 7
//Qs
const square = (n) => n * n;
console.log(square(6));

let id = setInterval(() => {
    console.log("Hello World!");
}, 2000);
setTimeout(() => {
    clearInterval(id);
    console.log("Time's up!");
}, 10000);

// JS (Part7) Practice Sollutions
// Qs 1
const arrayAverage = (arr1) => {
    let total = 0;
    for (let number of arr1) {
        total += number;
    }
    return total / arr1.length;
};
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(`Array Average is ${arrayAverage(arr1)}`);

// Qs 2
const isEven = (num8) => {
    if (num8 % 2 == 0) {
        console.log(`${num8} is even number`);
    }
    else {
        console.log(`${num8} is odd number`);
    }
}
console.log(isEven(9));

// Qs4
const object = { 
    message: 'Hello,World!',
    logMessage() { 
        console.log(this.message);
    } 
}; 
setTimeout(object.logMessage, 1000);

// Qs5 
let length = 4;
function callback(){
    console.log(this.length);
}
const object1 = {
    length:5,
    method(callback){
        callback();
    },
};
object1.method(callback,1,2)

// part 8 
// Qs 
let multiple10 = [10, 20, 30, 40, 50, 60, 7];
let every10 = multiple10.every((el) => el % 10 == 0);
console.log(every10);

function getMin(){
    let min = arr9.reduce((min, el) => {
        if(min < el){
            return min;
        }
        else{
            return el;
        }
    });
    return min;
}
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

console.log(`Min value is ${getMin(arr9)}`);

// JS(Part8) Practice Answers
// Qs1
const array1 = [1, 2, 3, 4, 5];
const sumOfSquares = array1.reduce((acc, curr) => acc + curr ** 2, 0);
const average1 = sumOfSquares / array1.length;
console.log("Sum of squares: ", sumOfSquares);
console.log("Average: ", average1);

// Qs 2
let number2 = [1, 2, 3, 4, 5];
console.log(number2.map((number) => number + 5));

// Qs 3 
let strings = ["apple", "banana", "coconut", "lichi"];
console.log(strings.map((string) => string.toUpperCase()));

// Qs 4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v * 2),
];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));  // [1, 2, 3, 8 , 8]
doubleAndReturnArgs([2], 10 , 4); // [2 , 20 , 8]

// Qs 5 
const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});
console.log(mergeObjects({a : 1, b : 2}, { c : 3, d : 4}));