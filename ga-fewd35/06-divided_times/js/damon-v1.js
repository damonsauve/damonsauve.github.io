$(document).ready(function() {

    $('li').click( function(event) {

        // prevent browser from loading internal links.
        // http://api.jquery.com/event.preventdefault/
        //
        event.preventDefault();

        // for practice, init 'this' as variable.
        //
        var navSelected = $(this);

        // get class name for selected nav menu.
        //
        var navName = $(navSelected).attr("class");

        // step 0: navName: international
        // step 1: navName: international active
        //
        console.log('navName: ' + navName);

        // toggle active class.
        //
        $(navSelected).toggleClass('active');

        // get list item siblings.
        //
        var navList = $(navSelected).siblings();

        // loop through siblings.
        //
        for (i = 0; i < navList.length; i++) {

            // if item is active, toggle class.
            //
            if ($(navList[i]).hasClass('active')) {

                $(navList[i]).toggleClass('active');

                // console.log(allListItems[i]);
            }
        }

        // enable display for drop-down menu.
        //
        // $('#slide-down').css('display', 'block');

        $("#slide-down").slideDown( "slow", function() {
            // Animation complete.
        });

        // set class to open.
        //
        $('#slide-down').addClass('open');

        // get all children of drop-down menu.
        //
        var dropDownItems = $('#slide-down').children();

        for (i = 0; i < dropDownItems.length; i++) {

            console.log(dropDownItems[i]);

            // display the drop-down if item matches selected nav menu.
            //
            if ($(dropDownItems[i]).hasClass(navName)) {

                console.log('matches');

                $(dropDownItems[i]).css('display', 'block');

                $(dropDownItems[i]).toggleClass('open');

            } else {

                console.log('doesnt match');

                // otherwise, hide the drop-down menu for that item.
                //
                $(dropDownItems[i]).hide();
            }
        }

    });

});
