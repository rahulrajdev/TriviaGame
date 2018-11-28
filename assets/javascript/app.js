//Declaring entire game as an object with each questions as sub-objects
var game = {
    q1: {
        question: "Which player scored the most points in a single game?", 
        options: ["Kobe Bryant", "LeBron James", "Michael Jordan", "Wilt Chamberlain"],
        answer: "Wilt Chamberlain",
        correctMessage: "Yep! Wilt scored 100 in one game!",
        wrongMessage: "Nope! It was Wilt with 100!",
        unansweredMessage: "It's Wilt Chamberlain with 100 points!",
        gif: '<iframe src="https://giphy.com/embed/orjr6OEwbbRV6" frameBorder="0" class="giphy-embed" allowFullScreen class="gifclass"></iframe>'
    },

    q2: {
        question: "Which player has the most career assists?",
        options: ["John Stockton","Magic Johnson", "Karl Malone", "Mark Jackson"],
        answer: "John Stockton",
        correctMessage: "Yep it was John Stockton with 15,806 assists!",
        wrongMessage: "Nope! It was John Stockton with 15,806 assists!",
        unansweredMessage: "It was John Stockton with 15,806 assists!",
        gif: '<iframe src="https://giphy.com/embed/ZWVLbmDFOcRby" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen ></iframe>'
    },

    q3: {
        question: "Which team has the most NBA Finals appearances?",
        options: ["Boston Celtics", "Minneapolis/Los Angeles Lakers", "Philadephia 76ers", "Golden State Warriors"],
        answer: "Minneapolis/Los Angeles Lakers",
        correctMessage: "Correct! The Minneapolis/Los Angeles Lakers have made the NBA Finals 31 times!",
        wrongMessage: "Nope! It was the Lakers with 31!",
        unansweredMessage: "It was the Lakers with 31!",
        gif: '<iframe src="https://giphy.com/embed/P7Ki0jpjGW37i" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen ></iframe>'
    },

    q4: {
        question: "Who was the #1 draft pick in the 2003 NBA Draft?",
        options: ["Allen Iverson", "LeBron James", "Dwayne Wade", "Carmelo Anthony"],
        answer: "LeBron James",
        correctMessage: "Yep! LeBron was the #1 pick and went on to win Rookie Of The Year!",
        wrongMessage: "Nope! It was LeBron James!",
        unansweredMessage: "It was LeBron James!",
        gif: '<iframe src="https://giphy.com/embed/3wqMxx4VAkByM" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>'
    }, 

    q5: {
        question: "Who has the most career points?",
        options: ["Michael Jordan", "Karl Malone", "Kobe Bryant", "Kareem Abdul-Jabbar"],
        answer: "Kareem Abdul-Jabbar", 
        correctMessage: "Yep! It's Kareem with 38,387 points!",
        wrongMessage: "Nope, sorry it's Kareem with 38,387 points!",
        unansweredMessage: "It's Kareem with 38,387 points!",
        gif: '<iframe src="https://giphy.com/embed/k481R5ERN7jJm" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>'
    },

    q6: {
        question: "Who has the most NBA Finals MVPs?",
        options: ["Tim Duncan", "Michael Jordan", "LeBron James", "Stephen Curry"],
        answer: "Michael Jordan", 
        correctMessage: "Yep! It's Michael Jordan with 6!",
        wrongMessage: "Nope! It's Michael Jordan with 6!",
        unansweredMessage: "It's Michael Jordan with 6!",
        gif: '<iframe src="https://giphy.com/embed/uxTYtxv3Ezryg" frameBorder="0" class="giphy-embed" class = "gifclass" allowFullScreen></iframe>'
    },

    q7: {
        question: "Which NBA player most recently averaged a triple-double for the entire regular season?",
        options: ["Russell Westbrook", "Oscar Roberston", "Ben Simmons", "Kevin Love"],
        answer: "Russell Westbrook",
        correctMessage: "Yep, it was Russell Westbrook!",
        wrongMessage: "Nope, sorry! It was Russell Westbrook!",
        unansweredMessage: "It was Russell Westbrook!",
        gif: '<iframe src="https://giphy.com/embed/3o6fJ8M1GNLzyXW7Be" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>'
    },
    
    q8: {
        question: "How many championships has LeBron James won?",
        options: ["1","2","3","4"],
        answer: "3",
        correctMessage: "Yep! 3 it is!",
        wrongMessage: "Nope, sorry! It was 3!",
        unansweredMessage: "It's 3!",
        gif: '<iframe src="https://giphy.com/embed/mJBtZUG7kSGpI3fKX1" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>'
    },

    q9: {
        question: "Who has won the most NBA Championships as a coach?",
        options: ["Pat Riley", "Gregg Popovich", "Phil Jackson", "Red Auerbach"],
        answer: "Phil Jackson",
        correctMessage: "Correct! Phil Jackson has 11 rings!",
        wrongMessage: "Nope! It is Phil Jackson with 11!",
        unansweredMessage: "It's Phil Jackson with 11!",
        gif: '<iframe src="https://giphy.com/embed/o9yEYXabWbsM8" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>'
    },
    
    q10: {
        question: "Who has the record for most three pointers made in a game?",
        options: ["Stephen Curry", "Kyle Korver", "Reggie Miller", "Klay Thompson"],
        answer: "Klay Thompson",
        correctMessage: "Correct! Klay recently hit 14 to break the record!",
        wrongMessage: "Nope, it's Klay with 14!",
        unansweredMessage: "It's Klay with 14!",
        gif: '<iframe src="https://giphy.com/embed/3ohze2hnMxkIrzZPyg" frameBorder="0" class="giphy-embed" class="gifclass" allowFullScreen></iframe>'  
    } 
}

// set up array for each question, so program can loop through
var questions = [game.q1, game.q2, game.q3, game.q4, game.q5, game.q6, game.q7, game.q8, game.q9, game.q10];

var questionIndex = 0
var chosenQ;

var timer = 20;
var timerIntervalId;

var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;

var op1Clicked = false;
var op2Clicked = false;
var op3Clicked = false;
var op4Clicked = false;

//function for running the 20 second timer for each question
function runClock () {
    timer--;
    $("#timer").text("Time remaining: " + timer + " seconds");
    if (timer === 1) {
        $("#timer").text("Time remaining: " + timer + " second");
    }
    if (timer === 0) {
        timer = 30;
        $("#timer").text("Time remaining: " + timer + " seconds");
        showAnswer();
    }
}

//populates the question page with the question and answer choices. Also runs when questions are answered, so timer is reset. 
function populateQuestion () {

    clearInterval(timerIntervalId)
    op1Clicked = false;
    op2Clicked = false;
    op3Clicked = false;
    op4Clicked = false;
    $("#answerpage").hide();
    $("#questionpage").show();
    timer = 20;
    timerIntervalId = setInterval(runClock, 1000);
    $("#timer").text("Time remaining: 20 seconds");
    $("#timer").show();    
    chosenQ = questions[questionIndex];
    $("#question").text(chosenQ.question);
    $("#op1").text(chosenQ.options[0]);
    $("#op2").text(chosenQ.options[1]);
    $("#op3").text(chosenQ.options[2]);
    $("#op4").text(chosenQ.options[3]);
    questionIndex++;
}

//populates the answer page with the correct, incorrect and unanswered question responses. Also adds to the count for correct, incorrect and unanswered questions
function populateCorrectAnswer() {
    clearInterval(timerIntervalId);
    $("#timer").hide();
    $("#questionpage").hide();
    $("#answerpage").show();
    $("#result").text(chosenQ.correctMessage);
    $("#gif").html(chosenQ.gif);
    numCorrect++;
    if (questionIndex < 10) {
        setTimeout(populateQuestion, 5000);
    } else {
        setTimeout(calcAndShowAnswerCorrect, 3000);
    }
}

function populateIncorrectAnswer() {
    clearInterval(timerIntervalId);
    $("#timer").hide();
    $("#questionpage").hide();
    $("#answerpage").show();
    $("#result").text(chosenQ.wrongMessage);
    $("#gif").html(chosenQ.gif);
    numWrong++;
    if (questionIndex < 10) {
        setTimeout(populateQuestion, 5000);
    } else {
        setTimeout(calcAndShowAnswerCorrect, 3000);
    }
}

function populateGenericAnswer() {
    clearInterval(timerIntervalId);
    $("#timer").hide();
    $("#questionpage").hide();
    $("#answerpage").show();
    $("#result").text(chosenQ.unansweredMessage);
    $("#gif").html(chosenQ.gif);
    numUnanswered++;
    if (questionIndex < 10) {
        setTimeout(populateQuestion, 5000);
    } else {
        setTimeout(calcAndShowAnswerCorrect, 3000);
    }
}

function showAnswer() {
    if (op1Clicked && $("#op1").text() === chosenQ.answer) {
        populateCorrectAnswer();
    } else if (op2Clicked && $("#op2").text() === chosenQ.answer) {
        populateCorrectAnswer();
    } else if (op3Clicked && $("#op3").text() === chosenQ.answer) {
        populateCorrectAnswer();  
    } else if (op4Clicked && $("#op4").text() === chosenQ.answer) {
        populateCorrectAnswer();
    } else if (op1Clicked && $("#op1").text() !== chosenQ.answer) {
       populateIncorrectAnswer();
    } else if (op2Clicked && $("#op2").text() !== chosenQ.answer) {
        populateIncorrectAnswer();
    } else if (op3Clicked && $("#op3").text() !== chosenQ.answer) {
        populateIncorrectAnswer();
    } else if (op4Clicked && $("#op4").text() !== chosenQ.answer) {
       populateIncorrectAnswer();
    } else {
       populateGenericAnswer();    
    }
}

//calculates users score on the quiz and then populates with the results page with the data
function calcAndShowAnswerCorrect () {
    clearInterval(timerIntervalId);
    $("#timer").hide();
    $("#answerpage").hide();
    $("#resultspage").show();
    if (numCorrect >= 6) {
        $("#message").text("Nice job!");
    } else {
        $("#message").text("Hey no worries! Give it another try!");
    }
    $("#numCorrect").text("Correct Answers: " + numCorrect);
    $("#numWrong").text("Incorrect Answers: " + numWrong);
    $("#unanswered").text("Unanswered: " + numUnanswered);
    $("#restart").on("click", restartGame);
}

//function to restart game when button is pressed
function restartGame() {
    questionIndex = 0
    timer = 20;  
    op1Clicked = false;
    op2Clicked = false;
    op3Clicked = false;
    op4Clicked = false;
    numCorrect = 0;
    numWrong = 0;
    numUnanswered = 0;
    $("#resultspage").hide();
    $("#questionpage").show();
    populateQuestion();
}

//START GAME

$("#questionpage, #answerpage, #resultspage").hide();

$("#start").on("click", function () {
    $("#startpage").hide();
    $("#questionpage").show();
    populateQuestion();  
});

$("#op1").on("click", function () {
    op1Clicked = true;
    showAnswer();
});
$("#op2").on("click", function () {
    op2Clicked = true;
    showAnswer();
});
$("#op3").on("click", function () {
    op3Clicked = true;
    showAnswer();
});
$("#op4").on("click", function () {
    op4Clicked = true;
    showAnswer();
});






