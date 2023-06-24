const express = require("express");
const env = require("dotenv");
const connection = require("./db/db");
const path = require('path')

var app = express()
var cors = require('cors')
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoriesRoutes = require("./routes/category");
const productsRoutes = require("./routes/product");
const cartsRoutes = require("./routes/cart");
const initialDataRoutes = require("./routes/admin/initialData");
const pageRoutes = require("./routes/admin/page")
const addressRoutes = require('./routes/address')
const orderRoutes = require('./routes/order')
const adminOrderRoutes = require('./routes/admin/order.route')


env.config();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/public',express.static(path.join(__dirname,'uploads')))

app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoriesRoutes);
app.use("/api", productsRoutes);
app.use("/api", cartsRoutes);
app.use("/api", initialDataRoutes);
app.use("/api", pageRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoutes);

connection();
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
