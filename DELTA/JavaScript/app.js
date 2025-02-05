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