const { Category } = require('../models');

const categoryData = [
	{
		category_name: 'Work'
	},
	{
		category_name: 'Love'
	},
	{
		category_name: 'Life'
	},
	{
		category_name: 'Spirituality'
	}
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
