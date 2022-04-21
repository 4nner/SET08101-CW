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

const reddit = document.getElementById("reddit");
const twitter = document.getElementById("twitter");

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

/* Share Buttons */
twitter.href = "https://twitter.com/intent/tweet/?text=I%20have%20scored%20" + score.innerText + "%20points%20in%20a%20quiz%20on%20QuizzON%20in%20" + difficulty.innerHTML + "%20mode.%20Can%20you%20do%20better%3F&url=https%3A%2F%2F4nner.github.io%2FSET08101-CW%2F"
reddit.href = "https://reddit.com/submit/?url=https%3A%2F%2F4nner.github.io%2FSET08101-CW%2F&resubmit=true&title=I%20have%20scored%20" + score.innerText + "%20points%20in%20a%20quiz%20on%20QuizzON%20in%20" + difficulty.innerHTML + "%20mode.%20Can%20you%20do%20better%3F"