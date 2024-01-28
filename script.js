

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


function playRound (playerSelection, computerSelection){
        if ( playerSelection === "ROCK" && computerSelection === "PAPER"){
            a = playerSelection;
            b = computerSelection;
     
     determineWinner(a,b)
            console.log("You lose! Computer Wins! Paper beats rock.") }
        
        else if ( playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            a = playerSelection;
            b = computerSelection;
     
     determineWinner(a,b)
            console.log("You win! Computer lost! Rock beats scissors")
        }
    
        else if ( playerSelection === "PAPER" && computerSelection === "ROCK"){
            a = playerSelection;
            b = computerSelection;
     
     determineWinner(a,b)
            console.log("You win! Computer lost! Paper beats rock.")
        }
    
        else if ( playerSelection === "PAPER" && computerSelection === "SCISSORS"){
            a = playerSelection;
            b = computerSelection;
     
     determineWinner(a,b)
            console.log("You lose! Computer Wins! Scissors beats paper.")
        }
    
        else if( playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            a = playerSelection;
            b = computerSelection;
     
     determineWinner(a,b)
            console.log("You lose! Computer Wins! Rock beats scissors")
        }
        
        else if( playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            a = playerSelection;
            b = computerSelection;
     
     determineWinner(a,b)
            console.log("You win! Computer lost! Scissors beats paper.")
        }
    
        else if ( playerSelection === computerSelection){
            console.warn("Its a tie! Lets Play Again",);
            a = playerSelection
            b = computerSelection
            determineWinner(a,b)
            c = prompt("It's a tie! Please choose again").toUpperCase()
           playRound(c,getComputerChoice());
        }
    
        else {
            console.warn("It looks like there was an error! Please check code")
        }

}

function determineWinner(playerSelection,computerSelection){
    console.log("User Chose" + " " + playerSelection)
    console.log("Computer Chose" + " " + computerSelection)
}


function game(){

playRound(getUserChoice(),getComputerChoice())
playRound(getUserChoice(),getComputerChoice())
playRound(getUserChoice(),getComputerChoice())
playRound(getUserChoice(),getComputerChoice())
playRound(getUserChoice(),getComputerChoice())
}