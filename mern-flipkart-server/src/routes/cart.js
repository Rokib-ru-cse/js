const express = require("express");
const route = express.Router();
const { addItemToCart, getCartItems, removeCartItems } = require("../controllers/cart.js");
const { requireSignin,userMiddleware, adminMiddleware } = require("../middleware");


route.post("/carts", requireSignin,userMiddleware, addItemToCart);
route.post("/getCartItems", requireSignin,userMiddleware, getCartItems);
route.post("/removeCartItem", requireSignin,userMiddleware, removeCartItems);


module.exports = route;
