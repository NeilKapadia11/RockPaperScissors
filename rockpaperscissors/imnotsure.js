function getComputerChoice()
{
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection)
{
    let result;
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase())
    {
        result = 0;
        return result;
    }
    else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") || (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK"))
    {
        result = 1;
        return result;
        
    }
    else if ((playerSelection.toUpperCase()  === "PAPER" && computerSelection.toUpperCase() === "ROCK") || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") || (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS"))
    {
        result = 2;
        return result;
    }
}

function updateScore(result, scores)
{
    if (result == 1)
    {
        scores[1]++;
    }
    else if (result == 2)
    {
        scores[0]++;      
    }
}

function outputMessage(result, computerSelection, playerSelection, scores)
{
    const outputTie = document.createElement("p");
    const outputLoss = document.createElement("p");
    const outputWin = document.createElement("p");
    if (result === 0)
    {
        outputTie.textContent = "You tie! You both chose " + computerSelection.toUpperCase();
        container.appendChild(outputTie);
    }
    else if (result === 1)
    {
        outputLoss.textContent = "You LOSE! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();   
        container.appendChild(outputLoss);    
    }
    else if (result === 2)
    {
        outputWin.textContent = "You WIN! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase();
        container.appendChild(outputWin);
    }
}

function runningScore(scores)
{
    const scoreVar = document.createElement("p");
    scoreVar.textContent = "The score is: " + scores[0] + " to " + scores[1];
    container.appendChild(scoreVar);
}

function playGame()
{
    let scores = [0, 0];

    let playerSelection;
    let computerSelection;

    let result;

    // New button logic

    const container = document.querySelector("#container");

    const welcome = document.createElement("h1");
    welcome.classList.add("welcome");
    welcome.textContent = "Welcome to Rock Paper Scissors!";
    container.appendChild(welcome);

    const optionText = document.createElement("h2");
    optionText.classList.add("choiceText");
    optionText.textContent = "Choose your option";
    container.appendChild(optionText);


    const rockBtn = document.createElement("button");
    rockBtn.classList.add("choiceBtn");
    rockBtn.textContent = "rock";
    rockBtn.addEventListener("click", function() 
    {
        computerSelection = getComputerChoice();
        playerSelection = "ROCK";       
        result = playRound(playerSelection, computerSelection);
        updateScore(result, scores);
        outputMessage(result, computerSelection, playerSelection, scores);
        runningScore(scores);

        if ((scores[0] === 5) || (scores[1] === 5)) 
        {
            announceWinner(scores);
        }
    });

    const paperBtn = document.createElement("button");
    paperBtn.classList.add("choiceBtn");
    paperBtn.textContent = "paper";
    paperBtn.addEventListener("click", function() 
    {
        computerSelection = getComputerChoice();
        playerSelection = "PAPER";
        result = playRound(playerSelection, computerSelection);
        updateScore(result, scores);
        outputMessage(result, computerSelection, playerSelection, scores);
        runningScore(scores);

        if ((scores[0] === 5) || (scores[1] === 5)) 
        {
            announceWinner(scores);
        }
    });

    const scissorsBtn = document.createElement("button");
    scissorsBtn.classList.add("choiceBtn");
    scissorsBtn.textContent = "scissors";
    scissorsBtn.addEventListener("click", function()
    {
        computerSelection = getComputerChoice();
        playerSelection = "SCISSORS";
        result = playRound(playerSelection, computerSelection);
        updateScore(result, scores);
        outputMessage(result, computerSelection, playerSelection, scores);
        runningScore(scores);

        if ((scores[0] === 5) || (scores[1] === 5)) 
        {
            announceWinner(scores);
        }
    });
    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);

    if ((scores[0] === 5) || (scores[1] === 5)) 
    {
        announceWinner(scores);
    }

}

function announceWinner(scores) 
{
    const tiedScore = document.createElement("p");
    const lostScore = document.createElement("p");
    const wonScore = document.createElement("p");
    if (scores[0] == scores[1]) 
    {
        tiedScore.textContent = "You tied, the final score is: " + scores[0] + " to " + scores[1];
        container.appendChild(tiedScore);
    } 
    else if (scores[0] < scores[1]) 
    {
        lostScore.textContent = "You lost, the final score is: " + scores[0] + " to " + scores[1];
        container.appendChild(lostScore);
    } 
    else if (scores[0] > scores[1]) 
    {
        wonScore.textContent = "You won! The final score is: " + scores[0] + " to " + scores[1];
        container.appendChild(wonScore);
    }
}

playGame();






