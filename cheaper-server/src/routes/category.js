const express = require("express");
const route = express.Router();
const { getCategories, createCategories, updateCategories,deleteCategories } = require('../controllers/category')
const { requireSignin, adminMiddleware } = require("../middleware");

const shortid = require('shortid')
const multer = require("multer");
const path = require('path')
// const upload = multer({dest:'uploads/'})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(path.dirname(__dirname),'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage});

route.get("/categories", getCategories);
route.post("/categories", requireSignin, adminMiddleware,upload.single('categoryImage'), createCategories);
route.post("/categories/update",requireSignin, adminMiddleware,upload.array('categoryImage'), updateCategories);
route.post("/categories/delete",deleteCategories);

module.exports = route;
  