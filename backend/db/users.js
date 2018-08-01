const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    street: String,
    state: String,
    zipcode: String,
    products: Array
});

export default mongoose.model("Users", UserSchema);