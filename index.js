const api_url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=1"; 
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data); 

  
  quote.innerHTML = data[0].quote;
  author.innerHTML = `- ${data[0].character}`;
}


getQuote(api_url);
