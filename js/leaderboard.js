/* HTML Elements */
const first_user = document.getElementById("first-user");
const first_score = document.getElementById("first-score");
const second_user = document.getElementById("second-user");
const second_score = document.getElementById("second-score");
const third_user = document.getElementById("third-user");
const third_score = document.getElementById("third-score");

/* Get Data */
const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

/* Load Data */
first_user.innerText = leaderboard[0].name;
first_score.innerText = leaderboard[0].score;
second_user.innerText = leaderboard[1].name;
second_score.innerText = leaderboard[1].score;
third_user.innerText = leaderboard[2].name;
third_score.innerText = leaderboard[2].score;