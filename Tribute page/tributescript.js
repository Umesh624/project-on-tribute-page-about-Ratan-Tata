// Array of quotes by Ratan Tata
const quotes = [
  "Take the stones people throw at you, and use them to build a monument.",
  "Ups and downs in life are very important to keep us going, because a straight line in an ECG means we are not alive.",
  "None can destroy iron, but its own rust can! Likewise, none can destroy a person, but their own mindset can.",
  "I don’t believe in taking the right decisions. I take decisions and then make them right.",
  "If you want to walk fast, walk alone. But if you want to walk far, walk together."
];

// Function to display a random quote
function displayRandomQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event listener for the "Scroll to Top" button
document.getElementById("scrollToTop").addEventListener("click", scrollToTop);

// Display a random quote when the page loads
document.addEventListener("DOMContentLoaded", displayRandomQuote);