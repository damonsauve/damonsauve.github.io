$(document).on("click", ".international", function(event) {

    event.preventDefault();

    $('#international-drop').show();
    $('#politics-drop').hide();
    $('#business-drop').hide();
    $('#technology-drop').hide();
    $('#culture-drop').hide();
    $('#blogs-drop').hide();

    if ($(this).hasClass('active')) {

        $('#slide-down').slideUp();
        $('#primary-nav li').removeClass('active');

    } else {

        $('#primary-nav li').removeClass('active');
        $(this).toggleClass('active');
        $('#slide-down').slideDown();
    }
});

$(document).on("click", ".politics", function(event) {

    event.preventDefault();

    $('#international-drop').hide();
    $('#politics-drop').show();
    $('#business-drop').hide();
    $('#technology-drop').hide();
    $('#culture-drop').hide();
    $('#blogs-drop').hide();

    if ($(this).hasClass('active')) {

        $('#slide-down').slideUp();
        $('#primary-nav li').removeClass('active');

    } else {

        $('#primary-nav li').removeClass('active');
        $(this).toggleClass('active');
        $('#slide-down').slideDown();
    }
});

$(document).on("click", ".business", function(event) {

    event.preventDefault();

    $('#international-drop').hide();
    $('#politics-drop').hide();
    $('#business-drop').show();
    $('#technology-drop').hide();
    $('#culture-drop').hide();
    $('#blogs-drop').hide();

    if ($(this).hasClass('active')) {

        $('#slide-down').slideUp();
        $('#primary-nav li').removeClass('active');

    } else {

        $('#primary-nav li').removeClass('active');
        $(this).toggleClass('active');
        $('#slide-down').slideDown();
    }
});

$(document).on("click", ".technology", function(event) {

    event.preventDefault();

    $('#international-drop').hide();
    $('#politics-drop').hide();
    $('#business-drop').hide();
    $('#technology-drop').show();
    $('#culture-drop').hide();
    $('#blogs-drop').hide();

    if ($(this).hasClass('active')) {

        $('#slide-down').slideUp();
        $('#primary-nav li').removeClass('active');

    } else {

        $('#primary-nav li').removeClass('active');
        $(this).toggleClass('active');
        $('#slide-down').slideDown();
    }

});

$(document).on("click", ".culture", function(event) {

    event.preventDefault();

    $('#international-drop').hide();
    $('#politics-drop').hide();
    $('#business-drop').hide();
    $('#technology-drop').hide();
    $('#culture-drop').show();
    $('#blogs-drop').hide();

    if ($(this).hasClass('active')) {

        $('#slide-down').slideUp();
        $('#primary-nav li').removeClass('active');

    } else {

        $('#primary-nav li').removeClass('active');
        $(this).toggleClass('active');
        $('#slide-down').slideDown();
    }
});

$(document).on("click", ".blogs", function(event) {

    event.preventDefault();

    $('#international-drop').hide();
    $('#politics-drop').hide();
    $('#business-drop').hide();
    $('#technology-drop').hide();
    $('#culture-drop').hide();
    $('#blogs-drop').show();

    if ($(this).hasClass('active')) {

        $('#slide-down').slideUp();
        $('#primary-nav li').removeClass('active');

    } else {

        $('#primary-nav li').removeClass('active');
        $(this).toggleClass('active');
        $('#slide-down').slideDown();
    }
});