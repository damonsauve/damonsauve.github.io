
// Original JS way.
// document.addEventListener("DOMContentLoaded", function () {});

// The jQuery way; good practice. Wait for DOM to get loaded.
//
$(document).ready(function() {

    var currentTurn = "O";

    // Click event.
    //
    $(document).on("click", ".square", function () {

        console.log($(this).html());

        var squareValue = $(this).html();

        if (squareValue === "" ) {

            if (currentTurn === "O") {
                // $(this).html("O");
                currentTurn = "X";
            } else {
                // $(this).html("X");
                currentTurn = "O";
            }

            $(this).html(currentTurn);

        } else {
            alert("Select an empty square!");
        }
    });
});
