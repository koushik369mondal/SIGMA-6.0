// let div = document.querySelector("div");
let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked.")
// });

// ul.addEventListener("click", function(event){
//     event.stopImmediatePropagation();
//     console.log("ul was clicked.")
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked.");
//     });
// }

let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    console.log(inp.value);
    inp.value = "";
})