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
        title:"What is 3 * 8",
        choices:["a 24", "b 10", "c 15", "d 20"],
        answer:"a"
    },
    {
        title:"What is a dog",
        choices:["a fish", "b sky", "c lake", "d food"],
        answer:"b"
    },
    {
        title:"What is 10 * 100",
        choices:["a 1000", "b 200", "c 30", "d 45"],
        answer:"a"
    },
    {
        title:"what color is the sky",
        choices:["a purple", "b green", "c black", "d blue"],
        answer:"d"
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