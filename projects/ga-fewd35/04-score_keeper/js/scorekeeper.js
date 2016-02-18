/*
    Here are the steps you should take:

    Step 1: Add a link to your own custom JS file before the closing body tag.

    Step 2: Bind click events to the +5 and -5 point buttons and change the
    innerHTML of the score display appropriately.

    Step 3: Bind a click event to the set score button and set the innerHTML of
    the score display to the score entered in the text box. You will need to use
    the parseInt function in JS to make this work.

    Bonus: Create a check in your code to make sure the score will not go
    negative.

    Super Bonus: Create a function to make the changes to the score display
    rather than having to write your logic over and over.

*/

// Start at zero points.
//
var currentScore = 0;

var scoreBoard = document.querySelector("#score");
var placeholder = document.getElementById("custom-score");

// Click event to increase score.
//
document.querySelector("#increase-5")
    .addEventListener(
    "click",
    function() { changeScore(5); }
);

// Click event to decrease score.
//
document.querySelector("#decrease-5")
    .addEventListener(
    "click",
    function() { changeScore(-5); }
);

// Click event to set custom score.
//
document.querySelector("#submit-custom-score")
    .addEventListener("click", submitScore);

function changeScore(score) {

    setScore(currentScore + score);
}

function submitScore() {

    // Get value of custom score.
    //
    var customScore = placeholder.value;

    // Parse string for a number.
    //
    var intScore = parseInt(customScore, 10);

    setScore(intScore);
}

function setScore(newScore) {

    if (validScore(newScore)) {

        // "innerText" not supported by Firefox.
        // document.querySelector("#score").innerText = newScore + " Points";
        // innerHTML works!

        scoreBoard.textContent = newScore + " Points";

        updateScore(newScore);

    } else {

        alert("Invalid score: " + newScore);
    }

    resetPlaceholderText();
}

function validScore(num) {

    // Valid score is greater than or equal to zero (and not null, alpha, etc.).
    //
    if (num >= 0) {

        return true;
    }

    return false;
}

function updateScore(newScore) {

    currentScore = newScore;
}

function resetPlaceholderText() {

    // Reset the placeholder text (Extra-Super Bonus).
    //
    placeholder.value = "";
    placeholder.setAttribute("placeholder", "Set a custom score");
}



