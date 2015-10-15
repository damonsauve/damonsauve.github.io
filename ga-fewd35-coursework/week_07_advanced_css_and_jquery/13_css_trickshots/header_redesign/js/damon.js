$(document).ready(function() {

    // My goal here is to keep the original header HTML and CSS and use this JS
    // file to modify the header for mobile devices -- and then revert to
    // original CSS on window resize.

    var logo = $('.logo');
    var navmenu = $('.fmf-nav-menu');
    var query = $(".header-search-input[name|='query']");
    var near = $('.white-text');
    var location = $(".header-search-input[name|='location']");
    var turquoise = $('.fmf-ellipse-turquoise-button');
    var cats = $(".row:contains('Categories:')").children();

    // Check for small screen:
    // https://www.fourfront.us/blog/jquery-window-width-and-media-queries
    //
    checkSize();

    // Run test on resize of the window.
    //
    $(window).resize(checkSize);

    function checkSize() {

        console.clear();
        console.log('text-align: ' + logo.css('text-align'));

        // If small screen, the CSS property for text-align will signal change.
        //
        if (logo.css('text-align') == 'center' ) {

            console.log('small screen!');

            setMobile();

        } else {

            console.log('big screen! reset all properties!');

            // To do: Revert only if previous state was small screen.
            //
            revertMobile();
        }
    }

    function setMobile() {

        //
        // Logo & Nav Bar
        //

        // Adjust the padding around logo.
        //
        logo.css('padding-top', '10px');
        logo.css('padding-bottom', '10px');

        // Remove pull-right.
        //
        navmenu.removeClass('pull-right');

        // Check parent for center wrap div...
        //
        if (navmenu.parent().hasClass('txt-center') )
        {
            // and do nothing...
            //
            console.log('already has center div');

        } else {

            console.log('adding center div');

            // or add div to center text links and button.
            //
            $('.col-sm-6 ul').wrap("<div class='txt-center'></div>");
        }

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

        //
        // Search Container
        //

        // Reduce margin from -30 to -10
        //.
        $('.fmf-header-search').css('margin-top', '-10');

        // Query input:
        //  - identified by "name=query" attribute
        //  - remove col-sm-4
        //  - add col-xs-12
        //  - add Bootstrap form control
        //  - reduce input size to small
        //
        query.parent().removeClass('col-sm-4');
        query.parent().addClass('col-xs-12');
        query.addClass('form-control input-sm');

        // "NEAR" text:
        //  - identified by "white-text" class
        //  - remove top margin
        //  - remove text centering
        //  - remove col-sm-1
        //  - add col-xs-12
        //  - add top margin padding
        //  - add letter spacing and reduce font size
        //
        near.removeClass('margin-top-10');
        near.removeClass('txt-center');
        near.removeClass('col-sm-1');
        near.addClass('col-xs-12');
        near.addClass('margin-top-5');
        near.css('letter-spacing', '2px');
        near.css('font-size', '12px');

        // Location input:
        //  - identified by "name=location" attribute
        //  - remove col-sm-5
        //  - add col-xs-12
        //  - add Bootstrap form control
        //  - reduce input size to small
        //
        location.parent().removeClass('col-sm-5');
        location.parent().addClass('col-xs-12');
        location.addClass('form-control input-sm');

        // Submit button:
        //    - remove centering
        //    - remove col-sm-2
        //    - add col-xs-12
        //    - reduce button size via padding
        //    - add top margin padding
        //
        turquoise.parent().removeClass('txt-center');
        turquoise.parent().removeClass('col-sm-2');
        turquoise.parent().addClass('col-xs-12');
        turquoise.css('padding', '5px 10px');
        turquoise.addClass('margin-top-5');
        turquoise.addClass('pull-right');

        // Categories
        //  - identified by "Categories" text
        //  - remove text centering
        //  - for each child:
        //      - separate first row as col-xs-12
        //      - remove col-sm-*
        //      - add col-xs-6
        //      - add 20px left padding
        //
        cats.removeClass('txt-center');

        // Loop through siblings.
        //
        for (i = 0; i < cats.length; i++) {

            // if item is active, toggle class.
            //
            if ($(cats[i]).hasClass('bold')) {

                $(cats[i]).removeClass('col-sm-1');
                $(cats[i]).addClass('col-xs-12');

            } else if ($(cats[i]).hasClass('col-sm-1')) {

                // Add class col-xs-6 but leave sm-1 class.
                //
                $(cats[i]).addClass('col-xs-6');
                $(cats[i]).css('padding-left', '20px');

            } else if ($(cats[i]).hasClass('col-sm-2')) {

                // Add class col-xs-6 but leave sm-2 class.
                //
                $(cats[i]).addClass('col-xs-6');
                $(cats[i]).css('padding-left', '20px');
            }
        }
    }

    function revertMobile() {

        //
        // Logo & Nav Bar
        //

        // Revert the padding around logo.
        //
        logo.css('padding-top', '');
        logo.css('padding-bottom', '');

        // Add pull-right.
        //
        navmenu = $('.fmf-nav-menu');
        navmenu.addClass('pull-right');

        // Check if parent of navmenu has center div...
        //
        if (navmenu.parent().hasClass('txt-center') )
        {
            console.log('removing center div');

            // and remove it.
            //
            navmenu.unwrap();

        } else {

            console.log('no center div to remove');
        }

        // Revert left margin changes.
        //
        $('.fmf-nav-menu li').css('margin-left', '');

        // Revert navbar changes.
        //
        navmenu.css('height', '');
        navmenu.css('margin-top', '');
        navmenu.css('margin-bottom', '');
        navmenu.css('padding-left', '');

        // Remove small button.
        //
        $('#login-toggle-button').removeClass('btn-sm');

        //
        // Search Container
        //

        // Revert margin to -30.
        //.
        $('.fmf-header-search').css('margin-top', '');

        // Query input:
        //
        query.parent().removeClass('col-xs-12');
        query.parent().addClass('col-sm-4');
        query.removeClass('form-control input-sm');

        // "NEAR" text:
        //
        near.removeClass('col-xs-12');
        near.removeClass('margin-top-5');
        near.addClass('margin-top-10');
        near.addClass('txt-center');
        near.addClass('col-sm-1');
        near.css('letter-spacing', '');
        near.css('font-size', '');

        // Location input:
        //
        location = $(".header-search-input[name|='location']");
        location.parent().addClass('col-sm-5');
        location.parent().removeClass('col-xs-12');
        location.removeClass('form-control input-sm');

        // Submit button:
        //
        turquoise.parent().addClass('txt-center');
        turquoise.parent().addClass('col-sm-2');
        turquoise.parent().addClass('col-xs-12');
        turquoise.css('padding', '');
        turquoise.removeClass('margin-top-5');
        turquoise.removeClass('pull-right');

        // Categories
        //

        // Loop through siblings.
        //
        for (i = 0; i < cats.length; i++) {

            // if item is active, toggle class.
            //
            if ($(cats[i]).hasClass('bold')) {

                $(cats[i]).addClass('col-sm-1');
                $(cats[i]).removeClass('col-xs-12');

            } else if ($(cats[i]).hasClass('col-xs-6')) {

                $(cats[i]).removeClass('col-xs-6');
                $(cats[i]).css('padding-left', '');
            }
        }

        // Center text.
        //
        cats.addClass('txt-center');
    }
});


