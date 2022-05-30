const User = require('./User');
const Category = require('./Category');
const Quotes = require('./Quotes');

// create associations
User.hasMany(Quotes, {
  foreignKey: 'posted_by'
});
Quotes.belongsTo(User, {
  foreignKey: 'posted_by',
  onDelete: 'SET NULL'
});

Quotes.belongsTo(Category, {
  foreignKey: 'category_id'
});
Category.hasMany(Quotes, {
  foreignKey: 'category_id'
});


module.exports = { Quotes, User, Category };
