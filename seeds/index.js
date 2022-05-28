const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedQuotes = require('./quotesData');
const seedUser = require('./userData');

const seedAll = async () => {
	await sequelize.sync({ force: true });
	await seedUser();
	await seedCategory();
	await seedQuotes();
	process.exit(0);
};

seedAll();
