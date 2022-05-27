const User = require('./User');
const Category = require('./Category');
const Quotes = require('./Quotes');
const GitHub = require('./Github');

Category.belongsToMany(Quotes, {
    through: Quotes,
    as: 'category_quotes',
	foreignKey: 'quotes_id'
});

Quotes.belongsTo(Category, {
	foreignKey: 'category_id'
});

User.belongsToMany(Quotes, {
    through: Quotes,
    as: 'User_quotes',
	foreignKey: 'quotes_id'
});

User.belongsTo(GitHub, {
	foreignKey: 'github_id'
});

module.exports = { User, Quotes, Category, GitHub };
