function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    const choiceList = ['rock','paper','scissors']
    const computerChoice = choiceList[randomNumber]
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

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const gameStatics = document.querySelector('#choices-display')
const theWinnerAnnoucePanel = document.createElement('span')

let userScore  = 0;
let computerScore = 0;
let roundsPlayed = 0;

function announceTheWinner(winner){
     //clearing the results panel
     let ResultsToBeRemoved = gameStatics.children
     ResultsToBeRemoved = [...ResultsToBeRemoved]
     ResultsToBeRemoved.forEach(result => {result.remove()})
     //announcing the winner
     if (winner == 'user') theWinnerAnnoucePanel.textContent = `You Win!!!` 
     else if(winner == 'computer') theWinnerAnnoucePanel.textContent = `The Computer has Won!!!`
     theWinnerAnnoucePanel.setAttribute('style','color:red; font-size:50px;text-align:center')
     gameStatics.appendChild(theWinnerAnnoucePanel)
     
     //reset the scores
     computerScore = 0;
     computerScoreDisplay.textContent = 0;
     userScore = 0
     userScoreDisplay.textContent = 0
     
}



function playGame(e){
    if (roundsPlayed < 5){
        // removing the winner anounce panel incase it is there
            roundsPlayed += 1;
            const userChoice = e.target.textContent;
            const computerChoice = getComputerChoice();
            const miniFlexContainer = document.createElement('div')
            miniFlexContainer.setAttribute('class','mini-flex-conatiner')
            const computerChoiceAsFlexItem = document.createElement('p');
            const userChoiceAsFlexItem = document.createElement('p')
            computerChoiceAsFlexItem.textContent = computerChoice;
            computerChoiceAsFlexItem.setAttribute('class','info')
            userChoiceAsFlexItem.textContent = userChoice;
            userChoiceAsFlexItem.setAttribute('class','info')
            miniFlexContainer.setAttribute('style','display:flex; justify-content:space-between')
            miniFlexContainer.appendChild(computerChoiceAsFlexItem)
            miniFlexContainer.appendChild(userChoiceAsFlexItem)
            gameStatics.appendChild(miniFlexContainer)
            win_status = playRound(userChoice,computerChoice)
            if (win_status == 'win'){
                userScore += 1;
                userScoreDisplay.textContent = userScore
            }else if(win_status == 'lose'){
                computerScore += 1;
            computerScoreDisplay.textContent = computerScore
            }

            //check who as reached 5 points
            if(computerScore == 5 && userScore < 5){
                announceTheWinner('computer')
                gameStatics.setAttribute 
            }else if(userScore == 5 && computerScore < 5){
                announceTheWinner('user')
            }
        }
    // reset or clear the outcomes panel for every five rounds played
    else if(roundsPlayed >= 5){
        roundsPlayed = 0;
        let ResultsToBeRemoved = gameStatics.children
        ResultsToBeRemoved = [...ResultsToBeRemoved]
        ResultsToBeRemoved.forEach(result => {result.remove()})
    }
}

rockButton.addEventListener('click',playGame)
paperButton.addEventListener('click',playGame)
scissorsButton.addEventListener('click',playGame)
