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
const MAX_QUESTION = 3; // For testing reason, otherwise: localStorage.getItem("number");

let questions = getQuestions("sample.json");
console.log(questions);

function play() {
    /* Set previous values to 0 */
    score = 0;
    answered = 0;
    timeElapsed = 0;
    loadQuestion();
}

function loadQuestion() {
    /* Display Question & Answers */
    question.innerText = questions[answered].question;
    ans_one.innerText = questions[answered].correct_answer;
    ans_two.innerText = questions[answered].incorrect_answers[0];
    ans_three.innerText = questions[answered].incorrect_answers[1];
    ans_four.innerText = questions[answered].incorrect_answers[2];

    answered++;
}

/* Fetch from TriviaDB */
function getQuestions(api_url) {
    const data = fetch(api_url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data.results;
        });
    return data;
}

play();