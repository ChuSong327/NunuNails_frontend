const express = require("express");
const router = express.Router();

const Products = require("../../db/products");

router.get("/", (req, res) => {
    Products.find()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.json("This is the error: ", err)
        })
});

router.get("/press-on", (req, res) => {
    Products.find({category: "press-on"})
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.json("This is an error: ", err);
        })
});

router.get("/glue-on", (req, res) => {
    Products.find({category: "glue-on"})
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.json("This is an error: ", err);
        })
});

router.get("/nude-french", (req, res) => {
    Products.find({category: "nude french"})
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.json("This is an error: ", err);
        })
});

router.get("/:product_id", (req, res) => {
    const productId = req.params.product_id;
    Products.findOne({_id: productId})
        .then(product => {
            // console.log("this is the product: ", product)
            res.json(product);
        })
        .catch(err => {
            res.json("This is an error: ", err);
        })
})

module.exports = router;