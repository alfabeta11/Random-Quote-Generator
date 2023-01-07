const quoteBox = document.getElementById('quote-box');
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');
const newQuote_btn = document.getElementById('new-quote');
const twitter_btn = document.getElementById('tweet-quote')
let quotesData = [];

// Print the result to the write places;


// Return a random quote from an array of quotes;
let getRandomQuote = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let currentQuoteText = arr[randomIndex].text;
  let currentQuoteAuthor = arr[randomIndex].author;
  quoteText.innerText = currentQuoteText;
  quoteAuthor.innerText = currentQuoteAuthor;
  
  twitter_btn.setAttribute(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
      encodeURIComponent('" ' + currentQuoteText + ' " ' + currentQuoteAuthor)
  );
  return;
}

// Get the quotes array from the api
let getQuotes = () => {
  return fetch("https://type.fit/api/quotes")
  .then(results => results.json())
  .catch(err => console.log(err))
};

async function takeCare() {
  
  quotesData = await getQuotes();
  getRandomQuote(quotesData);

  newQuote_btn.addEventListener('click', () => {
    getRandomQuote(quotesData);
  })
};
takeCare();
