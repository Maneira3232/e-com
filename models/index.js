// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tags, {
  foreignKey: "productTag_id",
});
// Tags belongToMany Products (through ProductTag)
Product.belongsTo(Products, {
  foreignKey: "productTag_id",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
