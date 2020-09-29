//populate() adds the choices to each question
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show questions
        const element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    

        //show choices
        const choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];

            //detects if user clicked on a correct answer
            guess("btn" + i, choices[i]);

        }
        showProgress();
    }
};

function guess (id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
};

function showScores() {
    let gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id = 'score'> Your scores:" + quiz.score + "</h2>"
        let element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml;
};

// contains the 3 parameters: text, choices, answers from the Question constructor function
const questions = [
    new Question ("When is Beyonces birthday?", ["May 24th", "September 4th", "December 23rd", "February 14th"], "September 4th"),
    new Question ("What language allows you to style a webpage?", ["Css", "Python", "C++", "Spanish"], "Css"),
    new Question ("When is the biggest event that has happened in 2020 so far?", ["Olympics", "World War 3", "Lockdown", "Zombie Apocalypse"], "Lockdown")
    
];


//object for quiz control function(Quiz)
const quiz =new Quiz(questions); //sends the questions to the Quiz

populate();