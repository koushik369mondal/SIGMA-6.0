// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");

// for(link of links){
//     link.style.color = "purple";   //inline style
// }

// for (let i = 0; i < links.length; i++){
//     links[i].style.color = "green";
// }

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
