const op1 = document.querySelector(".option1")
const op2 = document.querySelector(".option2")
const op3 = document.querySelector(".option3")
const op4 = document.querySelector(".option4")

const question = document.querySelector(".question")
const questionNumberSpan = document.querySelector(".question-num-value")
const totalQuestionSpan = document.querySelector(".total-question")
let questionIndex ;
let index =0 ;
const options = document.querySelector(".options").children
const answerTrackerContainer = document.getElementById("answers-tracker")
var myArray=[];
let myArr = [];
var score = 0;

const correctAnswerSpan = document.querySelector(".correct-answers") 
const totalQuestionSpan2 = document.querySelector(".total-question2") 
const percentage = document.querySelector(".percentage") 


 
 


 
 


// question and answer
const questions = [
    {
        q:'காட்டில் இறந்த மிருகத்தின் பெயர் என்ன?',
        options:['யானை','பூனை'],
        answer:0
    },
    {
        q:'சிங்கம் ஏன்  இறந்த யானையை சாப்பிடவில்லை ?',
        options:['சிங்கத்திட்கு பசிக்கவில்லை','வேறு மிருகம் வேட்டையாடிய உணவை உண்பதில்லையால்'],
        answer:1
    },  
    {
        q:'ஓநாய் ஏன் யானையை சாப்பிடாமல் ஓடியது ?',
        options:['சிங்கம் வருகிறது என நரி கூறியதால்','ஓநாய்க்கு வயிறு வலி என்பதால்'],
        answer:0
    },  {
        q:'ஓநாயிடம் நரி எத்தனை பொய் கூறியது ?',
        options:['ஒன்று','இரண்டு'],
        answer:1
    }
]
//check the answer
function check(element) {
    if (element.id == questions[questionIndex].answer) {
        element.classList.add("correct")
        updateAnswerTracker("correct")
        score++
    }else{
        element.classList.add("wrong")
        updateAnswerTracker("wrong")
   }
    disableOptions();
}

function disableOptions() {
    let i = 0
    for (let i = 0; i < options.length; i++) {
    options[i].classList.add("disabled")        
    if (options[i].id == questions[questionIndex].answer) {
        options[i].classList.add("correct")
    }  
    }
}

function enableOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled","correct","wrong")
        
    }
}
// set the questions and answwer
totalQuestionSpan.innerHTML=questions.length;

function load() {
    questionNumberSpan.innerHTML=index+1
    question.innerHTML=questions[questionIndex].q
    op1.innerHTML=questions[questionIndex].options[0]
    op2.innerHTML=questions[questionIndex].options[1]
    op3.innerHTML=questions[questionIndex].options[2]
    op4.innerHTML=questions[questionIndex].options[3]
    index++;
}

function validate() {
    if (!options[0].classList.contains("disabled")) {
        alert("Please choose one answer.")
    } else {
        randomQuestion(); 
        enableOptions()
    }
}

function next() {
    validate();
    
}

function randomQuestion() {
    let hitDuplicate = 0
    let randomNumber = Math.floor(Math.random()*questions.length)
    if (index==questions.length ) {
        quizOver()    }
    else{
        if (myArray.length>0) {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i]==randomNumber  ) {
                    hitDuplicate =1
                    break;
                }
            }
            if (hitDuplicate ==1) {
                randomQuestion()
            }
            else{
                questionIndex=randomNumber
                load();
                myArr.push(questionIndex)
                }
            }
            if (myArray.length==0) {
                questionIndex=randomNumber
                load();
                myArr.push(questionIndex)
            }
            
            myArray.push(randomNumber)
        }
    }
function answersTracker() {
    var i;
    for (let i = 0; i < questions.length; i++) {
        const div = document.createElement("div");
        answerTrackerContainer.appendChild(div);
    }
}

function updateAnswerTracker(classNam) {
    answerTrackerContainer.children[index-1].classList.add(classNam)
}

function quizOver() {
     document.querySelector(".quiz-over").classList.add("show")
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%"
    

}

function tryAgain() {
    window.location.reload();
}

window.onload = function () {
    randomQuestion();
    answersTracker();}
