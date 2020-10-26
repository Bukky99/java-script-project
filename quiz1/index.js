function buildQuiz(
  myQuestionsAndAnswers,
  quizContainer,
  resultsContainer,
  submitButton
) {
  const output = [];
  for (let i = 0; i < myQuestionsAndAnswers.length; i++) {
    const answers = [];

    for (letter in myQuestionsAndAnswers[i].answers) {
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value = "' +
          letter +
          '">' +
          myQuestionsAndAnswers[i].answers[letter] +
          "</label>"
      );
    }

    output.push(
      '<div class = "question">' +
        myQuestionsAndAnswers[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join(" ") +
        "</div>"
    );
  }
  quizContainer.innerHTML = output.join(" ");
}

function showResults(myQuestionsAndAnswers, quizContainer, resultsContainer) {
  let answerContainers = quizContainer.querySelectorAll(".answers");
  let userAnswer = " ";
  let numCorrect = 0;
  for (var i = 0; i < myQuestionsAndAnswers.length; i++) {
    const userAnswer = (
      answerContainers[i].querySelector(
        "input[name=question" + i + "]:checked"
      ) || {}
    ).value;

    /*console.log(
      myQuestionsAndAnswers[i].answers[userAnswer],
      myQuestionsAndAnswers[i].correctAnswer
    );*/

    if (
      myQuestionsAndAnswers[i].answers[userAnswer] ===
      myQuestionsAndAnswers[i].correctAnswer
    ) {
      numCorrect++;
      answerContainers[i].style.color = "green";
    } else {
      answerContainers[i].style.color = "red";
    }
  }

  resultsContainer.innerHTML =
    numCorrect + " out of " + myQuestionsAndAnswers.length;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestionsAndAnswers = [
  {
    question: "When is Beyonces birthday?",
    answers: ["May 24th", "September 4th", "December 23rd"],
    correctAnswer: "September 4th",
  },
  {
    question: "What programming language allows you to style a webpage?",
    answers: ["Css", "Python", "C++"],
    correctAnswer: "Css",
  },
  {
    question: "What is biggest event thats happend in 2020?",
    answers: ["Olympics", "World War 3", "Lockdown"],
    correctAnswer: "Lockdown",
  },
];

buildQuiz(myQuestionsAndAnswers, quizContainer, resultsContainer, submitButton);

submitButton.onclick = function () {
  showResults(myQuestionsAndAnswers, quizContainer, resultsContainer);
};
