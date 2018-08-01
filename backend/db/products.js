const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number
});

export default mongoose.model("Products", ProductSchema);