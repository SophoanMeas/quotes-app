const User = require('./User');
// const Category = require('./Category');
const Quotes = require('./Quotes');
// const GitHub = require('./Github');

// Category.hasMany(Quotes, {
//   foreignKey: 'category_id'
// });

// Quotes.belongsTo(Category, {
//   foreignKey: 'category_id',
//   onDelete: 'SET NULL'
// });

// Category.belongsToMany(Quotes, {
// 	foreignKey: 'quotes_id'
// });

// Quotes.belongsTo(Category, {
// 	foreignKey: 'category_id'
// });

// User.belongsToMany(Quotes, {
// 	foreignKey: 'quotes_id'
// });

// User.belongsTo(GitHub, {
// 	foreignKey: 'github_id'
// });

module.exports = { Quotes, User };
