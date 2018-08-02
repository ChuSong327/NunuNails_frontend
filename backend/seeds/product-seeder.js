const faker = require("faker");
const mongoose = require("mongoose");

const Products = require("../db/products");

//db connection
mongoose.connect("mongodb://localhost:27017/nununails", { useNewUrlParser: true });

const BUILD_PRODUCTS_NUM = 100;

const productImagePath = [
    "https://res.cloudinary.com/chu327/image/upload/v1533083817/Nunu%20Nails/1.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/2.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083817/Nunu%20Nails/3.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083817/Nunu%20Nails/4.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/5.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083817/Nunu%20Nails/6.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/7.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/8.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/9.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/10.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/11.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/12.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/13.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/15.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/16.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/17.jpg"
];

const productCategory = [ "press-on", "glue-on", "nude french"];

let products = [];
for(let i = 0; i < BUILD_PRODUCTS_NUM; i++) {
    products.push(
        new Products({
            name: "Nunu nails",
            category: productCategory[Math.floor(Math.random() * 3)], 
            description: faker.lorem.sentence(),
            price: faker.commerce.price(),
            imagePath: productImagePath[Math.floor(Math.random() * 16)]
        })
    )
};

let done = 0;
for(let i = 0; i < products.length; i++) {
    products[i].save(() => {
        done++;
        if(done === products.length) {
            mongoose.disconnect();
        }
    });
};


 