var userScore = 0;
var compScore = 0;

const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissor_div = document.querySelector("#s");

function getCompInput(){
   var choices = ["r", "p", "s"];
   var n = Math.floor(Math.random()*3);
   return choices[n];
 }

function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors"
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userSmallWord = "user".fontsize(3).sub();
  const compSmallWord = "computer".fontsize(3).sub();
  result_div.innerHTML = convertToWord(userChoice) +  userSmallWord + " beats " + convertToWord(computerChoice) + compSmallWord + ". You Won!";
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function(){ document.getElementById(userChoice).classList.remove("green-glow"); }, 300);
}

function loss(userChoice, computerChoice){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userSmallWord = "user".fontsize(3).sub();
  const compSmallWord = "computer".fontsize(3).sub();
  result_div.innerHTML = convertToWord(computerChoice) + compSmallWord + " beats " + convertToWord(userChoice) + userSmallWord + ". You Lost";
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function(){ document.getElementById(userChoice).classList.remove("red-glow"); }, 300);
}

function draw(){
  result_div.innerHTML = "It's a Draw."
}

function game(userInput){
  const computerChoice = getCompInput();
  const userChoice = userInput;
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      loss(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}

function main(){
  rock_div.addEventListener("click", function() {
    game("r");
  })
  paper_div.addEventListener("click", function() {
    game("p");
  })
  scissor_div.addEventListener("click", function() {
    game("s");
  })
}
 main();
