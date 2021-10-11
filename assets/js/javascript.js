var quotes = [
    'Don’t grieve. Anything you lose comes round in another form.',
    'What you seek is seeking you.',
    'In each moment the fire rages, it will burn away a hundred veils. And carry you a thousand steps toward your goal.',
    "What is planted in each person's soul will sprout.",
    'This is a subtle truth. Whatever you love you are.',
    'If light is in your heart, you will find your way home.',
    'The universe is not outside of you. Look inside of yourself; everything that you want, you already are.',
    'The only lasting beauty is the beauty of the heart.',
    'Very little grows on jagged rock. Be ground. Be crumbled, so wild flowers will come up where you are.',
    'As you start to walk on the way, the way appears.',
    'Why do you stay in prison when the door is so wide open.',
    'Seek the wisdom that will untie your knot. Seek the path that demands your whole being.',
    "Don't you know it yet? It is your light that lights the worlds.",
    'The very centre of your heart is where life begins - the most beautiful place on earth.',
    'Be empty of worrying. Think of who created thought.',
    'Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.',
    'Sell your cleverness and buy bewilderment. Cleverness is mere opinion. Bewilderment brings intuitive knowledge.',
    'Live life as if everything is rigged in your favour.',
    'Your hear is the size of an ocean. Go find yourself in its hidden depths.',
    'I know you are tired but come, this is the way.',
    'Set your life on fire. Seek those who fan your flames.',
    'Words are a pretext. It is the inner bond that draws one person to another, not words.',
    'Raise your words, not voice. It is rain that grows flowers, not thunder.',
    "Don't be satisfied with stories, how things have gone with others. Unfold you own myth.",
    'You were born with wings, why prefer to crawl through life?',
    'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuotesSection').innerHTML = quotes[randomNumber];
}
