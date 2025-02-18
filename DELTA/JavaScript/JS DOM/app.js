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

let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    // btn.onmouseenter = function(){
    //     console.log("you entered a button");
    // }

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("You double clicked me")
    });
}

// console.dir(btn);

// btn.onclick = function(){
//     console.log("Button clicked");
// }

function sayHello(){
    console.log("Hello");
}
function sayName(){
    console.log("My name is Kaushik");
}
// btn.onclick = sayHello;

let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("You clicked a paragraph");
})

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("You entered the box");
})