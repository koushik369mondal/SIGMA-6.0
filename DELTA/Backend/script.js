// let n = 5;
// for(let i=0; i<n; i++){
//     console.log("Hello", i);
// }

// console.log(process.argv);

// let args = process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("Hello and welcome to ",args[i]);
// }

// const someValue = require("./math");

// console.log(someValue);

// console.log(someValue.sum(2, 3));
// console.log(someValue.Pi);

// const info = require("./Fruits");

// console.log(info);
// console.log(info[0]);
// console.log(info[0].name);

// import { createRequire } from "module"; 
// const require = createRequire(import.meta.url);
// const figlet = require("figlet");

// figlet("Hello, Kaushik!", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });


import {sum, Pi} from "./math.js";
import { generate} from "random-words";

// console.log(sum(2, 3));
console.log(generate());