function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3)
    choiceList = ['rock','paper','scissors']
    computerChoice = choiceList[randomNumber]
    return computerChoice
}

function playRound(playerSelection,computerSelection){
    // testing rock vs scissors
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == 'scissors' ){
        let win_status = 'win'
        return win_status
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == 'rock' ){
        let win_status = 'lose'
        return win_status
    }
    //testing paper vs scissors
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
        let win_status = 'win'
        return win_status
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors'){
        let win_status = 'lose'
        return win_status
    }
    // testing rock vs paper
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        let win_status = 'win'
        return win_status
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper'){
        let win_status = 'lose'
        return win_status
    }
    // testing if they all equal
    else if(playerSelection == computerSelection){
        return 'draw';
    }

}

function game(){
    let playerScore = 0
    let computerScore = 0
    let message = ''
    for(i = 1; i <= 5; i ++){
        //play the game 5 times in a raw and see whole wins
        let playerSelection = prompt('rock paper or scissors')
        let computerSelection = getComputerChoice()
        let results = playRound(playerSelection,computerSelection)
        console.log(playerSelection.toLowerCase() + ' vs ' + computerSelection)

        if (results == 'win' ){
            console.log(`you win ${playerSelection.toLowerCase()} beats ${computerSelection}`)
            playerScore += 1
        }
        else if(results == 'lose'){
            console.log(`you lose ${computerSelection} beats ${playerSelection.toLowerCase()}`)
            computerScore += 1
        }
    }

    //game over
    // summarize the results for the game
    console.log('game over')
    if (playerScore > computerScore){
        message = `YOUR SCORE: ${playerScore}
COMPUTER : ${computerScore}
        YOU WIN, CONGRATULATIONS`
    }else if(computerScore > playerScore){
        message = `YOUR SCORE: ${playerScore}
COMPUTER : ${computerScore}
        YOU LOSE, The Computer Won`
    }else{
        message = "It IS A TIE, NOBODY WON"
    }
    console.log(message)
}

game()