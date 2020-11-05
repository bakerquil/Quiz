var startButton = document.getElementById("start-button");
var timerE1 = document.getElementById("timer");
var questionContainer = document.getElementById("question-container");
var secondsLeft = 100;
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var correct = 0;

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

function pushQuestions() {
  var questionTitle = document.getElementById("question");
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var button4 = document.getElementById("button4");
  var answerPlaceHolder = document.getElementById("answerPlaceHolder");
  for (let i = 0; i < questions.length; i++) {
    let counter = 0;

    questionTitle.textContent =questions[i].question;
    button1.textContent =questions[i].a;
    button2.textContent =questions[i].b;
    button3.textContent =questions[i].c;
    button4.textContent =questions[i].d;
    button1.addEventListener(
      "click",
      isAnswerCorrect(button1.textContent, questions[i].answer, answerPlaceHolder, counter)
    );
    button2.addEventListener(
      "click",
      isAnswerCorrect(button2.textContent, questions[i].answer, answerPlaceHolder, counter)
    );
    button3.addEventListener(
      "click",
      isAnswerCorrect(button3.textContent, questions[i].answer, answerPlaceHolder, counter)
    );
    button4.addEventListener(
      "click",
      isAnswerCorrect(button4.textContent, questions[i].answer, answerPlaceHolder, counter)
    );
    function waitForIt(){
        if (counter !== 10){
            setTimeout(waitForIt, 2000);
        }
    }
   setTimeout(5000)
    
    }
}


function isAnswerCorrect(selection, correctAnswer, answerPlaceHolder, counter) {
  return function () {
    if (selection !== correctAnswer) {
      counter--;
      answerPlaceHolder.textContent = "Wrong Answer";
    } else {
      answerPlaceHolder.textContent = "Correct!";
      counter = 10;
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
  pushQuestions();
}

startButton.addEventListener("click", startGame);
