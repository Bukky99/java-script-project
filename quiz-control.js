// contains the users score and the question number

//constructor function
function Quiz(questions) {
    this.score = 0; //score of quiz
    this.questions = questions;
    this.questionIndex = 0; //question number
}

//function to check if current answer equals selected answer
//getQuestionIndex is the function name
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

//function to check if quiz has ended
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex; //if the current question number is the same as the total number of questions, quiz finishs
}

//function to check if the answer is correct or not
Quiz.prototype.guess = function(answer) {
    //this.questionIndex++; //goes onto the next question even if wrong answer is selected or not

    //if the current question is correct, the score will add one to it
    if(this.getQuestionIndex (). correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}