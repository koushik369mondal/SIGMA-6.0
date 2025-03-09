let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [1,2,3,4,5,6,7,8,9,10];

arr1.sayHello = () => {
    console.log("Hello, I am array");
};

arr2.sayHello = () => {
    console.log("Hello, I am array");
};

// arr1.sayHello == arr2.sayHello
// false

// "abc".toLocaleUpperCase == "xyz".toLocaleUpperCase
// true