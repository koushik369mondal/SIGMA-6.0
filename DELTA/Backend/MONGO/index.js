const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log('Connection Successful');
    })
    .catch((err) => {
        console.log(err);
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model('User', userSchema);

User.insertMany([
    {
        name: "Alice",
        email: "alice@example.com",
        age: 25,
    },
    {
        name: "Bob",
        email: "bob@example.com",
        age: 30,
    },
    {
        name: "Charlie",
        email: "charlie@gmail.com",
        age: 35,
    }
])
.then((res) => {
    console.log(res);
})

// const user2 = new User({
//     name: "Eve",
//     email: "eve@mail.com",
//     age: 25,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });







