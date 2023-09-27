var quizQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition in an if/else statement is enclosed within",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "Arrays in JavaScript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "qoutes", "parentheses"],
        answer: "parentheses"
    },

    {
        title: "A very useful tool during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
];
var currentQuestionIndex =

function displayQuestion(index){
 var title = document.createElement("h1");
 title.textContent = quizQuestions[index].title;
 document.getElementById("container").append(title);

 for (let i = 0; i < quizQuestions[index].choices.length; i++) {
    var button = document.createElement("button");
    button.textContent = quizQuestions[index].choices[i]
    button.addEventListener("click", function () {
     displayQuestion()   
    })
    document.getElementById("container").append(button)
  }


}

displayQuestion(1)