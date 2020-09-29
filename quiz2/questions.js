//a constructor function has to start with captital letter
//this. is the bject that owns that code, 'question' owns 'question'
//line 5-7 adds stores parameters(from the function) into variables within constructor function
function Question(text, choices, answer) {
    this.text = text; //array called 'text' contains the questions 
    this.choices = choices;
    this.answer = answer;
}

//instead of adding this function into the constructor function(Questions), you use .property to add new properties to the Question function 
//this new function is one where a choice is received
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer //'choice' function checks if the users answer is the same as the correct answer. if it is, choice function is executed 
}