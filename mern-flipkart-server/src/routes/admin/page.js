const express = require("express");
const route = express.Router();
const {createPage, getPage} = require('../../controllers/admin/page');
const { upload, requireSignin, adminMiddleware } = require("../../middleware");


route.post('/page/create',upload.fields([
    {name:"banners"},
    {name:"products"},
]),requireSignin,adminMiddleware,createPage)

route.get('/page/:category/:type',getPage)

module.exports = route;
