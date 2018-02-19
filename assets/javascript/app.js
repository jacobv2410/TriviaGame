// Define variables
$(document).ready(function(){
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// Questions and Answer Arrays
    var question = ['"The Mountain" is the nickname for which character?',
    "Who is Lord commander of the kings guard at the beginning of Game of thrones?", "Who was Marrgaery Tyrell's first husband?", "Who is known as the 'king beyond the wall'?", "How many times has Sansa stark been married?",
    "Who is the ruler of the iron islands at the beginning of game of thrones? ", "Who was the Mad King's firstborn son?", "Who delivered the fatal blow to the king-in-the-north, Robb Stark?", "What is the name of the girl that has gray-scale and was healed from it?", 
    "What is the name of the wildling that Jon Snow was in love with?"];
    var answer = ["Gregor Clegane", "Ser Barristan Selmy", "Renly Baratheon", "Mance Rayder", "Two", "Balon Greyjoy", "Rhaegar Targarian", "Roose Bolton", "Shireen Baratheon", "Ygritte"];
    var firstChoice = ["Gregor Clegane", "Tyrion Lannister", "Rob Stark", "Roose Bolton", "Two", "Theon Greyjoy", "Viserys Targarian", "Roose Bolton", "Tyene Sand", "Karsi"];
    var secondChoice = ["Rob Stark", "Jaime Lannister", "King Joffrey Baratheon", "Alliser Thorne", "Four", "Grey Worm", "Trystane Martell", "Theon Greyjoy", "Shireen Baratheon", "Osha"];
    var thirdChoice = ["Robert Baratheon", "Ser Barristan Selmy", "Tommen Baratheon", "Mance Rayder", "Three", "Oberyn Martell", "Rhaegar Targarian", "Littlefinger", "Septa Unella", "Gilly"];
    var fourthChoice = ["Brienne of Tarth", "Jorah Mormont", "Renly Baratheon", "Tormund Giantsbane", "One", "Balon Greyjoy", "Tycho Nestoris", "Walder Frey", "Gilly", "Ygritte"];

// Show & Hide Functions
    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    
    }
    
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

// Check Answer Function
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

// Chekc End Game Function
    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

// Display Images With Answer
    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/clegane.jpeg">');
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/kingsGuard.jpg">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/renly.jpeg">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/mance_rayder.jpeg">');
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/sansa.jpeg">');
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/balon.jpeg">');
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/rhaegar.jpeg">');
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/roose.jpeg">');
        }
        else if(count === 8) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/shireen-baratheon.jpg">');
        }
        else if(count === 9) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/ygritte.jpeg">');
        }
    }

 // Show Results Function   
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Star above to play again!");
    }

// Reset Results Function 
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

// Start Game Function
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

// Start Game On Click
  $(".start").on("click", function() {
    startGame();
  });
});