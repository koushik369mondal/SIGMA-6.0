
// Practice Qs 
let p1 = document.createElement('p');
p1.textContent = "Hello I'm red!";
// p.style.color = "red";
p1.classList.add('red');
document.querySelector("body").append(p1);

let h3 = document.createElement('h3');
h3.textContent = "I'm blue h3";
document.querySelector("body").append(h3);
h3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');
// div.style.border = "2px";
h1.textContent = "I' in a div";
p2.textContent = "ME TOO!";
// document.querySelector("div").append(h1);
// document.querySelector("div").append(p2);
div.append(h1);
div.append(p2);
div.classList.add('box');
document.querySelector("body").append(div);


// Qs 1
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click Me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Qs2 
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// Qs 3
let btn = document.querySelector("#btn");
btn.classList.add("btn");

// Qs 4
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector("body").append(h1);

// Qs 5
let p = document.createElement("p");
p.innerHTML = "Apna Collage <b>Delta</b> Practice";
document.querySelector("body").append(p);