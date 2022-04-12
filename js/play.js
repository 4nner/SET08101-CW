/* HTML Elements */
const question = document.getElementById("question");
const answer = Array.from(document.getElementsByClassName("answer-text"));

/* Sounds */
const correctSound = new Audio("sound/right.wav");
const wrongSound = new Audio("sound/wrong.wav");

/* Game Vars */
let score = 0;
let answered = 0;
let wrongAnswer = 0;
let correctAnswer = 0;
let notAnswered = 0;
let questCount = 0;
let timeElapsed = 0;
let toAnswer = [];
let answerAllowed = false;

const MAX_TIME = 600; // Seconds
const MAX_QUESTIONS = 5; // For testing reason, otherwise: localStorage.getItem("number");

let questions = []; // Contains all questions and answers

/* Game Initialisation */
async function play() {
    /* Set all the variables to 0 */
    score = 0;
    answered = 0;
    wrongAnswer = 0;
    correctAnswer = 0;
    notAnswered = 0;
    questCount = 0;
    timeElapsed = 0;

    questions = await getQuestions("sample.json");
    loadQuestion();
    answerListener();
}

/* Handles Next Question */
function nextQuestion() {
    if (questCount < MAX_QUESTIONS) {
        loadQuestion();
    } else {
        console.log(questCount);
        console.log(answered);
        console.log(correctAnswer);
        console.log(wrongAnswer);
        console.log('all questions answered')
        // end();
    }
}

/* Set-up Answer Listener*/
function answerListener() {
    answer.forEach((pick) => {
        pick.addEventListener('click', e => {
            if (!answerAllowed) return;
            answerAllowed = false;

            if (questions[questCount - 1].correct_answer == e.target.innerHTML) {
                answerRegistration(true);
                correctSound.play();
            } else {
                answerRegistration(false);
                wrongSound.play();
            }
            nextQuestion();
        });
    });
}

/* Registers Answer */
function answerRegistration(correct) {
    answered++;
    if (correct) {
        console.log('correct');
        correctAnswer++;
    } else {
        wrongAnswer++;
    }
}


/* Loads Question Data*/
function loadQuestion() {
    data = questions[questCount];
    question.innerHTML = data.question;
    /* Randomise Questions Order */
    let answers = [];
    answers.push(data.correct_answer);

    for (let loop = 0; loop < 3; loop++) {
        answers.push(data.incorrect_answers[loop]);
    }

    shuffleArray(answers);

    for (let loop = 0; loop < 4; loop++) {
        answer[loop].innerHTML = answers[loop];
    }

    questCount++;
    answerAllowed = true;
}


/* Fetch from TriviaDB */
async function getQuestions(api_url) {
    try {
        const data = await fetch(api_url);
        const json = await data.json();
        return json.results;
    } catch (err) {
        console.log(err);
    }
}


/* Utilities */
function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}


/* Run Game */
play();