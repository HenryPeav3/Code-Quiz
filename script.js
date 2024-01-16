var startQuiz = document.querySelector(".start-quiz");
var startEl = document.querySelector(".start");
var timeEl = document.querySelector(".timer");
// var choicesEl = document.querySelector('#choices');
var submitEl = document.querySelector(".submit");
var choicesEl = document.getElementById("choices");
var choicesEmpty;
var titleQ = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var startBtn = document.getElementById("start");
let count = 100;
let countdownTime = 100;

console.log(countdownTime);

let countdownInterval = setInterval(() => {
  countdownTime--;

  console.log(countdownTime);

  if (countdownTime === 0) {
    clearInterval(countdownInterval);
    console.log("Countdown finished!");
  }
}, 100);
timeEl.textContent = "Time Remaining:" + count;
var questions = [
  {
    title: "What is 3 * 8",
    choices: ["a 24", "b 10", "c 15", "d 20"],
    answer: "a 24",
  },
  {
    title: "What is a dog",
    choices: ["a fish", "b animal", "c lake", "d food"],
    answer: "b animal",
  },
  {
    title: "What is 10 * 100",
    choices: ["a 1000", "b 200", "c 30", "d 45"],
    answer: "a 1000",
  },
  {
    title: "what color is the sky",
    choices: ["a purple", "b green", "c black", "d blue"],
    answer: "d blue",
  },
];

//
var score = 0;
// increaseScore
function increaseScore(value) {
  score = score + value;
}
// resetScore
function resetScore() {
  score = 0;
}
/*submitEl.addEventListener("dbClick", () => {
  resetScore();
});
//*/

var highScores = JSON.parse(localStorage.getItem("scores"));
if (highScores === null) highScores = [];

// choicesEl.addEventListener('click', function(){
//     if (index<3){
//         index ++

//     }
// })

var index;
choicesEl.addEventListener("click", function (event) {
  //   increase score when correct answer clicked
  var selectedAnswer = event.srcElement.innerText;
  console.log(selectedAnswer);
  // how do i get the selected answer from the event, if not how else?
  var correctAnswer = questions[index].answer; // get current question from the quiz, select the answer property
  var correct = selectedAnswer == correctAnswer;
  console.log(correctAnswer); // selected answer is the correct answer for the currently selected question
  if (correct) {
    increaseScore(25);
  }

  if (index < 3) {
    index++;
    event.preventDefault();
    showQuestions();
  }
});
function showQuestions() {
  console.log("index: " + index);
  if (index == undefined) {
    index = 0;
  }
  if (index == 0) {
    console.log("set empty choices");
    choicesEmpty == choicesEl;
  }
  titleQ.textContent = "";
  startBtn.hidden = true;

  var currentQ = questions[index];
  titleQ.textContent = currentQ.title;
  //if (index > 0) {
  //choicesEl.removeChild();
  // }
  for (var i = 0; i < questions[index].choices.length; i++) {
    console.log(questions[index].choices[i]);
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = questions[index].choices[i];
    choicesEl.append(choiceBtn);
  }
  // currentQ.choices.forEach(function(choice,i){
  //     var choiceBtn = document.createElement("button")
  //     choiceBtn.setAttribute("class", "choice")
  //     choiceBtn.textContent = i+1+" " + choice
  //     choicesEl.append(choiceBtn)
  // })
}
//showQuestions();
function verify() {
  if (this.value !== questions[index].answer) {
    count -= 10;
  }
  index++;
  if (index === questions.length) {
    quizOver();
  } else {
    showQuestions();
  }
}

function time() {
  count--;
  timeEl.textContent = "Time Remaining: " + count;
  if (count <= 0) {
    quizOver();
  }
}
function quizOver() {
  titleQ.textContent = "";
}
