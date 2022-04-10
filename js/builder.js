window.onload = resetChoices();

/* Buttons Elements */
const topics = ["9", "11", "12", "14", "15", "16", "17", "18", "19", "21", "22", "23", "24", "25", "27", "28"];
const numbers = ["10", "20", "30", "40"];
const difficulties = ["easy", "medium", "hard"];

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