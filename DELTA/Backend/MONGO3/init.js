
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connected Successfully");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
    {
        from: "Neha",
        to: "Priya",
        msg: "send me your exam sheet",
        created_at: new Date(),
    },
    {
        from: "Allu",
        to: "Arjun",
        msg: "I am sending you",
        created_at: new Date(),
    },
    {
        from: "John",
        to: "Yash",
        msg: "Thank you",
        created_at: new Date(),
    },
    {
        from: "Salman",
        to: "Sarukh",
        msg: "Hello Guys",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);


