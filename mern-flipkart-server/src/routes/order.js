const router = require("express").Router();
const { requireSignin, userMiddleware } = require("../middleware/index");
const { addOrder, getOrders, getOrder } = require("../controllers/order");

router.post("/addOrder", requireSignin, userMiddleware, addOrder);
router.get("/getOrders", requireSignin, userMiddleware, getOrders);
router.post("/getOrder", requireSignin, userMiddleware, getOrder);

module.exports = router;