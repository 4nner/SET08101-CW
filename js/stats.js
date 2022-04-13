/* HTML Elements */
const score = document.getElementById("score");
const time = document.getElementById("time");
const total = document.getElementById("total");
const difficulty = document.getElementById("difficulty");
const answered = document.getElementById("answered");
const notAnswered = document.getElementById("not-answered");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");

/* Load Data */
score.innerHTML = localStorage.getItem("score");
time.innerHTML = localStorage.getItem("time");
total.innerHTML = localStorage.getItem("total");
difficulty.innerHTML = localStorage.getItem("difficulty");
answered.innerHTML = localStorage.getItem("answered");
notAnswered.innerHTML = localStorage.getItem("not-answered");
correct.innerHTML = localStorage.getItem("correct");
incorrect.innerHTML = localStorage.getItem("incorrect");
