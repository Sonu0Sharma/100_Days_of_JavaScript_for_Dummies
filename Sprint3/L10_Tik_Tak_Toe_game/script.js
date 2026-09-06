console.log("Hello")

// elements to access

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");

// initial turn     -   playerX, playerO
let turnO = true;

// winning conditions/patterns in tik tak toe

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// gamelogic - eventListner

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                msg.innerText = `Congratulations! Winner is ${pos1val}`;
                msg.classList.remove("hide")
                disableButtons();
                return;
            }
        }
    }
}


let msg = document.createElement("h1");
msg.classList.add("msg");
msg.classList.add("hide");
resetBtn.after(msg);


const disableButtons = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableButtons = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const resetGame = () => {
    turnO = true;
    enableButtons();
    msg.classList.add("hide")

}

resetBtn.addEventListener("click", resetGame);