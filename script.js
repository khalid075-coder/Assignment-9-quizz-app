
let questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Language",
            "Hyperlink Text"
        ],
        correct: 0
    },
    {
        question: "Which language styles web pages?",
        answers: ["HTML", "CSS", "Java", "SQL"],
        correct: 1
    },
    {
        question: "Which language adds interactivity?",
        answers: ["CSS", "HTML", "JavaScript", "SQL"],
        correct: 2
    },
    {
        question: "Which symbol selects an ID in CSS?",
        answers: [".", "#", "@", "*"],
        correct: 1
    }
];

let index = 0;
let score = 0;
let selected = -1;

function showQuestion() {
    selected = -1;

    document.getElementById("question").innerText =
        questions[index].question;

    let answers = document.getElementById("answers");
    answers.innerHTML = "";

    questions[index].answers.forEach(function(answer, i) {
        let btn = document.createElement("button");

        btn.innerText = answer;
        btn.className = "answer";

        btn.onclick = function() {
            selected = i;

            let all = document.querySelectorAll(".answer");

            all.forEach(function(b) {
                b.style.background = "blue";
            });

            btn.style.background = "green";
        };

        answers.appendChild(btn);
    });
}

document.getElementById("next").onclick = function() {
    if (selected == -1) {
        alert("Please select an answer!");
        return;
    }

    if (selected == questions[index].correct) {
        score++;
    }

    index++;

    if (index < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question").innerText =
            "Quiz Completed!";

        document.getElementById("answers").innerHTML = "";

        document.getElementById("result").innerText =
            "Your Score: " + score + " / " + questions.length;

        document.getElementById("next").style.display = "none";

        document.getElementById("restart").style.display =
            "inline-block";
    }
};

document.getElementById("restart").onclick = function() {
    index = 0;
    score = 0;

    document.getElementById("result").innerText = "";
    document.getElementById("next").style.display = "inline-block";
    document.getElementById("restart").style.display = "none";

    showQuestion();
};

showQuestion();
