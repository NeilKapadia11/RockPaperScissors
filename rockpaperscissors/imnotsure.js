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
    if (result === 0)
    {
        console.log("You tie! You both chose " + computerSelection.toUpperCase());
        console.log("The score is: " + scores[0] + " to " + scores[1]);
    }
    else if (result === 1)
    {
        console.log("You LOSE! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase());
        console.log("The score is: " + scores[0] + " to " + scores[1]);
    }
    else if (result === 2)
    {
        console.log("You WIN! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase());
        console.log("The score is: " + scores[0] + " to " + scores[1]);
    }
}

function playGame()
{
    let scores = [0, 0];
    for (let x = 0; x < 5; x++)
    {
        let playerSelection = prompt("ROCK, PAPER, SCISSORS?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log("Your choice: " + playerSelection + " | " + "The Computer's Choice: " + computerSelection);
        updateScore(result, scores);
        outputMessage(result, computerSelection, playerSelection, scores);
    }
    if (scores[0] == scores[1])
    {
        console.log("You tied, the final score is: " + scores[0] + " to " + scores[1]);
    }
    else if (scores[0] < scores[1])
    {
        console.log("You lost, the final score is: " + scores[0] + " to " + scores[1]);
    }
    else if (scores[0] > scores[1])
    {
        console.log("You won! The final score is: " + scores[0] + " to " + scores[1]);
    }
}

playGame();






