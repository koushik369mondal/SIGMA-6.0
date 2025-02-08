console.log("Hello Guys");

//Template literals
console.log("Template literals")
let pencilPrice = 10;
let eraserPrice = 5;
// let output = "The total price is: " + (pencilPrice + eraserPrice) + " Rupees.";
let output = `The total price is : ${pencilPrice} rupees.`;
console.log(output);

// unary operators 
console.log("unary operators")
let a = 10;
let b = 20;
console.log(a++)
console.log(a)
console.log(++a)

// comparison operators
console.log("comparison operators")
let c = 123;
let d = "123";
console.log(c == d);
console.log(c === d);
console.log(0 == " ");
console.log(0 === " ");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

// compare non numbers using unique code
console.log("compare non numbers");
console.log('a' > 'A');
console.log('a' > 'b');
console.log('a' < 'b');
console.log('b' < 'c');
console.log('B' < 'C');
console.log('*' < '&');
console.log('*' > '&');

// conditional statement
console.log("conditional statement");
let firstName = "Kaushik";
if (firstName == "Kaushik"){
    console.log(`Hello ${firstName}`);
}

// Practice Qs (Traffic light)
console.log("Practice Qs (Traffic light)");
// light = "red";
let light = "red";
if(light == "red"){
    console.log("Stop");
}
if(light == "yellow"){
    console.log("Go slow");
}
if(light == "green"){
    console.log("Go");
}

//Practice Qs(Popcorn price)
console.log("Practice Qs(Popcorn price)")
let size = "M";
if(size == "XL"){
    console.log("Price is 250");
}
else if(size == "L"){
    console.log("Price is 200")
}
else if(size == "M"){
    console.log("Price is 100")
}
else if(size == "S"){
    console.log("Price is 50")
}
else{
    console.log("Not Defined")
}

// Practice Qs 
console.log("Practice Qs (Operators)");
let str = "apple"
if(str.length >= 3 && str[0] == "a"){
    console.log("good")
}else{
    console.log("bad")
}

let num = 12;
if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))){
    console.log("safe");
}else{
    console.log("unsafe");
}

// truthy and falsy
console.log("truthy and falsy") 
if(true){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

if(false){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

if(0){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

if(1){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

if(" "){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

if(""){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

if(null){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

if(undefined){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

if("kaushiik"){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

let numbers = 10;
if(numbers){
    console.log("It has true value.")
}
else{
    console.log("It has false value.")
}

// switch case 
let color = "red"
switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log ("stow down");
        break;
    case "green":
        console.log ("go");
        break;
    default:
        console.log ("light is broken");
}

// practice Qs to print the day of the week 
console.log("print the day of the week")
// let day = prompt("Enter the number")
let day = "4";
switch(day){
    case "1":
        console.log("sunday");
        break;
    case "2":
        console.log("monday");
        break;
    case "3":
        console.log("tuesday");
        break;
    case "4":
        console.log("wednesday");
        break;
    case "5":
        console.log("thursday");
        break;
    case "6":
        console.log("friday");
        break;
    case "7":
        console.log("saturday");
        break;
    default:
        console.log("invalid day");
}

// learn alert and prompt 
// let firstNam = prompt("Enter first name:");
// let lastNam = prompt("Enter last name:");
// let msg = "Welcome " + firstNam + lastNam + "!";
// alert(msg);

// Trim method
let Str = "   hel lo   ";
let afterStr = Str.trim();
console.log(afterStr);

let Name = "Kaushik Mandal"
Name.toUpperCase();
Name.toLowerCase();

//indexOf method
let msg = "ILoveCoding";
msg.indexOf("Love");
msg.indexOf("love");
msg.indexOf("o");
msg.indexOf("z");

//slice method
let msg1 = "koushik369mondal";
console.log(msg1.slice(0,5));
console.log(msg1.slice(-2));

//replace
let msg2 = "I love coding";
console.log(msg2.replace("love", "do"));
let msg3 = "kkkkkkk"
console.log(msg3.replace("k", "M"));  //only change first character

//repeat
let msg4 = "Hello";
console.log(msg4.repeat(3));

//array
let arr = ["kaushik", 27, 69.99]  //mixed array
console.log(arr);
console.log(arr[0][3]);
console.log(arr[0].length);

let cars = ['audi', 'bmw', 'xuv', 'maruti'];
console.log(cars);
cars.push('toyota');
console.log(cars);
cars.pop()
console.log(cars);

cars.unshift('farari');
console.log(cars);
cars.shift()
console.log(cars);

let followers = ['a', 'b', 'c'];
let blocked = followers.shift();
console.log(blocked);
console.log(followers);

// indexOf and includes
console.log(cars.indexOf('xuv'));
console.log(cars.includes('audi'));
console.log(cars.includes('BMW'));

// Concatenation & Reverse
console.log("Concatenation & Reverse ")
let primary = ['red', 'yellow', 'blue'];
let  secondary = ['orange', 'green', 'violet'];
let allColors = primary.concat(secondary);
console.log(allColors);
console.log(allColors.reverse());

// slice in array 
console.log("slice in array ")
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits.slice());
console.log(fruits.slice(2));
console.log(fruits.slice(2, 4));
console.log(fruits.slice(-2));
console.log(fruits.slice(fruits.length-1));

// Splice in Arrays
// splice( start, deleteCount, item0...itemN)
console.log("Splice in Arrays ")
let colors = ['red', 'yellow', 'blue', 'orange', 'green', 'violet']
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors.splice(0, 1, 'black', 'grey'));
console.log(colors);
console.log(colors.splice(1, 0, "pink")); // yello ki jagha pe pink aa gaya
console.log(colors);
console.log(colors.splice(1, 1, "azure")); 
console.log(colors);

console.log("sort in Array")
console.log(colors.sort());

let nums = [[2,4], [3,6], [4,8]];
console.log(nums);
console.log(nums[2][0]);

//for loop
console.log("for loop")
for(let i=1; i<=5; i++){
    console.log(i);
}
for(let i=10; i>=5; i--){
    console.log(i);
}

for(let i = 1; i<=15; i+=2){
    console.log(i);
}

for(let i=2; i<=100; i+=2){
    console.log(i);
}
for(let i=100; i>=2; i-=2){
    console.log(i);
}

// multiplication table 
for(let i=5; i<50; i+=5){
    console.log(i);
}

// let n = prompt("Enter number:")
// n = parseInt(n);
// for(let i=n; i<=n*10; i+=n){
//     console.log(i);
// }

//nested loop
for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

//while loop
console.log("while loop")
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

// favorite movie 
// const favMovie = "avatar";
// let guess = prompt("guess my favorite movie: ");
// while( (guess != favMovie)){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("Wrong guess. please try again.");
// }
// if(guess == favMovie){
//     console.log("congrats!!");
// }

console.log("Use break statement")
let j = 1;
while(j <= 5){
    if(j == 3){
        break;
    }
    console.log(j);
    j++;
}

//loop with array
console.log("Loop with Array");
let fruits1 = ["apple", "banana", "cherry", "date", "elderberry"];
fruits1.push("pineapple")
// for(let i=0; i<fruits1.length; i++){
//     console.log(i, fruits1[i]);
// }
for(let i=fruits1.length-1; i>0; i--){
    console.log(i, fruits1[i]);
}

let heroes = [["ironman", "spiderman", "thor"], ["superman", "woder woman", "flash"]];
for(let i=0; i<heroes.length; i++){
    console.log(`List #${i}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

let student = [["aman", 95], ["shradha", 94.4], ["karan", 100]];
for(let i=0; i<student.length; i++){
    console.log(`into of student #${i+1}`);
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}

let fruits2 = ["mango", "apple", "banana", "orange", "lichi"];
for(fruit3 of fruits2){
    console.log(fruit3);
}

for(char of "ApnaCollege"){
    console.log(char)
}

let heroes1 = [["ironman", "spiderman", "thor"], ["superman", "woder woman", "flash"]];
for(list of heroes1){
    for(hero of list){
        console.log(hero);
    }
}