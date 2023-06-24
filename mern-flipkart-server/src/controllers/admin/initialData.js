const Category = require('../../models/category')
const Product = require('../../models/product')
const Order  = require("../../models/order")

function fetchCategory(xxx, parentId = null) {
    const nestedCategory = [];
    let category;
    if (parentId == null) {
      category = xxx.filter((dat) => dat.parentId == undefined);
    } else {
      category = xxx.filter((dat) => dat.parentId == parentId);
    }
  
    for (let cat of category) {
      nestedCategory.push({
        _id: cat._id,
        name: cat.name,
        slug: cat.slug,
        parentId:cat.parentId,
        type:cat.type,
        children: fetchCategory(xxx, cat._id),
      });
    }
    return nestedCategory;
  }

exports.initialDataController = async(req,res)=>{
    const categories = await Category.find({}).exec()
    const products = await Product.find({}).select('_id name price quantity slug description productPictures category').populate({path:'category', select:'_id name'}).exec()
const orders = await Order.find({}).exec()
    res.status(200).json({
        categories:fetchCategory(categories),
        products:products,
        orders
    })
}