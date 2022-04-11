const question = document.getElementById("question");
const ans_one = document.getElementById("1");
const ans_two = document.getElementById("2");
const ans_three = document.getElementById("3");
const ans_four = document.getElementById("4");

let score = 0;
let answered = 0;
let timeElapsed = 0;
let toAnswer = [];

const MAX_TIME = 600; // Seconds
const MAX_QUESTIONS = 3; // For testing reason, otherwise: localStorage.getItem("number");


function play() {
    /* Set previous values to 0 */
    score = 0;
    answered = 0;
    timeElapsed = 0;

    start("sample.json");
}

function loadQuestion(data) {
    /* Display Question & Answers */
    question.innerHTML = data.question;
    ans_one.innerHTML = data.correct_answer;
    ans_two.innerHTML = data.incorrect_answers[0];
    ans_three.innerHTML = data.incorrect_answers[1];
    ans_four.innerHTML = data.incorrect_answers[2];

    answered++;
}

/* Fetch from TriviaDB */
function start(api_url) {
    fetch(api_url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            loadQuestion(data.results[answered]);
            return data.results;
        })
        .catch(error => {
            console.log(error);
        });
}

play();