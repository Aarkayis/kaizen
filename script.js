const quotes = [
  "Discipline will take you places motivation never could.",
  "Small progress every day becomes massive success.",
  "Consistency beats talent when talent becomes lazy.",
  "Study now so future you can breathe peacefully.",
  "Every topper was once confused too."
];

const quoteElement = document.getElementById("quote");

function showRandomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  if (quoteElement) {
    quoteElement.innerText = '"' + random + '"';
  }
}

showRandomQuote();
