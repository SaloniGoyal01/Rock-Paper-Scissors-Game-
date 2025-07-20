let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll("choices");
const msg = document.querySelector("#msg");

const computerScorePara = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");

const gancomputerChoices = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
}

const showWinner = (userWin,userChoices,computerChoices) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoices} beats ${computerChoices}`;
        msg.style.backgroundColor = "#081b31";

    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lost. $ {computerChoices} beats Your ${userChoices}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoices) => {
    console.log("user choices = ", userChoices);
//generate computer choice
const computerChoices = genComputerChoices();
console.log("computer choices = ", computerChoices);

if(userChoices === computerChoices) {
//draw game
drawGame();
}else {
    let userWin = true;
    if(userChoices === "rock") {
userWin = computerChoices === "paper" ? false : true;
    }else if(userChoices === "paper")  {
        userWin = computerChoices === "scissors" ? false : true;
    } else {
        userWin = computerChoices === "rock" ? false : true;
    }
    showWinner(userWin,userChoices,computerChoices);
}
};

choices.forEach((choice) => {
    choices.addEventListener("click", () => {
        const userChoices =choices.getAttribute("id");
        console.log("choices was clicked",userChoices);

    });
});

