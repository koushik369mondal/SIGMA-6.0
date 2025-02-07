// JS (Part2) Practice Questions

// Qs1
let num = 12;
if(num % 10 == 0){
    console.log("good")
}else{
    console.log("bad")
}

// Qs2
// let Name = prompt("Enter your name: ")
// let age = prompt("Enter your age: ")
// alert(name + " is " + age + " years old.")
// alert(`${Name} is ${age} years old.`)

// Qs3
let quarter = "1";
switch(quarter){
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
if(char[0] = ("a" || "A") && char.length > 5) {
    console.log("golden string")
}else{
    console.log("not golden string")
}

// Qs5
let num1 = 59;
let num2 = 9;
let num3 = 79;
if(num1 > num2 && num1 > num3){
    console.log(`${num1} is largest`);
}
else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is largest`);
}
else{
    console.log(`${num3} is largest`);
}

// Qs6
let Num1 = 32;
let Num2 = 47852;
if((Num1 % 10) == (Num2 % 10)){
    console.log(`last digit is same ${Num1 % 10}`);
}else{
    console.log(`last digit is not same`);
}


// Part3

//Qs
let msg = "help!";
console.log(msg.trim().toUpperCase());

// Qs
let name1 = "ApnaCollage";
console.log(name1.slice(4,9));
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
months.splice(0,2 ,"july", "june");
console.log(months)

// Qs 
let lang = ["C", "C++", "HTML", "JavaScript", "Python", "Java", "C#"];
lang.push("sql");
console.log(lang.reverse());
console.log(lang.reverse());
console.log(lang.reverse().indexOf("JavaScript"));

// Qs 
let game = [['X', null , 'O'], [null , 'X' , null], ['O', null , 'X']];
console.log(game)
game[0][1] = 'O';
console.log(game);

