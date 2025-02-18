
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