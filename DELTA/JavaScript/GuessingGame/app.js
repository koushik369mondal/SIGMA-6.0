const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) +1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are right! congrats!! random number was", random);
        break;
    }
    else if(guess < random){
        guess = prompt("your guess was to small. please try again");
    }
    else if(guess > random){
        guess = prompt("your guess was to large. please try again");
    }
}