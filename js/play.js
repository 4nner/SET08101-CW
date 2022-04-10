const question = document.getElementById("question");
const ans_one = document.getElementById("1");
const ans_two = document.getElementById("2");
const ans_three = document.getElementById("3");
const ans_four = document.getElementById("4");

let score = 0;
let questionsTotal = 0;
let questionsAnswered = 0;

function getQuestions() {
    const data = fetch("test-sample.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
    return data;
}
