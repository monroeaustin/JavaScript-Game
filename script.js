
function getComputerChoice (){
    const options = ["ROCK", "PAPER","SCISSORS"]
    let computerSelection = options[Math.floor(Math.random()*options.length)]
    return(computerSelection)
//The above code should allow the computer to choose a random choice of rock, paper, or scissors.
// The value should be stored inside the function after being ran
}





function getUserChoice(){
    let playerSelection = prompt("Please choose Rock, Paper, or Scissors").toUpperCase()
    if (playerSelection === "ROCK"){
        return ("ROCK")}

        else if (playerSelection === "PAPER"){
            return ("PAPER")}

        else if(playerSelection === "SCISSORS") {
            return ("SCISSORS") 
        }   
       
        else {
            console.warn("Please choose Rock, Paper, or Scissors"), getUserChoice();
        }
// The above code should prompt the user to enter text within the field, convert text to caseSensitve, 
// warn if the input is not expected. The value should also be stored inside the function after being ran
}
// Create Element Nodes for Output Below

const btn = document.querySelectorAll('.btn')
const output = document.querySelector('.output')

const rbtn = document.getElementById('rock')
const pbtn = document.getElementById('paper')
const sbtn = document.getElementById('scissors')

const newPara1 = document.createElement('p')
const newPara2 = document.createElement('p')
const newPara3 = document.createElement('p')
const newPara4 = document.createElement('p')

const newbuton = document.createElement('button')


//updateScore for UI
const uScoreDisplay = document.querySelector('p.userScoreDisp');
const cScoreDisplay = document.querySelector('p.computerScoreDisp');
const userSide = document.querySelector('.userscoreboard')
const computerSide = document.querySelector('.cpuscoreboard')



createtxt = document.createElement('b')

let playerWon =0;
let computerWon =0;
let playedGames =0;


function restartGame(){
    newbuton
    newbuton.id = 'playagain'
    newbuton.value = 'Play Again'
    playagainbtn = document.getElementById('playagain');

    newbuton.addEventListener('click', ()=>{
        location.reload();
        
    output.appendChild(newbuton)

    
      })}

function disableButton(){
    document.getElementById("rock").setAttribute("disabled", true);
        document.getElementById("paper").setAttribute("disabled", true);
        document.getElementById("scissors").setAttribute("disabled", true);
    }


    function stateGameWinner(){
        if (playerWon >= 3) {
            createtxt
            createtxt.innerText = "Player won the most matches! Computer loses game"
            userSide.appendChild(createtxt)
        }

        else {
            createtxt
            createtxt.innerText = "Computer won the most matches! User loses game"
            computerSide.appendChild(createtxt)
        }
    }
function gameCounter (playedGames){
    if (playedGames === 5) {
        disableButton()
        stateGameWinner()

                newPara3.remove()
                newPara4.remove()
                newPara1.remove()
                newPara2.remove()
                restartGame()
    }
     
}





// Create Function to Display UI for Winner

function userWon (a,b) {
    determineWinner(a,b)
    newPara3
    newPara3.innerText = "You win! Computer Loses! " + a + " beats " + b;
    output.appendChild(newPara3)
    playedGames++;
    playerWon++;
        

    uScoreDisplay.innerText = playerWon


    if (playedGames === 5) {
        gameCounter(playedGames)
}
}

// Create Function to Display UI for Loser
function userLost (a,b) {
    determineWinner(a,b)
    newPara4;
    newPara4.innerText = " You Lost! Computer Wins! " + b + " beats " + a;
    output.appendChild(newPara4)
    playedGames++;
    computerWon++;


    cScoreDisplay.innerText = computerWon;

    if (playedGames === 5) {
        gameCounter(playedGames)
}
}

function displayTie (playerSelection,computerSelection){
    newPara1
    newPara1.innerText = "Both User & CPU Chose. " + playerSelection + " Please Try Again!"
    output.appendChild(newPara1)
}


function playRound (playerSelection, computerSelection){
        if ( playerSelection === "ROCK" && computerSelection === "PAPER"){
            a = playerSelection;
            b = computerSelection;
     

     userLost (a,b) 
    }
        
        else if ( playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            a = playerSelection;
            b = computerSelection;
     
    
            userWon(a,b)
        }
    
        else if ( playerSelection === "PAPER" && computerSelection === "ROCK"){
            a = playerSelection;
            b = computerSelection;
     
    
     userWon(a,b)
        }
    
        else if ( playerSelection === "PAPER" && computerSelection === "SCISSORS"){
            a = playerSelection;
            b = computerSelection;
     

     userLost (a,b)
        }
    
        else if( playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            a = playerSelection;
            b = computerSelection;
     
    
     userLost (a,b)
        }
        
        else if( playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            a = playerSelection;
            b = computerSelection;
     
    
     userWon(a,b)
        }
    
        else if ( playerSelection === computerSelection){
                newPara3.remove()
                newPara4.remove()
                newPara1.remove()
                newPara2.remove()
                        console.warn("Its a tie! Lets Play Again",);
            a = playerSelection
            b = computerSelection
            displayTie(playerSelection,computerSelection);
          
        }
    
        else {
            console.warn("It looks like there was an error! Please check code INPUT:" + playerSelection + "Computer chose: " + computerSelection)
        }

}

function determineWinner(playerSelection,computerSelection){
    newPara1
    newPara1.innerText = "User Chose" + " " + playerSelection;
    output.appendChild(newPara1);

    newPara2;
    newPara2.innerText = "Computer Chose" + " " + computerSelection;
    output.appendChild(newPara2);
}


// function game(){

// playRound(getUserChoice(),getComputerChoice())
// playRound(getUserChoice(),getComputerChoice())
// playRound(getUserChoice(),getComputerChoice())
// playRound(getUserChoice(),getComputerChoice())
// playRound(getUserChoice(),getComputerChoice())
// }



/// Create Physical RPS Buttons For UI

buttons = document.querySelectorAll(".btn")

buttons.forEach(button => {
    button.addEventListener('click',() => {
      let rawSelection = button.value;
      let playerSelection = rawSelection.toUpperCase()
      playRound(playerSelection,getComputerChoice())
    });
})