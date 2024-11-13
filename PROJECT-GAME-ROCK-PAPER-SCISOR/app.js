let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//======================================================================

const genCompChoice = () => {
const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options [randIdx];
//rock, paper, scissors
};

const drawGame = () => {
msg.innerText = "Game was Draw. Play again.";
msg.style.backgroundColor = "cadetblue"
}

const showWinner = (userWin, userChoice, compChoice) => {
if(userWin){
userScore++;
userScorePara .innerText = userScore;
msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor = "rgba(133, 131, 44, 0.6)"
}
else{
compScore++;
compScorePara .innerText = compScore;
msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
msg.style.backgroundColor = "maroon"

}
};
//===========================================================================
const playGame = (userChoice) => {
console.log("user choice = ", userChoice);
//Generate computer choice
const compChoice = genCompChoice();
console.log("comp choice = " , compChoice);

if(userChoice === compChoice) {
//Draw Game
drawGame();
}
else {
let userWin = true;
if(userChoice === "rock") {
//scissors, paper
compChoice === "paper" ? false : true;
} 
else if (userChoice === "paper"){
//rock, scissors
userWin = compChoice === "scissors" ? false: true;
}
else {
//rock, paper
userWin = compChoice === "rock" ? false : true;
}
showWinner(userWin, userChoice, compChoice);
}
};
//==========================================================================

choices.forEach((choice) => {
choice.addEventListener("click", () => {
const userChoice = choice.getAttribute("id");
playGame(userChoice);
});
});

//================================================================================