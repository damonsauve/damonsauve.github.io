$(document).ready(function() {

    console.clear();

    // Clear form button.
    //
    $(document).on("click", "#clear-form", function(event) {

        event.preventDefault();

        // Replace input with placeholder text.
        //
        var placeholder = document.getElementById("query-string");
        placeholder.value = '';
        placeholder.setAttribute("placeholder", "Lana Del Rey");

        // Remove previous search results.
        //
        clear_previous_search();
    });

    // Submit form.
    //
    $(document).on("click", "#submit-form", function(event) {

        event.preventDefault();

        // Remove previous search results.
        //
        clear_previous_search();

        var query = get_query();

        // console.log('submit query: ' + query);

        // Handle empty input.
        //
        if (query === '') {

            // Enable messages and display warning.
            //
            $('#search-messages').css('display', 'inline');
            $('#search-messages').text('Please enter a search query!');
        }
        else
        {
            // Enable search results to display.
            //
            show_hidden_display();

            // Perform the search.
            //
            do_search(query);
        }
    });

    // Page 1
    // https://api.spotify.com/v1/search?q=lana+del+rey&type=track
    //
    // limit: 20,
    // next: "https://api.spotify.com/v1/search?query=lana+del+rey&offset=20&limit=20&type=track",
    // offset: 0,
    // previous: null,
    // total: 1984

    // Page 2
    // https://api.spotify.com/v1/search?query=lana+del+rey&offset=20&limit=20&type=track
    //
    // limit: 20,
    // next: "https://api.spotify.com/v1/search?query=lana+del+rey&offset=40&limit=20&type=track",
    // offset: 20,
    // previous: "https://api.spotify.com/v1/search?query=lana+del+rey&offset=0&limit=20&type=track",
    // total: 1984

    // Page 3
    // https://api.spotify.com/v1/search?query=lana+del+rey&offset=40&limit=20&type=track
    //
    // limit: 20,
    // next: "https://api.spotify.com/v1/search?query=lana+del+rey&offset=60&limit=20&type=track",
    // offset: 40,
    // previous: "https://api.spotify.com/v1/search?query=lana+del+rey&offset=20&limit=20&type=track",
    // total: 1984

    // Next page.
    //
    $(document).on("click", "#next-page", function(event) {

        event.preventDefault();

        // Remove previous search results.
        //
        clear_previous_search();

        var query = get_query();
        var offset = get_offset();
        var limit = get_limit();

        offset = offset + limit;

        // console.log('next query: ' + query);
        // console.log('offset: ' + offset);
        // console.log('limit: ' + limit);

        do_search(query, offset, limit);
    });

    // Previous page.
    //
    $(document).on("click", "#previous-page", function(event) {

        event.preventDefault();

        // Remove previous search results.
        //
        clear_previous_search();

        var query = get_query();
        var offset = get_offset();
        var limit = get_limit();

        offset = offset - limit;

        // console.log('next query: ' + query);
        // console.log('offset: ' + offset);
        // console.log('limit: ' + limit);

        do_search(query, offset, limit);
    });

    function clear_previous_search() {

        // Remove previous search results.
        //
        $('#search-head').remove();
        $('.search-result').remove();
        $('#search-foot').remove();

        // Clear messages.
        //
        $('#search-messages').css('display', '');
    }

    function show_hidden_display() {

        // Enable search results to display.
        //
        $('#search-header').css('display', 'block');
        $('#search-results').css('display', 'block');
        $('#search-footer').css('display', 'block');
    }

    function get_header_html(data) {

        // Get HTML used for templating.
        //
        var header_source = $("#search-header-template").html();

        // Get the function that translates source code.
        //
        var header_template = Handlebars.compile(header_source);

        var limit;

        // Showing 20 of 9 total search results.
        //
        if (data.tracks.limit >= data.tracks.total) {
            limit = data.tracks.total;
        } else {
            limit = data.tracks.limit;
        }

        var header_data = {
            'total_results': data.tracks.total,
            'limit': limit
        };

        var header_html = header_template(header_data);

        // console.log(header_html);

        return header_html;
    }

    function get_footer_html(query, data) {

        // Get HTML used for templating.
        //
        var pagination_source = $("#search-footer-template").html();

        // Get the function that translates source code.
        //
        var pagination_template = Handlebars.compile(pagination_source);

        var prev_url = false;
        var next_url = false;

        if (data.tracks.next) {
            next_url = true;
        }

        if (data.tracks.previous) {
            prev_url = true;
        }

        var pagination_data = {
            'next_page': next_url,
            'previous_page': prev_url,
            'limit': data.tracks.limit
        };

        var pagination_html = pagination_template(pagination_data);

        // console.log(pagination_html);

        return pagination_html;
    }

    function get_search_results_html(query, data) {

        // Get HTML used for templating.
        //
        var source = $("#search-results-template").html();

        // Get the function that translates source code.
        //
        var template = Handlebars.compile(source);

        var results;
        var search_results_html;

        // If response has data.
        //
        if (data.tracks.total > 0) {

            for (var item in data.tracks.items) {

                // console.log(data.tracks.items[item]);
                // console.log(data.tracks.items[item]);

                var duration_mins = Math.floor((data.tracks.items[item].duration_ms / 1000 / 60), 2);

                results = {
                    'name': data.tracks.items[item].name,
                    'type': data.tracks.items[item].type,
                    'artist':data.tracks.items[item].artists[0].name,
                    'duration': duration_mins,
                    'album': data.tracks.items[item].album.name,
                    'image_url': data.tracks.items[item].album.images[1].url,
                    'image_width': data.tracks.items[item].album.images[1].width,
                    'preview_url': data.tracks.items[item].preview_url
                };

                // console.log(results);

                search_results_html = template(results);
                $("#search-results").append(search_results_html);
            }
        } else {

            results = {
                'error': 'Sorry, no matches were found.'
            };

            search_results_html = template(results);
            $("#search-results").append(search_results_html);
        }
    }

    function get_query() {
        return encodeURIComponent($("#query-string").val());
    }

    function get_offset() {
        return parseInt($("#page-offset").val(), 10);
    }

    function get_limit() {
        return parseInt($("#page-limit").val(), 10);
    }

    function do_search(query, offset, limit) {

        // https://api.spotify.com/v1/search?query=lana+del+rey&type=artist
        // query=lana+del+rey&offset=20&limit=20&type=track

        var url = "https://api.spotify.com/v1/search?type=track&q=" + query;

        if (typeof offset !== 'undefined') {
            url += '&offset=' + offset;
        }

        if (typeof limit !== 'undefined') {
            url += '&limit=' + limit;
        } else {
            url += '&limit=' + 3;
        }

        console.log('spotify api: ' + url);

        $.ajax({
            'type': "GET",
            'url': url,
            'success': function(data) {

                // Set limit and offset as hidden form fields.
                //
                $('#page-limit').val(data.tracks.limit);
                $('#page-offset').val(data.tracks.offset);

                // Header template.
                //
                var header_html = get_header_html(data);
                $("#search-header").append(header_html);

                // Search results template.
                //
                get_search_results_html(query, data);

                // Footer template (pagination).
                //
                var footer_html = get_footer_html(query, data);
                $("#search-footer").append(footer_html);

            },
            'failure': function() {
                alert("Error!");
            }
        });
    }
});
