const User = require('./User');
const Category = require('./Category');
const Quotes = require('./Quotes');
// feature on the works
// const Like = require('./Like'); 

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

// Associations related to the Like model...in the works
// User.belongsToMany(Quotes, {
//   through: Like,
//   as: 'favourite_quotes',
//   foreignKey: 'user_id'
// });

// Quotes.belongsToMany(User, {
//   through: Like,
//   as: 'favourite_quotes',
//   foreignKey: 'quote_id'
// })

// Like.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Like.belongsTo(Quotes, {
//   foreignKey: 'quote_id'
// });

// User.hasMany(Like, {
//   foreignKey: 'user_id'
// });

// Quotes.hasMany(Like, {
//   foreignKey: 'quote_id'
// });


module.exports = { Quotes, User, Category };
