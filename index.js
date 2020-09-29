function buildQuiz(questions, quizContainer, resultsContainer, submitButton) {

    //nested function known as a helper function: a function within a function
    
    //function to allow our questions to show up 
    function showQuestions(questions, quizContainer) {

        //stores chosen answer and correct answers in an empty array
        let output = [];
        let answers; //just stores answers as a variable

        // function loops through each question until the end of the questions
        for(let i = 0; i < questions.length; i++){

            //answers stored in empty array
            answers = [];

            //'in' operator returns true if answer selected is correct
            for(letter in questions[i].length){

                //answer then pushed into array. html radio/optional button added 
                answers.push(
                    '< label >' // '' tags creates html tags in javascript. JS makes the string and puts in the html (innerhtml)
                        + '< input type = "radio" name = "question'+ i +'" value = "'+ letter +'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    +'</label>'
                );
            }

            //adds current question and its chosen answer to output
            output.push(
                '< div class = "question">' + questions[i].question + '</div>'
                + '< div class="answers">' + answers.join('') + '</div>'
            );
        }

        //outputs the whole quiz plus the embedded html from js to the html file
        quizContainer.innerHTML = output.join(' '); 


        //document.querySelector('quiz').append(quizContainer)

        

        //This is the end of the showQuestions Funtion
    };
    
    const questions = getElementById("quiz");
    
    showQuestions(questions, quizContainer); // calling the funciton
    

    function showResults(questions, quizContainer, resultsContainer) {

        //gets the answer container from quiz
        let answerContainers = quizContainer.querySelectorAll('.answers');

        //stores user's answers
        let userAnswer = '';
        let numCorrect = 0;

        for(var i = 0; i < question.length; i++) {

            const userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value; // the two line "||" means OR, which means that either a selected answer will be returned OR an empty array/object

            if(userAnswer === questions[i].correctAnswer){

                numCorrect++; //increment this by 1
                

                answerContainers[i].style.color = 'red'; //both quiz and answer will go red
            }

            else{

                answerContainers[i].style.color = 'red'; //if answer not correct or left blank
            };
        };

        resultsContainer.innerHTML = numCorrect + 'out of ' + questions.length;

        //This is the end of the showResults Function
    };

    //when user clicks button, answers will show
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    };


    // this is the end of the buildQuiz function
};


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

    const myQuestions = [ 
        {
            question: "When is Beyonces birthday?",
            answers: {
                a: 'May 24th',
                b: 'September 4th',
                c: 'December 23rd',
            },
            correctAnswer: 'b'
        },
        {
            question: "What programming language allows you to style a webpage?",
            answers: {
                a: 'Css',
                b: 'Python',
                c: 'C++'
            },
            correctAnswer: 'a' 
        },
        {
            question: "What is biggest event thats happend in 2020?",
            answers: {
                a: 'Olympics',
                b: 'World War 3',
                c: 'Lockdown'
            },
            correctAnswer: 'c'
        }
    ];


 buildQuiz(myQuestions, quizContainer, resultsContainer, submitButton);