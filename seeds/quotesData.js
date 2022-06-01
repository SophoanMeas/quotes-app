const { Quotes, Category } = require("../models");
//ID: 1 Work, 2 Love, 3 Life, 4 Spirituality

const quotesData = [
  {
    description:
      "Tis better to have loved and lost than never to have loved at all",
    author: "Alfred Lord Tennyson",
    likes: 40,
    user_id: 1,
    category_id: 2,
  },
  {
    description:
      "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage",
    author: "Lao Tzu",
    likes: 120,
    user_id: 1,
    category_id: 2,
  },
  {
    description:
      "I put my heart and my soul into my work, and have lost my mind in the process",
    author: "Vincent Van Gogh",
    likes: 200,
    user_id: 2,
    category_id: 1,
  },
  {
    description:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
    likes: 200,
    user_id: 2,
    category_id: 3,
  },
  {
    description:
      "I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.",
    author: "Rabindranath Tagore",
    likes: 20,
    user_id: 3,
    category_id: 3,
  },
  {
    description:
      "Religion is the organization of spirituality into something that became the hand maiden of conquerors. Nearly all religions were brought to people and imposed on people by conquerors, and used as the framework to control their minds.",
    author: "John Henrik Clarke",
    likes: 50,
    user_id: 3,
    category_id: 4,
  },
  {
    description:
      "So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you.",
    author: "Jesus Christ",
    likes: 50,
    user_id: 2,
    category_id: 4,
  },
  {
    description:
      "Science is not only compatible with spirituality; it is a profound source of spirituality.",
    author: "Carl Sagan",
    likes: 50,
    user_id: 4,
    category_id: 4,
  },
  {
    description:
      "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
    likes: 50,
    user_id: 4,
    category_id: 2,
  },
  {
    description: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
    likes: 50,
    user_id: 4,
    category_id: 3,
  },
  {
    description:
      "I learned this, at least, by my experiment; that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.",
    author: "Henry David Thoreau",
    likes: 50,
    user_id: 4,
    category_id: 1,
  },
  {
    description:
      "You can safely assume you've created God in your own image when it turns out that God hates all the same people you do.",
    likes: 50,
    user_id: 4,
    category_id: 4,
  },
  {
    description:
      "Build your own dreams or someone else will hire you to build theirs.",
    likes: 50,
    user_id: 4,
    category_id: 1,
  },
];

const seedQuotes = () => Quotes.bulkCreate(quotesData);

module.exports = seedQuotes;
