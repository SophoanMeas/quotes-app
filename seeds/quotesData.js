const { Quotes, Category } = require("../models");
//ID: 1 Work, 2 Love, 3 Life, 4 Spirituality

const quotesData = [
  {
    description:
      "Tis better to have loved and lost than never to have loved at all",
    author: "Alfred Lord Tennyson",
    likes: 0,
    user_id: 1,
    category_id: 2,
  },
  {
    description:
      "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage",
    author: "Lao Tzu",
    likes: 0,
    user_id: 1,
    category_id: 2,
  },
  {
    description:
      "I put my heart and my soul into my work, and have lost my mind in the process",
    author: "Vincent Van Gogh",
    likes: 0,
    user_id: 2,
    category_id: 1,
  },
  {
    description:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
    likes: 0,
    user_id: 2,
    category_id: 3,
  },
  {
    description:
      "I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.",
    author: "Rabindranath Tagore",
    likes: 0,
    user_id: 3,
    category_id: 3,
  },
  {
    description:
      "Religion is the organization of spirituality into something that became the hand maiden of conquerors. Nearly all religions were brought to people and imposed on people by conquerors, and used as the framework to control their minds.",
    author: "John Henrik Clarke",
    likes: 0,
    user_id: 3,
    category_id: 4,
  },
  {
    description:
      "So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you.",
    author: "Jesus Christ",
    likes: 0,
    user_id: 2,
    category_id: 4,
  },
  {
    description:
      "Science is not only compatible with spirituality; it is a profound source of spirituality.",
    author: "Carl Sagan",
    likes: 0,
    user_id: 4,
    category_id: 4,
  },
  {
    description:
      "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
    likes: 0,
    user_id: 4,
    category_id: 2,
  },
  {
    description: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
    likes: 0,
    user_id: 4,
    category_id: 3,
  },
  {
    description:
      "I learned this, at least, by my experiment; that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.",
    author: "Henry David Thoreau",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
  {
    description:
      "You can safely assume you've created God in your own image when it turns out that God hates all the same people you do.",
    author: "Anne Lamott",
    likes: 0,
    user_id: 4,
    category_id: 4,
  },
  {
    description:
      "Build your own dreams or someone else will hire you to build theirs.",
    author: "Farrah Gray",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
  {
    description: "The unexamined life is not worth living.",
    author: "Socrates",
    likes: 0,
    user_id: 4,
    category_id: 3,
  },
  {
    description: "Love is like the wind, you can’t see it but you can feel it.",
    author: "Nicholas Sparks",
    likes: 0,
    user_id: 4,
    category_id: 2,
  },
  {
    description: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
  {
    description:
      "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
    author: "Steve Jobs",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
  {
    description:
      "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    author: "Dolly Parton",
    likes: 0,
    user_id: 4,
    category_id: 3,
  },
  {
    description:
      "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
    author: "Kobe Bryant",
    likes: 0,
    user_id: 4,
    category_id: 3,
  },
  {
    description:
      "A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.",
    author: "Kurt Vonnegut",
    likes: 0,
    user_id: 4,
    category_id: 2,
  },
  {
    description:
      "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.",
    author: "Pierre Teilhard de Chardin",
    likes: 0,
    user_id: 4,
    category_id: 4,
  },
  {
    description:
      "What you are is God's gift to you, what you become is your gift to God.",
    author: "Hans Urs von Balthasar",
    likes: 0,
    user_id: 4,
    category_id: 4,
  },
  {
    description:
      "The more I want to get something done the less I call it work.",
    author: "Richard Bach",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
  {
    description:
      "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
  {
    description:
      "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
    author: "Celine Dion",
    likes: 0,
    user_id: 4,
    category_id: 3,
  },
  {
    description:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
    likes: 0,
    user_id: 4,
    category_id: 3,
  },
  {
    description:
      "Life is a succession of lessons which must be lived to be understood.",
    author: "Helen Keller",
    likes: 0,
    user_id: 4,
    category_id: 3,
  },
  {
    description:
      "Life is ten percent what happens to you and ninety percent how you respond to it.",
    author: "Charles Swindoll",
    likes: 0,
    user_id: 4,
    category_id: 3,
  },
  {
    description: "Try not. Do, or do not. There is no try.",
    author: "Yoda",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
  {
    description: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
  {
    description:
      "Do the best you can until you know better. Then when you know better, do better.",
    author: "Maya Angelou",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
  {
    description:
      "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    author: "Pele",
    likes: 0,
    user_id: 4,
    category_id: 1,
  },
];

const seedQuotes = () => Quotes.bulkCreate(quotesData);

module.exports = seedQuotes;