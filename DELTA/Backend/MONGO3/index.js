const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // for PUT and DELETE requests

main()
    .then(() => {
        console.log("Connected Successfully");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

//Index Route
app.get(
    "/chats",
    asyncWrap(async (req, res) => {
        let chats = await Chat.find();
        res.render("index.ejs", { chats });
    })
);

//New Route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page Not Found");
    res.render("new.ejs");
});

//Create Route
app.post(
    "/chats",
    asyncWrap(async (req, res, next) => {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date(),
        });

        await newChat.save();
        res.redirect("/chats");
    })
);

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

//NEW- Show Route
app.get(
    "/chats/:id",
    asyncWrap(async (req, res, next) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new ExpressError(500, "Chat not found"));
        }
        res.render("edit.ejs", { chat });
    })
);

// Edit Route
app.get(
    "/chats/:id/edit",
    asyncWrap(async (req, res) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        console.log(chat);
        res.render("edit.ejs", { chat });
    })
);

// Update Route
app.put(
    "/chats/:id",
    asyncWrap(async (req, res) => {
        let { id } = req.params;
        let { msg: newMsg } = req.body;
        console.log(newMsg);
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg },
            { runValidators: true, new: true }
        );
        console.log(updatedChat);
        res.redirect("/chats");
    })
);

// Delete Route
app.delete(
    "/chats/:id",
    asyncWrap(async (req, res) => {
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(`Deleted: ${deletedChat}`);
        res.redirect("/chats");
    })
);

app.get("/", (req, res) => {
    res.send("root is working");
});

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        console.log("This was a validation error. Please follow rules");
    }
    next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
