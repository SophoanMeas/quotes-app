const User = require('./User');
const Category = require('./Category');
const Quotes = require('./Quotes');

Category.hasMany(Quotes, {
	foreignKey: 'category_id'
});

// Quotes.belongsTo(Category, {
// 	foreignKey: 'category_id'
// });

// User.hasMany(Quotes, {
// 	foreignKey: 'quotes_id'
// });

Quotes.belongsTo(User,{
    foreignKey: 'user_id'
})

module.exports = { User, Quotes, Category };
