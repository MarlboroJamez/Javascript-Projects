let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// The above code is called 'caching the dom'. This is really useful as we do not have to keep referring back to how to reach each element as they are cached in the variable and can be referenced every time we need it.

// Rather than logging a message to the console, we want the click action to trigger an event. The function 'game' (not yet created) will be passed an argument based on which element is clicked on in the dom, i.e. "r", "p" or "s".

function getComputerChoice(){
  const choices = ["r", "p", "s"]; // this is our choices array
  const randomNumber = Math.floor(Math.random() * 3); //this is using the Math function to generate a number below 3, then using Math.floor to round this down to a whole number, i.e. 0, 1 or 2. This is all then stored in a variable called randomNumber.
  return choices[randomNumber]; // This returns the choice in the array based on the randomly generated number.
}

function convertToWord (letter) {
  if (letter === "r") return "Rock"; //This is saying if the argument passed to the result message was r, write 'Rock' instead. This is more human readable than 'r'
  if (letter === "p") return "Paper"; 
  return "Scissors"; //if it wasnt rock or paper it's gunna be scissors. 
}

function win(user, comp) {
  userScore ++;
  userScore_span.innerHTML = userScore; 
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = convertToWord(user) + " beats " + convertToWord(comp) + ". You WINNN!!! ✌ ...for now."; // this delivers the details to the dom, converting the resulting letter to a word 
  document.getElementById(user).classList.add('win-glow'); // this grabs which ever div element was clicked in the browser and adds the win-glow class to it
  setTimeout(function(){ document.getElementById(user).classList.remove('win-glow')}, 1000); //This removes the same class after a certain duration as passed
}

function lose(user, comp) {
  compScore ++;
  userScore_span.innerHTML = userScore; 
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = convertToWord(user) + " is vanquished by " + convertToWord(comp) + ". 🤮 Soz, you LOSE."; // this delivers the details to the dom, converting the resulting letter to a word 
    document.getElementById(user).classList.add('lose-glow');
  setTimeout(function(){ document.getElementById(user).classList.remove('lose-glow')}, 1000);
}

function draw(user, comp) {
  result_div.innerHTML = convertToWord(user) + " does nothing to " + convertToWord(comp) + ". They are friends. Everybody loses / go home."; // this delivers the details to the dom, converting the resulting letter to a word 
    document.getElementById(user).classList.add('draw-glow');
  setTimeout(function(){ document.getElementById(user).classList.remove('draw-glow')}, 1000);
}


function game(userChoice){
  const computerChoice = getComputerChoice(); // This function simply runs the random choice generation above
  switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "ps":
      case "rp":
      case "sr":
        lose(userChoice, computerChoice);
         break;
      case "pp":
      case "rr":
      case "ss":
        draw(userChoice, computerChoice);
         break;
  }
  // above is a switch statement - like an if statement but sometimes simpler. It currently doesn't work! A message should run in console when the buttons are clicked. ??? Ah it is because I used semicolon at the end of each case rather than colon. 
}

function main() {
    rock_div.addEventListener('click', function() {
      game("r");
    })

    paper_div.addEventListener('click', function() {
      game("p");
    })

    scissors_div.addEventListener('click', function() {
      game("s");
    })
}

main();
