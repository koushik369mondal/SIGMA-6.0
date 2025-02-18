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

// let btns = document.querySelectorAll("button");

// for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    // btn.onmouseenter = function(){
    //     console.log("you entered a button");
    // }

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function(){
//         console.log("You double clicked me")
//     });
// }

// console.dir(btn);

// btn.onclick = function(){
//     console.log("Button clicked");
// }

// function sayHello(){
//     console.log("Hello");
// }
// function sayName(){
//     console.log("My name is Kaushik");
// }
// btn.onclick = sayHello;

// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     console.log("You clicked a paragraph");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("You entered the box");
// })


// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }


// p.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor);

// btn.addEventListener("click", function(){
//     console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });
// p.addEventListener("click", function(){
//     console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });
// h1.addEventListener("click", function(){
//     console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });
// h3.addEventListener("click", function(){
//     console.log(this);
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click", changeColor);

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// inp.addEventListener("keydown", function(event){
//     console.log("Key = ",event.key);
//     console.log("Code = ",event.code);
//     console.log("key was pressed");
// });

// inp.addEventListener("keyup", function(){
//     console.log("key was release");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     console.log("code = ", event.code);
//     if(event.code = "ArrowUp"){
//         console.log("character moves forward");
//     }
//     else if(event.code = "ArrowDown"){
//         console.log("character moves backward");
//     }
//     else if (event.code = "ArrowLeft"){
//         console.log("character moves left");
//     }
//     else if (event.code = "ArrowRight"){
//         console.log("character moves right");
//     }
// })

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
    // alert("form submitted");
    // console.dir(form);

    // let pass = document.querySelector("#pass");
    // let user = this.elements[0];
    // let pass = this.elements[1];

    // console.log(user.value);
    // console.log(pass.value);
    // console.log(`Hi ${user.value} your password set to ${pass.value}.`);

    // console.dir(inp);
    // console.log(inp.value);
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//     console.log("change event");
//     console.log("final value", this.value);
// });

// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("final value", this.value);
// });

let inp = document.querySelector("input");

let p = document.querySelector("p");

inp.addEventListener("input", function(){
    // h1.textContent = this.value;
    console.log(inp.value);
    p.innerText = inp.value;
});
