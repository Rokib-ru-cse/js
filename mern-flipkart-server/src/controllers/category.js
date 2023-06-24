const slugify = require("slugify");
const Category = require("../models/category");
const shortid = require('shortid')

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
      type:cat.type,
      parentId: cat.parentId,
      children: fetchCategory(xxx, cat._id),
    });
  }
  return nestedCategory;
}

exports.getCategories = (req, res, next) => {
  Category.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error:err,
      });
    }
    if (data) {
      const recursiveCategory = fetchCategory(data);
      return res.status(200).json({
        categories: recursiveCategory
      });
    }
  });
};

exports.createCategories = (req, res, next) => {
  const category = {
    name: req.body.name,
    slug: `${slugify(req.body.name)}-${shortid.generate()}`,
  };
  if (req.file) {
    category.categoryImage = '/public/' + req.file.filename;
  }
  if (req.body.parentId) {
    category.parentId = req.body.parentId;
  }
  const cat = new Category(category);
  cat.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
    if (data) {
      return res.status(201).json({
        category: data
      });
    }
  });
};

exports.updateCategories = async (req, res, next) => {
  const { _id, name, parentId, type } = req.body;
  const updatedCategories = []
  if (name instanceof Array) {
    for (let i = 0; i < name.length; i++) {
      const category = {
        name: name[i],
        type: type[i]
      }
      if (parentId[i] !== '') {
        category.parentId = parentId[i]
      }
      const updatedCategory = await Category.findOneAndUpdate({ _id: _id[i] }, category, { new: true })
      updatedCategories.push(updatedCategory)
    }
    return res.status(201).json({ updatedCategories: updatedCategories })

  } else {
    const category = { _id, name, type }
    if (parentId !== '') {
      category.parentId = parentId
    }
    const updatedCategory = await Category.findOneAndUpdate({ _id: _id }, category, { new: true })
    return res.status(201).json({ updatedCategory: updatedCategory })
  }
}

exports.deleteCategories = async (req, res, next) => {
  const { idsArray } = req.body.payload
  const deletedCategories = []
  for (let i = 0; i < idsArray.length; i++) {
    const deleteCategory = await Category.findOneAndDelete({_id:idsArray[i]._id})
    deletedCategories.push(deleteCategory)
  }
  if(deletedCategories.length == idsArray.length){
    res.status(200).json({ deletedCategories })
  }
  else{
    res.status(400).json({ "message":"something went wrong" })

  }
}