const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//     let user =await User.findOne({username: "rahulkumar"});

//     let post2 = new Post({
//         content: "Bye Bye :)",
//         likes: 23,
//     });

//     post2.user = user;

//     await post2.save();
// };

// addData();

const del = async () => {
    await Post.findByIdAndDelete("67eec782c0322f8389df4e58");
    await User.findByIdAndDelete("67eec854a7ed4c61fe27f7d9");
}

del();
