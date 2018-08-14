const express = require("express");
const cors = require("cors");

const router = express.Router();
const corsOptions = {
    origin:"http://www.nununails.com",
    optionSuccessStatus: 200
};

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

router.get("/press-on", cors(corsOptions));
router.get("/press-on",cors(corsOptions), (req, res) => {
    Products.find({category: "press-on"})
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.json("This is an error: ", err);
        })
});

router.get("/glue-on", cors(corsOptions));
router.get("/glue-on", cors(corsOptions), (req, res) => {
    Products.find({category: "glue-on"})
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.json("This is an error: ", err);
        })
});
router.get("/nude-french", cors(corsOptions));
router.get("/nude-french", cors(corsOptions), (req, res) => {
    Products.find({category: "nude french"})
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.json("This is an error: ", err);
        })
});

router.get("/:product_id", cors(corsOptions));
router.get("/:product_id", cors(corsOptions),(req, res) => {
    const productId = req.params.product_id;
    Products.findOne({_id: productId})
        .then(product => {
            res.json(product);
        })
        .catch(err => {
            res.json("This is an error: ", err);
        })
})



module.exports = router;