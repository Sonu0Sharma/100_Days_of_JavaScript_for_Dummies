let userCount = 0;
let compCount = 0;

const choices = document.querySelectorAll(".choice");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset");

/* ---------- GAME CLICK ---------- */

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

/* ---------- RANDOM COMPUTER ---------- */

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

/* ---------- MAIN GAME ---------- */

const playGame = (userChoice) => {

    let compChoice = genCompChoice();

    showSelectionUI(userChoice, compChoice);

    if(userChoice === compChoice){
        console.log("Game was Draw");
        return;
    }

    let userWin;

    if(userChoice === "scissors"){
        userWin = compChoice === "paper";
    } else if (userChoice === "rock"){
        userWin = compChoice === "scissors";
    } else {
        userWin = compChoice === "rock";
    }

    showWinner(userWin);
};

/* ---------- SHOW BADGES ---------- */

const showSelectionUI = (userChoice, compChoice) => {

    // Remove old badges
    document.querySelectorAll(".badge").forEach(b => b.remove());

    // User badge
    let userBadge = document.createElement("div");
    userBadge.innerText = "You";
    userBadge.classList.add("badge", "show-top");
    document.getElementById(userChoice).appendChild(userBadge);

    // Computer badge
    let compBadge = document.createElement("div");
    compBadge.innerText = "Computer";
    compBadge.classList.add("badge", "show-bottom");
    document.getElementById(compChoice).appendChild(compBadge);
};

/* ---------- WINNER ---------- */

const showWinner = (userWin) => {

    if(userWin){
        userCount++;
    } else {
        compCount++;
    }

    scoreUpdate();
};

/* ---------- UPDATE SCORE ---------- */

const scoreUpdate = () => {
    userScore.innerText = userCount;
    compScore.innerText = compCount;
};

/* ---------- RESET ---------- */

resetBtn.addEventListener("click", () => {
    userCount = 0;
    compCount = 0;
    scoreUpdate();

    document.querySelectorAll(".badge").forEach(b => b.remove());
});
