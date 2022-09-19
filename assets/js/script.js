const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const highscoreButton = document.getElementById("high-btn");
const menu = document.getElementById("menu-container");
const questionContainer = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer-btn");
const scorePoints = document.getElementById("score-points");
const timePoints = document.getElementById("time-points");
const correctIncorrect = document.getElementById('right-wrong')
const startingTime = 1.5;
let time = startingTime * 60;

let mixedQuestions;
let currentQuestionIndex;

setInterval(setTimer, 1000)

startButton.addEventListener("click", startQuiz, setTimer);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuewstion();
  setTimer();
});
highscoreButton.addEventListener("click", highScores());

function startQuiz() {
  startButton.classList.add("hide");
  mixedQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  timePoints.classList.remove("hide");
  menu.classList.remove("hide");
  nextQuewstion();
}

function endQuiz() {}

function highScores() {}

function setTimer(correct) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  timePoints.innerHTML = `${minutes}:${seconds}`;
  time--;
if (time < 0) {
    //   endQuiz()
}

}

function nextQuewstion() {
  resetState();
  showQuestion(mixedQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      correctIncorrect.classList.remove('hide')
    }
    button.addEventListener("click", selectAnswer);
    answerEl.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
  }
}

function selectAnswer(e) {
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (mixedQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Replay";
    startButton.classList.remove("hide");
    highscoreButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyperlinks Text Mark Language", correct: false },
      { text: "Hyper Tag Marking Language", correct: false },
      { text: "I'm not Sure", correct: false },
    ],
  },

  {
    question: "Which of the following is a HTML Tag keyword?",
    answers: [
      { text: "Image", correct: false },
      { text: "CSS", correct: false },
      { text: "Bold", correct: false },
      { text: "Header", correct: false },
    ],
  },
  {
    question: "what does CSS stand for:",
    answers: [
      { text: "Computing Style Sheet", correct: false },
      { text: "Creative Style System", correct: false },
      { text: "Cascading Style Sheet", correct: true },
      { text: "Creative Styling Sheet", correct: false },
    ],
  },
  {
    question: "What is a web browser?",
    answers: [
      { text: "Something in my dashboard", correct: false },
      { text: "Used to make web pages", correct: false },
      {
        text: "Software application for retrieving and presenting information on the web",
        correct: true,
      },
    ],
  },
  {
    question: "HTML provides 5 heading tags h1 to h5",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Choose the correct HTML tag for the largest heading",
    answers: [
      { text: "H5", correct: false },
      { text: "H2", correct: false },
      { text: "H4", correct: false },
      { text: "H1", correct: true },
    ],
  },
  {
    question: "What does FTP stand for?",
    answers: [
      { text: "Files To Put online", correct: false },
      { text: "Files to Paint", correct: false },
      { text: "File Transfer Protocol", correct: true },
      { text: "File Transfer Please", correct: false },
    ],
  },
  {
    question: "Alpha in RGB extension named RGBA, defines",
    answers: [
      { text: "Hue", correct: false },
      { text: "Opacity", correct: true },
      { text: "Saturation", correct: false },
      { text: "Lightness", correct: false },
    ],
  },
  {
    question:
      "Which attribute tells the browser where to go when a hyperlink is clicked?",
    answers: [
      { text: "Src", correct: false },
      { text: "Url", correct: false },
      { text: "Href", correct: true },
      { text: "Link", correct: false },
    ],
  },
  {
    question:
      "In CSS, how would you select all of the paragraphs (p tags) on a page?",
    answers: [
      { text: "<p> { }", correct: false },
      { text: "#p { }", correct: false },
      { text: "P { }", correct: false },
      { text: ".p { }", correct: true },
    ],
  },
];
