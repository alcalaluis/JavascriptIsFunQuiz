var scoreCount = 0;
var timeCount = 75;


var startQuiz = document.getElementById("start");
var h1Elm = document.querySelector("h1");
var pElm = document.getElementById("main-text");
var answerElm = document.getElementById("answers");
var submitBtn = document.getElementById("submit");
var qResult = document.getElementById("result");
var scoreBtn = document.getElementById("score");
var timer = document.getElementById("timer");
var timerInterval;

var qNum = 0;









var QuizQuestions = [
    {
        question: "1. What is the term from running through each item in an array?",
        answers: [
            "search",
            "runThrough",
            "for loop",
            "log up",
        ],
        correct: 2
    },
    {
        question: "2. Which is not one of the three main JavaScript data types?",
        answers: [
            "strings",
            "numbers",
            "buttons",
            "booleans",
        ],
        correct: 2
    },
    {
        question: "3. Which tag can be placed on only a single element to make it unique?",
        answers: [
            "id",
            "class",
            "header",
            "p",
        ],
        correctAnswer: 0
    },
    {
        question: "4. Which would you use to add a new item into an array?",
        answers: [
            ".add",
            "++",
            ".insert",
            ".push",
        ],
        correctAnswer: 3
    },
    {
        question: "5. How would you call the following example function in another part of your JavaScript page? function changeColor() { __________}",
        answers: [
            "!changeColor",
            "call.changeColor",
            "changeColor();",
            "../changeColor",
        ],
        correctAnswer: 2
    }
]




function setCounter() {
    timer.textContent = "Time: " + timeCount;
}

function startScreen() {
    h1Elm.textContent = "Ready to test your new Javascript knowledge?"
    pElm.textContent = "This is a five question quiz. For every correct answer you receive one point. For every wrong answer you will lose ten seconds. Let's go!"
    startQuiz.textContent = "Start"
    answerElm.style.display = "none";

}

function gameOver() {
    h1Elm.textContent = "Game Over!";
    pElm.textContent = "Score: " + scoreCount;
    answerElm.style.display = "none";
}


startScreen();

setCounter();

function makeTimer() {
    timerInterval = setInterval(function () {
        timeCount--;
        setCounter();

        if (timeCount === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000)
}

startQuiz.addEventListener("click", function (event) {
    event.preventDefault()
    scoreCount = 0;
    startQuiz.style.display = "none";
    answerElm.style.display = "block";
    pElm.textContent = "";
    makeTimer();
    for (var qAnswer = 0; qAnswer < 4; qAnswer++) {
        var newAnswerBtn = document.getElementById("answer-" + qAnswer);
        newAnswerBtn.addEventListener("click", function (answersEvent) {
            var chosenAns = Number(this.id.substr(7));
            var correctAns = QuizQuestions[qNum].correctAns;


            var result = chosenAns === correctAns;
     
            if (result) {
                scoreCount++;
                qResult.textContent = "Correct!";
            }
        
            else {
                timeCount = timeCount - 10;
                notify.textContent = "Incorrect";
            }
       
            var questionsLeft = qNum < QuizQuestions.length - 1;
            if (questionsLeft) {
                activate(qNum + 1);
            }
            else {
                gameOver();
                clearInterval(timerInterval);
            }
        });
    }
    activate(0);
});

function activate(newQ) {
    h1Elm.textContent = QuizQuestions[newQ].question;


    var answerQty = QuizQuestions[newQ].answers.length;


    for (var qAnswer = 0; qAnswer < answerQty; qAnswer++) {
        var newAnswerBtn = document.getElementById("answer-" + qAnswer);
        newAnswerBtn.textContent = QuizQuestions[newQ].answers[qAnswer];
    }
    qNum = newQ;
}

