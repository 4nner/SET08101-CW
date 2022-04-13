/* HTML Elements */
const score = document.getElementById("score");
const time = document.getElementById("time");
const total = document.getElementById("total");
const difficulty = document.getElementById("difficulty");
const answered = document.getElementById("answered");
const notAnswered = document.getElementById("not-answered");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const username = document.getElementById("username");

/* Load Data */
score.innerHTML = localStorage.getItem("score");
time.innerHTML = localStorage.getItem("time");
total.innerHTML = localStorage.getItem("total");
difficulty.innerHTML = localStorage.getItem("difficulty");
answered.innerHTML = localStorage.getItem("answered");
notAnswered.innerHTML = localStorage.getItem("not-answered");
correct.innerHTML = localStorage.getItem("correct");
incorrect.innerHTML = localStorage.getItem("incorrect");

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

/* Save Score */
function saveScore() {
    if (username.value === "") {
        username.classList.add("incomplete");
        setTimeout(function () {
            username.classList.remove("incomplete");
        }, 2000); // Wait 2 seconds
    } else {
        let tmpObj = { name: username.value, score: localStorage.getItem("score") }

        leaderboard.push(tmpObj); // Adds new score
        leaderboard.sort((a, b) => parseInt(b.score) - parseInt(a.score)); // Sorts Array
        leaderboard.splice(3); // Keeps only top 3

        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        return window.location.assign("/leaderboard.html");
    }
}