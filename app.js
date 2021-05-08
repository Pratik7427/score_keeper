const player1display = document.querySelector('#player1Score');
const player1button = document.querySelector("#player1");
const player2display = document.querySelector("#player2Score");
const player2button = document.querySelector("#player2");
const resetButton = document.querySelector("#reset");
const selectButton = document.querySelector("#selectValue");

let countScore1 = 0;
let countScore2 = 0;
let winningScore = 3;
let isGameOver = false;
player1button.addEventListener("click", () => {

    if (!isGameOver) {
        countScore1++;
        if (countScore1 === winningScore) {
            isGameOver = true;
            player1Score.classList.add("has-text-success");
            player2Score.classList.add('has-text-danger');
            player1button.disabled = true;
            player2button.disabled = true;
        }
        player1display.textContent = countScore1;
    }



})
player2button.addEventListener("click", () => {

    if (!isGameOver) {
        countScore2++;
        if (countScore2 === winningScore) {
            isGameOver = true;
            player2Score.classList.add("has-text-success");
            player1Score.classList.add('has-text-danger');
            player1button.disabled = true;
            player2button.disabled = true;

        }
        player2display.textContent = countScore2;
    }



})
selectButton.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})





resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    countScore1 = 0;
    countScore2 = 0;
    player1display.textContent = 0;
    player2display.textContent = 0;
    player1Score.classList.remove("has-text-success", 'has-text-danger');
    player2Score.classList.remove("has-test-success", "has-text-danger");
    player1button.disabled = false;
    player2button.disabled = false;
}