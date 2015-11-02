$(document).ready(function() {

    $(document).on("click", "#clear-form", function(event) {

        event.preventDefault();

        // Replace input with placeholder text.
        //
        var placeholder = document.getElementById("movie-title");
        placeholder.value = '';
        placeholder.setAttribute("placeholder", "The Walking Dead");

        // Remove previous search results.
        //
        $('.search-item').remove();

        // Hide search results.
        //
        $('#search-head').css('display', '');
        $('#search-results').css('display', '');
    });

    $(document).on("click", "#submit-form", function(event) {

        event.preventDefault();

        // Remove previous search results.
        //
        $('.search-item').remove();

        var title = $("#movie-title").val();

        // Handle empty input.
        //
        if (title === '') {

            // Enable messages and display warning.
            //
            $('#search-messages').css('display', 'inline');
            $('#search-messages').text('Title is required!');
        }
        else
        {
            // Clear messages.
            //
            $('#search-messages').css('display', '');

            // Enable search results to display.
            //
            $('#search-head').css('display', 'block');
            $('#search-results').css('display', 'block');

            // http://www.omdbapi.com/?t=barfly

            $.ajax({
                type: "GET",
                url: "http://www.omdbapi.com/?t=" + title,
                success: function(data) {

                    //console.log(data);

                    // Get HTML used for templating.
                    //
                    var source = $("#search-template").html();

                    // Get the function that translates source code.
                    //
                    var template = Handlebars.compile(source);

                    var html = template(data);

                    $("#search-results").append(html);
                },
                failure: function() {
                    alert("Error!");
                }
            });
        }
    });
});
