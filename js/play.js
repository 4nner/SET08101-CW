/* HTML Elements */
const question = document.getElementById("question");
const answer = Array.from(document.getElementsByClassName("answer-text"));
const progress_bar = document.getElementById("progress-bar");

/* Sounds */
const correctSound = new Audio("sound/right.wav");
const wrongSound = new Audio("sound/wrong.wav");

/* Game Settings */
const MAX_TIME = 9999; // In seconds - For For testing reason, otherwise based on difficulty
const MAX_QUESTIONS = 5; // For testing reason, otherwise: localStorage.getItem("number");

/* Game Vars */
let score = 0;
let answered = 0;
let wrongAnswer = 0;
let correctAnswer = 0;
let notAnswered = 0;
let questCount = 0;
let timeElapsed = 0;
let timeLeft = 0;
let progress = 0;
let answerAllowed = false;
let difficulty;
let timer;



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
    progress = 0;

    questions = await getQuestions("sample.json");
    setDifficulty();

    nextQuestion();
    answerListener();
}

/* Handles Next Question */
function nextQuestion() {
    updateProgress();
    clearInterval(timer);
    if (questCount < MAX_QUESTIONS) {
        timeLeft = MAX_TIME;
        loadQuestion();
    } else {
        console.log(score);
        console.log(questCount);
        console.log(answered);
        console.log(notAnswered);
        console.log(correctAnswer);
        console.log(wrongAnswer);
        console.log(timeElapsed);
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

            let result = "correct";
            if (questions[questCount - 1].correct_answer == e.target.innerHTML) {
                updateScore();
                answerRegistration(true);
                e.target.parentElement.classList.add(result);
                correctSound.play();
            } else {
                result = "wrong";
                answerRegistration(false);
                e.target.parentElement.classList.add(result);
                wrongSound.play();
            }
            setTimeout(function () {
                e.target.parentElement.classList.remove(result);
                nextQuestion();
            }, 1000); // Wait 1 second
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

    /* (Re)Start Timer */
    timer = setInterval(questionTimer, 1000);
}

/* Timer - Score - Progress */
function questionTimer() {
    document.getElementById("time").innerHTML = " " + timeLeft + "s";
    timeLeft--;
    timeElapsed++;

    if (timeLeft == -1) {
        clearInterval(timer);
        wrongSound.play();
        notAnswered++;
        nextQuestion();
    }
}

function updateScore() {
    score += (10 + timeLeft) * difficulty;
    document.getElementById("score").innerHTML = "" + score;
}

function updateProgress() {
    progress = (questCount / MAX_QUESTIONS) * 100;

    progress_bar.style.width = progress + "%";
    if (progress >= 95) {
        progress_bar.style.backgroundColor = "#86e01e";
    } else if (progress >= 75) {
        progress_bar.style.backgroundColor = "#f2d31b";
    } else if (progress >= 50) {
        progress_bar.style.backgroundColor = "#f2b01e";
    } else if (progress >= 25) {
        progress_bar.style.backgroundColor = "#f27011";
    } else {
        progress_bar.style.backgroundColor = "#8f63a0f";
    }
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

function setDifficulty() {
    // let level = localstorage.getItem("difficulty");
    let level = "easy"; // TODO: Remove before final release
    if (level == "easy") difficulty = 1;
    if (level == "medium") difficulty = 2;
    if (level == "hard") difficulty = 3;
}

/* Run Game */
play();