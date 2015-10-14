$(document).ready(function() {

    // Check for small screen:
    // https://www.fourfront.us/blog/jquery-window-width-and-media-queries
    //
    checkSize();

    // Run test on resize of the window.
    //
    $(window).resize(checkSize);

});

function checkSize() {

    // If small screen, the CSS property for text-align will signal change.
    //
    if ($('.logo').css('text-align') == 'center' ) {

        console.log('small screen!');

        /*
         * Logo & Nav Bar
         */

        // Adjust the padding around logo.
        //
        var logo = $('.logo');
        logo.css('padding-top', '10px');
        logo.css('padding-bottom', '10px');

        // Remove pull-right.
        //
        var navmenu = $('.fmf-nav-menu');
        navmenu.removeClass('pull-right');

        // Center text links and button.
        //
        $('.col-sm-6 ul').wrap("<div class='txt-center'></div>");

        // Remove left margin of 30px from list items.
        //
        $('.fmf-nav-menu li').css('margin-left', '10px');

        // Decrease navbar height from 90px to 75px.
        //
        navmenu.css('height', '75px');
        navmenu.css('margin-top', '10px');
        navmenu.css('margin-bottom', '0');
        navmenu.css('padding-left', 0);

        // Change login to small button.
        //
        $('#login-toggle-button').addClass('btn-sm');

        /*
         * Search Container
         */

        // Reduce margin from -30 to -10
        //.
        $('.fmf-header-search').css('margin-top', '-10');

        /* Query input:
            - identify by "name=query" attribute
           - remove col-sm-4
           - add col-xs-12
           - add Bootstrap form control
           - reduce input size to small
        */
        var query = $(".header-search-input[name|='query']");
        query.parent().removeClass('col-sm-4');
        query.parent().addClass('col-xs-12');
        query.addClass('form-control input-sm');

        /* "NEAR" text:
            - identify with "white-text" class
            - remove top margin
            - remove text centering
            - remove col-sm-1
            - add col-xs-12
            - add top margin padding
            - add letter spacing and reduce font size
        */
        var near = $('.white-text');
        near.removeClass('margin-top-10');
        near.removeClass('txt-center');
        near.removeClass('col-sm-1');
        near.addClass('col-xs-12');
        near.addClass('margin-top-5');
        near.css('letter-spacing', '2px');
        near.css('font-size', '12px');

        /* Location input:
            - identify by "name=location" attribute
            - remove col-sm-5
            - add col-xs-12
           - add Bootstrap form control
           - reduce input size to small
         */
        var location = $(".header-search-input[name|='location']")
        location.parent().removeClass('col-sm-5');
        location.parent().addClass('col-xs-12');
        location.addClass('form-control input-sm');

        /* Submit button:
            - remove centering
            - remove col-sm-2
            - add col-xs-12
            - reduce button size via padding
            - add top margin padding
        */
        var turquoise = $('.fmf-ellipse-turquoise-button')
        turquoise.parent().removeClass('txt-center');
        turquoise.parent().removeClass('col-sm-2');
        turquoise.parent().addClass('col-xs-12');
        turquoise.css('padding', '5px 10px');
        turquoise.addClass('margin-top-5');
        turquoise.addClass('pull-right');

        /* Categories
            - identify by "Categories" text
            - remove text centering
            - for each child:
            -- separate first row as col-xs-12
            -- remove col-sm-*
            -- add col-xs-6
            -- add 20px left padding
        */
        var cats = $(".row:contains('Categories:')").children();

        cats.removeClass('txt-center');

        // loop through siblings.
        //
        for (i = 0; i < cats.length; i++) {

            // if item is active, toggle class.
            //
            if ($(cats[i]).hasClass('bold')) {

                $(cats[i]).removeClass('col-sm-1');
                $(cats[i]).addClass('col-xs-12');

            } else if ($(cats[i]).hasClass('col-sm-1')) {

                $(cats[i]).removeClass('col-sm-1');
                $(cats[i]).addClass('col-xs-6');
                $(cats[i]).css('padding-left', '20px');

            } else if ($(cats[i]).hasClass('col-sm-2')) {

                $(cats[i]).removeClass('col-sm-2');
                $(cats[i]).addClass('col-xs-6');
                $(cats[i]).css('padding-left', '20px');
            }

        }
    }
}
