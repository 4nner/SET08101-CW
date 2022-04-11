const question = document.getElementById("question");
const answer = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4")];

let score = 0;
let answered = 0;
let timeElapsed = 0;
let toAnswer = [];

const MAX_TIME = 600; // Seconds
const MAX_QUESTIONS = 3; // For testing reason, otherwise: localStorage.getItem("number");

let example_array = [];



async function play() {
    /* Set previous values to 0 */
    score = 0;
    answered = 0;
    timeElapsed = 0;

    example_array = await getQuestions("sample.json");
    console.log(example_array);
    loadQuestion(example_array);
}

function loadQuestion(array) {
    data = array[answered];
    /* Display Question & Answers */
    question.innerHTML = data.question;
    /* Randomise Questions Order */
    let answers = [];
    answers.push(data.correct_answer);

    for(let loop = 0; loop < 3; loop++) {
        answers.push(data.incorrect_answers[loop]);
    }

    shuffleArray(answers);


    for(let loop = 0; loop < 4; loop++) {
        answer[loop].innerHTML = answers[loop];
    }

    answered++;
}

/* Fetch from TriviaDB */
async function getQuestions(api_url) {
    try {
        const data = await fetch(api_url);
        const json = await data.json();
        return json.results;
    } catch(err) {
        console.log(err);
    }
}


/* Utilities */
function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
}


/* Run Game */
play();