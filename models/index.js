const Categorie = require('./Categorie');
const Quote = require('./Quote');
const User = require('./User')

//associations between models
User.hasMany(Quote, {
  foreignKey: 'created_by'
});

Quote.belongsTo(User, {
  foreignKey: 'created_by'
});

Categorie.hasMany(Quote, {
  foreignKey: 'genre'
})

Quote.belongsTo(Categorie, {
  foreignKey: 'genre'
})

module.exports = { User, Quote, Categorie };