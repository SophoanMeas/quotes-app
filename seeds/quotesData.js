const { Quotes, Category } = require('../models');
//ID: 1 Work, 2 Love, 3 Life, 4 Spirituality

const quotesData = [
	{
		description:'Tis better to have loved and lost than never to have loed at all',
        author: 'Alfred Lord Tennyson',
        likes: 40,
        user_id: 1,
        category_id: 2,
        is_liked: 0
	},
    {
		description:'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage',
        author: 'Lao Tzu',
        likes: 120,
        user_id: 1,
        category_id: 2,
        is_liked: 1
    },
    {
		description:'I put my heard and my soul into my work, and have lost my mind in the process',
        author: 'Vincent Van Gogh',
        likes: 200,
        user_id: 2,
        category_id: 1,
        is_liked: 0
	},
    {
		description:'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
        author: 'Marie Curie',
        likes: 200,
        user_id: 2,
        category_id: 3, 
        is_liked: 1
	},
    {
		description:'I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.',
        author: 'Rabindranath Tagore',
        likes: 20,
        user_id: 3,
        category_id: 3,
        is_liked: 1 
	},
    {
		description:'Religion is the organization of spirituality into something that became the hand maiden of conquerors. Nearly all religions were brought to people and imposed on people by conquerors, and used as the framework to control their minds.',
        author: 'John Henrik Clarke',
        likes: 50,
        user_id: 3,
        category_id: 4,
        is_liked: 0
	},
    {
		description:'So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you.',
        author: 'Jesus Christ',
        likes: 50,
        user_id: 2,
        category_id: 4,
        is_liked: 1
	},

];

const seedQuotes = () => Quotes.bulkCreate(quotesData)

module.exports = seedQuotes;