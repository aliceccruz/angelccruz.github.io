
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let currentAnswer = "";

async function getQuote(){
    console.log("This worked!");


try{
    const response = await fetch(endpoint);
    if (!response.ok){
        throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json['question']);
    } catch(err){
        console.log(err)
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}
function displayAnswer() {
    document.querySelector("#js-answer-text").textContent = currentAnswer;
  }
  
  document.querySelector("#js-new-quote").addEventListener("click", getQuote);
  document.querySelector("#js-tweet").addEventListener("click", displayAnswer);
  
  getQuote();