var startButton = document.getElementById("start-button");
var timerE1 = document.getElementById("timer");
var questionContainer = document.getElementById("question-container");
var secondsLeft = 100;
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var correct = 0;
var questionNumber = -1;
var done = false;
var questionTitle = document.getElementById("question");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var answerPlaceHolder = document.getElementById("answerPlaceHolder");
var questions = [
  {
    question: "what is 2+2",
    a: "4",
    b: "6",
    c: "8",
    d: "44",
    answer: "4",
  },
  {
    question: "what is 1+1",
    a: "3",
    b: "2",
    c: "6",
    d: "44",
    answer: "2",
  },
];
function loadQuestion() {
  questionNumber++;
  if (questionNumber >= questions.length) {
    alert("Questions are done!"); // add fun for finish screen with screen to add initials and store the score var 
    done = true;
  } else {
    questionTitle.textContent = questions[questionNumber].question;
    answerPlaceHolder.textContent = "";
    button1.textContent = questions[questionNumber].a;
    button2.textContent = questions[questionNumber].b;
    button3.textContent = questions[questionNumber].c;
    button4.textContent = questions[questionNumber].d;

    button1.addEventListener(
      "click",
      isAnswerCorrect(
        button1.textContent,
        questions[questionNumber].answer,
        answerPlaceHolder
      )
    );
    button2.addEventListener(
      "click",
      isAnswerCorrect(
        button2.textContent,
        questions[questionNumber].answer,
        answerPlaceHolder
      )
    );
    button3.addEventListener(
      "click",
      isAnswerCorrect(
        button3.textContent,
        questions[questionNumber].answer,
        answerPlaceHolder
      )
    );
    button4.addEventListener(
      "click",
      isAnswerCorrect(
        button4.textContent,
        questions[questionNumber].answer,
        answerPlaceHolder
      )
    );
  }
}


function isAnswerCorrect(selection, correctAnswer, answerPlaceHolder) {
  return function () {
    if (done) {
      return;
    }
    if (selection !== correctAnswer) {
      answerPlaceHolder.textContent = "Wrong Answer";
      secondsLeft -= 10
    } else {
      answerPlaceHolder.textContent = "Correct!";
      loadQuestion();
    }
  };
}

function startGame() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hidden");
  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timerE1.textContent = secondsLeft + " Seconds Left Till Quiz Is Over";
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  setTime();
  loadQuestion();
}

startButton.addEventListener("click", startGame);
