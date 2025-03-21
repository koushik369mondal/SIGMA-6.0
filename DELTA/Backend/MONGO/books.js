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
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title: "How to kill a Mockingbird",
    author: "Harper Lee",
    price: "800",
});
book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
