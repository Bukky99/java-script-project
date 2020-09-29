//import { myQuestions } from './quizQuestions.js';

/*
let storeQuiz = document.getElementById('quiz');
let storeResults = document.getElementById('results');
let submitButton = document.getElementById('submit');

function buildQuiz (questions, storeQuiz, storeResults, submitButton) {

    function showQuestions(questions, storeQuiz){

        //stores the output of the answer choice
        let output = [];
        let results;

        //for each question up until the max number of questions
        for(let i=0; i<questions.length; i++){

            restuls = [];

            for(letter in questions[i].answers){
              
                //radio button is an optional button
                ansers.push(
                    '<label'
                    + '<input type="radio" name="question'+i+'"value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label'
                );

            }

            //adds the current question and its associated answer to the output 
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
    }

    storeQuiz.innerHTML = output.join('');

    function showResults (questions, storeQuiz, storeResults){

        //gets answers from quiz
        let storeResults = storeQuiz.querySelectorAll('.answers');

        // tracks users answers
        let userAnswer = '';
        //number of correct answers
        let numCorrect = 0

        // for each question
        for (let i=0; i<questions.length; i++){

             //finds the selected answer
            userAnswer = (storeResults[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            //if answer is correct
            if(userAnswer===questions[i].correctAnswer) {

                //adds to the number of correct answers
                numCorrect++;

                //correct answer goes green
                storeQuiz[i].style.color = 'lightgreen';
            }

            //if answer is black or incorrect
            else{
                // colors it red
                storeQuiz[i].style.color = 'red';
            }

        }

        storeResults.innerHTML = numCorrect + '= out of ' + questions.length;
    }



    //shows the question in the quiz container
    showQuestions(questions, storeQuiz);

    // when user clicks submit button, reuslts show
    submitButton.onlick = function(){
        showResults(questions, storeQuiz, storeResults);
    }
}
     

let myQuestions = [ 
    {
    question: 'When is Beyonces birthday?',
    answers: {
        a: 'May 24th',
        b: 'September 4th',
        c: 'December 23rd',
    },
    correctAnswer: 'b'
    },
    {
    question: 'What programming language allows you to style a webpage?',
    answers: {
        a: 'Css',
        b: 'Python',
        c: 'C++'
    },
    correctAnswer: 'a' 
    },
    {
    question: 'What is biggest event thats happend in 2020?',
    answers: {
        a: 'Olympics',
        b: 'World War 3',
        c: 'Lockdown'
    },
    correctAnswer: 'c'
}

]

showQuestions(questions, storeQuiz);

buildQuiz(myQuestions, storeQuiz, storeResults, submitButton);
}

*/