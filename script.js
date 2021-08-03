var startQuiz = document.querySelector('.start-quiz');
var startEl = document.querySelector('start');
var timeEl = document.querySelector('.time');

var count = 100;
timeEl.textContent = 'Time Remaining:' + count;

var highScores = JSON.parse(localStorage.getItem("scores"));
if(highScores === null) highScores = [];
startEl.addEventListener('click', function() {
    count--
    timeEl.textContent = 'Time Remaining:' + count;
    if (count <=0) {
        qizeOver();
    }
})
var questions = [
    {
        title:"question 1",
        choices:["a", "b", "c", "d"],
        answer:"a"
    },
    {
        title:"question 2",
        choices:["a", "b", "c", "d"],
        answer:"a"
    },
    {
        title:"question 3",
        choices:["a", "b", "c", "d"],
        answer:"a"
    },
    {
        title:"question 4",
        choices:["a", "b", "c", "d"],
        answer:"a"
    },
]
var index = 0
function questions (){
    var currentQ = questions [index]
    var titleQ = document.getElementById("questions")
    titleQ.textContent = currentQ.title
    currentQ.choices.forEach(function(choice,i){
        var choiceBtn = document.createElement("button")
    })
}