const User = require('./User');
const Category = require('./Category');
const Quotes = require('./Quotes');
<<<<<<< HEAD
=======
// feature on the works
const Liked = require('./Liked'); 
>>>>>>> bc8e5ee3466b282add95fef3443926fd5a3d8b4d

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

<<<<<<< HEAD
=======
// Associations related to the Like model...in the works
User.belongsToMany(Quotes, {
  through: Liked,
  as: 'favourite_quotes',
  foreignKey: 'user_id'
});

Quotes.belongsToMany(User, {
  through: Liked,
  as: 'favourite_quotes',
  foreignKey: 'quote_id'
})


Liked.belongsTo(Quotes, {
  foreignKey: 'quote_id'
});

Quotes.hasMany(Liked, {
  foreignKey: 'quote_id'
});

Liked.belongsTo(User, {
  foreignKey: 'user_id'
});
>>>>>>> bc8e5ee3466b282add95fef3443926fd5a3d8b4d

User.hasMany(Liked, {
  foreignKey: 'user_id'
});




module.exports = { Quotes, User, Category, Liked };
