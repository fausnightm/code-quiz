document.addEventListener('DOMContentLoaded', (event) => {

    // established initial variables

    var timeStart = 75;
    var time = 75;
    var score = 0;
    var questionCount = 0;
    var timeset;
    var answers = document.querySelectorAll ('quiz-container button');


// sets parsed scores into a variable if there is nothing in local storage it returns and empty array
    var highScores = JSON.parse(localStorage.getItem('scores')) || [];

    var queryElement = (element) => {
		return document.querySelector(element);
	}

    var displaySection = (element) => {
        var sections = document.querySelectorAll('section');
        Array.from(sections).forEach((userItem) =>{
            userItem.classList.add('hide');
        })
        
        queryElement(element).classList.remove('hide');
    }

   
});

// code quiz title with start button

// click event on start button starts timer and presents the first question
// variables to store quiz questions
// for look loop to cylcle through quiz questions
// key press events to recieve user input
// create a time limit for the game using time functions
// conditional statesments for wrong/right answers
// clientside storage for high scores