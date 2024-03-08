const quotes = [
  {
    author: "Aristotle",
    quote: "Quality is not an act, it is a habit.",
    source: "https://www.brainyquote.com/quotes/aristotle_379604",
  },
  {
    author: "Marcus Aurelius",
    quote:
      "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    source:
      "https://www.goodreads.com/quotes/126752-never-let-the-future-disturb-you-you-will-meet-it",
  },
  {
    author: "Horace",
    quote: "Do not think, just do.",
    source: "https://www.brainyquote.com/quotes/horace_119744",
  },
  {
    author: "Maori Proverb",
    quote:
      "Turn your face toward the sun and the shadows will fall behind you.",
    source:
      "https://www.goodreads.com/quotes/4564606-turn-your-face-toward-the-sun-and-the-shadows-will",
  },
  {
    author: "Malcolm Forbes",
    quote: "Failure is success if we learn from it.",
    source: "https://www.brainyquote.com/quotes/malcolm_forbes_121340",
  },
  {
    author: "Eric Thomas",
    quote:
      "When you want to succeed, as badly as you want to be breathe, that is when you will be successful.",
    source:
      "https://www.goodreads.com/quotes/7947574-there-was-a-young-man-who-you-know-he-wanted",
  },
  {
    author: "John Burroughs",
    quote: "A somebody was once a nobody who wanted to and did.",
    source: "https://www.brainyquote.com/quotes/john_burroughs_120947",
  },
  {
    author: "Martin Luther King, Jr.",
    quote:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    source: "https://www.brainyquote.com/quotes/martin_luther_king_jr_101472",
  },
  {
    author: "Walt Disney",
    quote: "If you can dream it, you can do it.",
    source: "https://www.brainyquote.com/quotes/walt_disney_130027",
  },
  {
    author: "Thomas Edison",
    quote:
      "If we did all the things we are capable of, we would literally astound ourselves.",
    source: "https://www.brainyquote.com/quotes/thomas_a_edison_161979",
  },
  {
    author: "Marcus Aurelius",
    quote:
      "How much more grievous are the consequences of anger than the causes of it.",
    source:
      "https://www.goodreads.com/quotes/77774-how-much-more-grievous-are-the-consequences-of-anger-than",
  },
  {
    author: "J. Michael Straczynski",
    quote:
      "No greater love hath a man than he lay down his life for his brother. Not for millions, not for glory, not for fame. For one person, in the dark where no one will ever know or see.",
    source:
      "https://www.goodreads.com/quotes/4472270-no-greater-love-hath-a-man-than-he-lay-down",
  },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "https://www.brainyquote.com/quotes/confucius_140908",
  },
  {
    author: "Marcus Aurelius",
    quote:
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
    source:
      "https://www.goodreads.com/quotes/190580-you-have-power-over-your-mind---not-outside-events",
  },
  {
    author: "George Bernard Shaw",
    quote:
      "Both optimists and pessimists contribute to society. The optimist invents the aeroplane, the pessimist the parachute.",
    source:
      "https://www.goodreads.com/quotes/193715-both-optimists-and-pessimists-contribute-to-society-the-optimist-invents",
  },
  {
    author: "Marcus Aurelius",
    quote: "If it is not right do not do it; if it is not true do not say it.",
    source:
      "https://www.goodreads.com/quotes/78675-if-it-is-not-right-do-not-do-it-if",
  },
  {
    author: "Samuel Beckett",
    quote:
      "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    source: "https://www.brainyquote.com/quotes/samuel_beckett_121335",
  },
  {
    author: "Winston S. Churchill",
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source:
      "https://www.goodreads.com/quotes/tag/success#:~:text=%22Success%20is%20not%20final,%20failure%20is%20not%20fatal:%20it%20is%20the%20courage%20to%20continue%20that%20counts.%22",
  },
  {
    author: "Charles Buxton",
    quote:
      "You will never find time for anything. If you want time you must make it.",
    source:
      "https://www.goodreads.com/quotes/26920-you-will-never-find-time-for-anything-if-you-want",
  },
  {
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I have learned about life -- it goes on.",
    source:
      "https://www.goodreads.com/quotes/258-in-three-words-i-can-sum-up-everything-i-ve-learned",
  },
  {
    author: "Truman Capote",
    quote: "Failure is the condiment that gives success its flavor.",
    source:
      "https://www.goodreads.com/quotes/tag/success#:~:text=%22Failure%20is%20the%20condiment%20that%20gives%20success%20its%20flavor.%22",
  },
  {
    author: "Stephen King",
    quote:
      "The scariest moment is always just before you start. After that, things can only get better.",
    source:
      "https://www.goodreads.com/quotes/357051-the-scariest-moment-is-always-just-before-you-start-after",
  },
  {
    author: "Robin Williams",
    quote:
      "No matter what people tell you, words and ideas can change the world.",
    source: "https://www.brainyquote.com/quotes/robin_williams_383827",
  },
  {
    author: "Nelson Mandela",
    quote: "It always seems impossible until it's done.",
    source: "https://www.brainyquote.com/quotes/nelson_mandela_378967",
  },
  {
    author: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source:
      "https://www.setquotes.com/the-greatest-glory-in-living-lies-not-in-falling-but-in-rising/",
  },
  {
    author: "Abraham Lincoln",
    quote:
      "Always bear in mind that your own resolution to succeed is more important than any other.",
    source: "https://www.brainyquote.com/quotes/abraham_lincoln_109274",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you do not have to remember anything.",
    source: "https://www.brainyquote.com/quotes/mark_twain_133066",
  },
  {
    author: "Elon Musk",
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    source: "https://www.brainyquote.com/quotes/elon_musk_567219",
  },
  {
    author: "William Lloyd Garrison",
    quote:
      "Are right and wrong convertible terms, dependant upon popular opinion?",
    source: "https://www.brainyquote.com/quotes/william_lloyd_garrison_106090",
  },
  {
    author: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    source:
      "https://www.goodreads.com/quotes/2448-to-live-is-the-rarest-thing-in-the-world-most",
  },
  {
    author: "Edgar Allan Poe",
    quote:
      "I would define, in brief, the poetry of words as the rhythmical creation of Beauty.",
    source: "https://www.brainyquote.com/quotes/edgar_allan_poe_107273",
  },
  {
    author: "Arthur Ashe",
    quote: "Start where you are. Use what you have. Do what you can..",
    source: "https://www.brainyquote.com/quotes/arthur_ashe_371527",
  },
  {
    author: "Jean De la Fontaine",
    quote:
      "Man is so made that whenever anything fires his soul, impossibilities vanish.",
    source:
      "https://bigthink.com/words-of-wisdom/jean-de-la-fontaine-on-passion/",
  },
  {
    author: "Marcus Aurelius",
    quote:
      "The happiness of your life depends upon the quality of your thoughts - therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature.",
    source: "https://www.brainyquote.com/quotes/marcus_aurelius_121534",
  },
  {
    author: "Reginald Lewis",
    quote: "Keep going, no matter what.",
    source: "https://reginaldflewis.com/",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "What you are afraid to do is a clear indication of what you need to do",
    source:
      "https://www.goodreads.com/quotes/9989196-what-you-are-afraid-to-do-is-a-clear-indication",
  },
  {
    author: "Bill Gates",
    quote:
      "Most people overestimate what they can do in one year and underestimate what they can do in ten years.",
    source:
      "https://www.goodreads.com/quotes/302999-most-people-overestimate-what-they-can-do-in-one-year",
  },
  {
    author: "Epictetus",
    quote:
      'If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, "He was ignorant of my other faults, else he would not have mentioned these alone.',
    source: "https://www.goodreads.com/author/quotes/13852.Epictetus",
  },
  {
    author: "Epictetus",
    quote:
      "It is impossible for a man to learn what he thinks he already knows.",
    source: "https://www.goodreads.com/author/quotes/13852.Epictetus",
  },
  {
    author: "Epictetus",
    quote:
      "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has",
    source: "https://www.goodreads.com/author/quotes/13852.Epictetus",
  },
  {
    author: "Doris Day",
    quote: "Que sera sera -- Whatever will be, will be",
    source: "https://www.youtube.com/watch?v=xZbKHDPPrrc",
  },
  {
    author: "Peter Drucker",
    quote: "The best way to predict the future is to create it.",
    source: "https://www.brainyquote.com/quotes/peter_drucker_101472",
  },
  {
    author: "Rafiki",
    quote:
      "Oh yes, the past can hurt. But from the way I see it, you can either run from it, or learn from it.",
    source:
      "https://news.disney.com/the-most-important-quotes-from-the-lion-king-according-to-you#:~Oh%20yes:~:text=Oh%20yes%2C%20the%20past%20can%20hurt.%20But%20from%20the%20way%20I%20see%20it%2C%20you%20can%20either%20run%20from%20it%2C%20or%20learn%20from%20it.%22%20%2DRafiki",
  },
];

export default quotes;
