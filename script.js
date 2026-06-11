const questions = [
{
question: "What does HTML stand for?",
answers: [
{text:"Hyper Text Markup Language", correct:true},
{text:"High Text Machine Language", correct:false},
{text:"Hyper Transfer Markup Language", correct:false},
{text:"Home Tool Markup Language", correct:false}
]
},
{
question: "Which language is used for styling web pages?",
answers: [
{text:"HTML", correct:false},
{text:"CSS", correct:true},
{text:"Python", correct:false},
{text:"Java", correct:false}
]
},
{
question: "Which language is used for webpage interactivity?",
answers: [
{text:"JavaScript", correct:true},
{text:"CSS", correct:false},
{text:"C++", correct:false},
{text:"SQL", correct:false}
]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
showQuestion();
}

function showQuestion(){
resetState();

let currentQuestion = questions[currentQuestionIndex];
questionElement.innerText = currentQuestion.question;

currentQuestion.answers.forEach(answer=>{
const button = document.createElement("button");
button.innerText = answer.text;
button.classList.add("btn");
button.addEventListener("click", ()=>selectAnswer(button, answer.correct));
answerButtons.appendChild(button);
});
}

function resetState(){
nextButton.style.display="none";
answerButtons.innerHTML="";
}

function selectAnswer(button, correct){
if(correct){
button.classList.add("correct");
score++;
}
else{
button.classList.add("wrong");
}

Array.from(answerButtons.children).forEach(btn=>{
btn.disabled=true;
});

nextButton.style.display="block";
}

nextButton.addEventListener("click", ()=>{
currentQuestionIndex++;

if(currentQuestionIndex < questions.length){
showQuestion();
}
else{
questionElement.innerText="Quiz Completed!";
answerButtons.innerHTML="";
nextButton.style.display="none";
scoreDisplay.innerText=`Your Score: ${score}/${questions.length}`;
}
});

startQuiz();