const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const Order = mongoose.model("Order", orderSchema);

const addOrders = async () => {
    let res = await Order.insertMany([
        { item: "Laptop", price: 1000 },
        { item: "Phone", price: 500 },
        { item: "Tablet", price: 300 },
    ]);
    console.log(res);
};

addOrders();
