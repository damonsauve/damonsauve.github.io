// The JS way.
// document.addEventListener("DOMContentLoaded", function () {});

// The jQuery way; good practice. Wait for DOM to get loaded.
//
$(document).ready(function() {

    var maxTurns = 9;
    var totalTurns = 0;

    var ex = 'X';
    var oh = 'O';

    var currentPlayer = ex;

    var row1 = [];
    var row2 = [];
    var row3 = [];

    var gameOver = false;

    // Click event.
    //
    $(document).on("click", ".square", function () {

        $(document).on("click", "#restart", function() {
            location.reload();
        });

        if (isGameOver() || isMaxTurns()) {

            alert('Game over!');

        } else {

            var squareValue = $(this).html();

            if (isEmptySquare(squareValue)) {

                // console.log('currentPlayer -> ' + currentPlayer);

                var rowId = $(this).parent().attr("id");

                // console.log('rowId -> ' + rowId);

                // Get ID value.
                //
                var squareID = this.id;

                // console.log('squareID -> ' + squareID);

                // decrement row/col values to match array indices.
                //
                setSquare(--rowId, --squareID);

                $(this).html(currentPlayer);

                if (checkForWin()) {

                    gameOver = true;

                    alert(currentPlayer + ' wins the game!');

                } else {

                    currentPlayer = setNextPlayer();

                    totalTurns++;

                    console.log('totalTurns -> ' + totalTurns);
                }

            } else {

                alert("Select an empty square!");
            }
        }

    });

    function isGameOver() {
        return gameOver;
    }

    function isMaxTurns() {

        if (totalTurns < maxTurns) {
            return false;
        }
        return true;
    }

    function isEmptySquare(squareValue) {

        if (squareValue === '') {
            return true;
        }
        return false;
    }

    function setNextPlayer() {

        if (currentPlayer === ex) {
            return oh;
        } else {
            return ex;
        }
    }

    function setSquare(row, col) {

        // console.log("setSquare row: " + row);
        // console.log("setSquare col: " + col);

        if (row === 0) {

            row1[col] = currentPlayer;

        } else if (row === 1) {

            row2[col] = currentPlayer;

        } else if (row === 2) {

            row3[col] = currentPlayer;

        } else {

            console.log('no match');
        }

        console.log(row1);
        console.log(row2);
        console.log(row3);

    }

    function checkForWin() {

        // Brute-force method that checks for all possible wins. Yes, would be
        // better to use a multi-dimension array, but TicTacToe has only eight
        // possible outcomes.

        // x x x
        //
        if (row1[0] === currentPlayer &&
            row1[1] === currentPlayer &&
            row1[2] === currentPlayer
        ) {
            return true;
        }

        if (row2[0] === currentPlayer &&
            row2[1] === currentPlayer &&
            row2[2] === currentPlayer
        ) {
            return true;
        }

        if (row3[0] === currentPlayer &&
            row3[1] === currentPlayer &&
            row3[2] === currentPlayer
        ) {
            return true;
        }

        // x
        // x
        // x
        //
        if (row1[0] === currentPlayer &&
            row2[0] === currentPlayer &&
            row3[0] === currentPlayer
        ) {
            return true;
        }

        if (row1[1] === currentPlayer &&
            row2[1] === currentPlayer &&
            row3[1] === currentPlayer
        ) {
            return true;
        }

        if (row1[2] === currentPlayer &&
            row2[2] === currentPlayer &&
            row3[2] === currentPlayer
        ) {
            return true;
        }

        // x _ _
        // _ x _
        // _ _ x
        //
        if (row1[0] === currentPlayer &&
            row2[1] === currentPlayer &&
            row3[2] === currentPlayer
        ) {
            return true;
        }

        // _ _ x
        // _ x _
        // x _ _
        //
        if (row1[2] === currentPlayer &&
            row2[1] === currentPlayer &&
            row3[0] === currentPlayer
        ) {
            return true;
        }
    }
});


