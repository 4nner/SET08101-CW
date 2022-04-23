window.onload = resetChoices(); // Reset Choices on (re)load

/* HTML Elements */
const go = document.getElementById("start");

/* Buttons Elements */
const topics = ["9", "11", "12", "14", "15", "16", "17", "18", "19", "21", "22", "23", "24", "25", "27", "28"];
const numbers = ["10", "20", "30", "40"];
const difficulties = ["easy", "medium", "hard"];

/* API Token */
let token = localStorage.getItem("token") || "undefined";

async function getToken() {
    try {
        const data = await fetch("https://opentdb.com/api_token.php?command=request");
        const json = await data.json();
        token = json.token;
        localStorage.setItem("token", token);
    } catch (err) {
        console.log(err);
    }
}

if (token == "undefined") {
    getToken();
}

/* Builder Functions */
function resetChoices() {
    localStorage.setItem("topic", "undefined");
    localStorage.setItem("number", "undefined");
    localStorage.setItem("difficulty", "undefined");
}

function setTopic(topic) {
    let top = localStorage.getItem("topic");
    if (top !== "undefined") {
        let tmp = document.getElementById(topics[topics.indexOf(top)]);
        tmp.className = "button choice";
    }

    let index = topics.indexOf(topic);
    if (topic == topics[index]) {
        let tmp = document.getElementById(topics[index]);
        tmp.className = "button choice selected";
    }

    localStorage.setItem("topic", topic);
}

function setNumber(number) {
    let num = localStorage.getItem("number");
    if (num !== "undefined") {
        let tmp = document.getElementById(numbers[numbers.indexOf(num)]);
        tmp.className = "button choice";
    }

    let index = numbers.indexOf(number);
    if (number == numbers[index]) {
        let tmp = document.getElementById(numbers[index]);
        tmp.className = "button choice selected";
    }

    localStorage.setItem("number", number);
}

function setDifficulty(difficulty) {
    let diff = localStorage.getItem("difficulty");
    if (diff !== "undefined") {
        let tmp = document.getElementById(difficulties[difficulties.indexOf(diff)]);
        tmp.className = "button choice";
    }

    let index = difficulties.indexOf(difficulty);
    if (difficulty == difficulties[index]) {
        let tmp = document.getElementById(difficulties[index]);
        tmp.className = "button choice selected";
    }

    localStorage.setItem("difficulty", difficulty);
}

function build() {
    let topic = localStorage.getItem("topic");
    let difficulty = localStorage.getItem("difficulty");
    let number = localStorage.getItem("number");

    if (topic === "undefined" || difficulty == "undefined" || number === "undefined") {
        go.classList.add("incomplete");
        setTimeout(function () {
            go.classList.remove("incomplete");
        }, 2000); // Wait 2 seconds
    } else {
        return window.location.assign("/play.html");
    }
}
