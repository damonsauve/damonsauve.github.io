$(document).ready(function() {

    $('li').click( function(event) {

        console.clear();

        // Prevent browser from loading internal links.
        // http://api.jquery.com/event.preventdefault/
        //
        event.preventDefault();

        // Get link from selected primary nav item.
        // http://stackoverflow.com/questions/306583/this-selector-and-children
        //
        var thisLink = $(this).find('a')[0];

        // Extract link ID to match slide-down menu ID.
        // Example: #politics-drop
        //
        var thisId = $(thisLink).attr('href');

        console.log('thisLink -> ' + thisLink);
        console.log('thisId -> ' + thisId);

        // Get all children of slide-down menu.
        //
        var slideDownItems = $('#slide-down').children();

        for (i = 0; i < slideDownItems.length; i++) {

            if ($(slideDownItems[i]).is(thisId)){

                console.log('show slide-down menu -> ');

                // Show menu if it matches selected primary nav item.
                //
                $(slideDownItems[i]).show();

            } else {

                console.log('hide slide-down menu ->');

                // Hide if not matched.
                //
                $(slideDownItems[i]).hide();
            }
            console.log(slideDownItems[i]);
        }

        // If selected list item is active currently,
        //
        if ( $(this).hasClass('active')) {

            console.log('hide menu!');

            // slide up nav menu
            //
            $('#slide-down').slideUp();

            // and remove active class from entire menu.
            //
            $('#primary-nav li').removeClass('active');

        } else {

            console.log('show menu!');

            // Otherwise, slide down nav menu,
            //
            $('#slide-down').slideDown();

            // remove active class from entire menu,
            //
            $('#primary-nav li').removeClass('active');

            // and then add active class to selected item.
            //
            $(this).addClass('active');
        }
    });
});
