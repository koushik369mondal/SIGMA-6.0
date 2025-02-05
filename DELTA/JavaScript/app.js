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

