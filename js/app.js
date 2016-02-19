$(document).ready(function() {

    //http://www.arlocarreon.com/blog/javascript/handlebars-js-everyother-helper/
    //
    Handlebars.registerHelper("everyOther", function(index, amount, scope) {
        if (++index % amount)
            return scope.inverse(this);
        else
            return scope.fn(this);
    });

    var context = {
        portfolio: [
            {
                h1: "Portfolio",
                h2: "February 2016",
                h3: "Landing page for my front-end web work.",
                project: [
                    {
                        thumbnail: {
                            url: "https://github.com/damonsauve/damonsauve.github.io",
                            src: "img/portfolio/Web_Work_Portfolio.png",
                        },
                        title: "Web Work Portfolio",
                        description: "Using GitHub Pages, build a effective showcase for my web work that also highlights my front-end skills.",
                        links: [
                            "<a href=\"https://github.com/damonsauve/damonsauve.github.io\" target=\"_blank\">GitHub Code</a>",
                        ],
                        objectives: [
                            "Two-column Bootstrap layout scales down to single column for small screens.",
                            "Media queries modify font size and image widths across all screens to maximize readability.",
                            "Handlebars templates powered by project content stored as JSON object.",
                        ],
                    }
                ]
            },
            {
                h1: "Front-End Web Developer Coursework",
                h2: "August &#151; November 2015",
                h3: "Selected <a href=\"https://github.com/damonsauve/FEWD35-Homework\" target=\"_blank\">assignments</a> from the General Assembly course in San Francisco.",
                project: [
                    {
                        thumbnail: {
                            url: "/projects/ga-fewd35/12-spotify_api_search/",
                            src: "img/ga-fewd35/12-spotify_api_search.png",
                        },
                        title: "Spotify API Search",
                        description: "Using jQuery/Ajax, query the <a href=\"https://developer.spotify.com/web-api/\" target=\"_blank\">Spotify Web API</a> by keyword and return related tracks.",
                        objectives: [
                            "Send jQuery/Ajax <code>GET</code> request to API.",
                            "Display results with simple Handlebars template.",
                            "Show messaging if search returns zero results.",
                            "Paginate results using JavaScript.",
                            "Enable in-browser audio preview using HTML5.",
                        ],
                        links: [
                            "<a href=\"https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/12-spotify_api_search\" target=\"_blank\">GitHub Code</a>",
                            "<a href=\"/projects/ga-fewd35/12-spotify_api_search/\" target=\"_blank\">Live Version</a>",
                        ],
                    },
                    {
                        thumbnail: {
                            url: "/projects/ga-fewd35/11-omdb_api_search/",
                            src: "img/ga-fewd35/11-omdb_api_search.png",
                        },
                        title: "OMDB API Search",
                        description: "Using jQuery/Ajax, build a simple form to query the <a href=\"http://www.omdbapi.com/\" target=\"_blank\">Open Music Database API</a> by title and display the result.",
                        objectives: [
                            "Send jQuery/Ajax <code>GET</code> request to API.",
                            "Include a button to clear form input using jQuery.",
                            "Display results with simple Handlebars template.",
                            "Show messaging if search returns zero results.",
                        ],
                        links: [
                            "<a href=\"https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/11-omdb_api_search\" target=\"_blank\">GitHub Code</a>",
                            "<a href=\"/projects/ga-fewd35/11-omdb_api_search/\" target=\"_blank\">Live Version</a>",
                        ],
                    },
                    {
                        thumbnail: {
                            url: "/projects/ga-fewd35/09-my_form/",
                            src: "img/ga-fewd35/09-my_form.png",
                        },
                        title: "My Form",
                        description: "Build simple HTML form from PNG mock-up with basic field validation.",
                        objectives: [
                            "Use Bootstrap's <code>form-control</code> class to standardize form field appearance.",
                            "Access form fields using jQuery's <code>.val()</code> function.",
                            "Show error message for invalid form fields.",
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/09-my_form" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/09-my_form/" target="_blank">Live Version</a>',
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/blob/master/projects/ga-fewd35/09-my_form/mox/html_form.png" target="_blank">Mock-up</a>',
                        ],
                    },
                    {
                        thumbnail: {
                            url: '/projects/ga-fewd35/10-wine_api_app/',
                            src: 'img/ga-fewd35/10-wine_api_app.png',
                        },
                        title: 'Wine API App',
                        description: 'Using jQuery/Ajax, use the Wine API to add a new wine to the database. Note: As of February 2016, the Wine API was inaccessible.',
                        objectives: [
                            'Dynamically generate the select list for year field using a JavaScript and jQuery.',
                            'On submit, validate the form and show error messaging for invalid fields.',
                            'Send jQuery/Ajax <code>POST</code> to add a new wine and <code>GET</code> to fetch a list of wines to the console.',
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/10-wine_api_app" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/10-wine_api_app/" target="_blank">Live Version</a>',
                        ],
                    },
                    {
                        thumbnail: {
                            url: '/projects/ga-fewd35/07-amazon_wish_list/',
                            src: 'img/ga-fewd35/07-amazon_wish_list.png',
                        },
                        title: 'Amazon Wish List',
                        description: 'Using Bootstrap components and CSS, transform the layout of an <a href="http://damonsauve.github.io/projects/ga-fewd35/07-amazon_wish_list/index-old.html" target="_blank">existing web page</a>.',
                        objectives: [
                            'Two-column layout scales down to one column for small screens.',
                            'Tool tips provide contextual link info.',
                            'Product comments displayed in modal window.',
                            '"Hide Carousel" button uses Collapse plugin.',
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/07-amazon_wish_list" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/07-amazon_wish_list/" target="_blank">Live Version</a>',
                        ],
                    },
                    {
                        thumbnail: {
                            url: '/projects/ga-fewd35/08-responsive_header_redesign/',
                            src: 'img/ga-fewd35/08-responsive_header_redesign.png',
                        },
                        title: 'Responsive Header Redesign',
                        description: 'Using jQuery, transform existing navigation menu for mobile devices.',
                        objectives: [
                            'Trigger responsive jQuery functions via a small-screen media query that changes a CSS property.',
                            'Modify nav-menu CSS properties and Bootstrap columns using jQuery methods.',
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/08-responsive_header_redesign" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/08-responsive_header_redesign/" target="_blank">Live Version</a>',
                        ],
                    },
                    {
                        thumbnail: {
                            url: '/projects/ga-fewd35/05-tic_tac_toe/',
                            src: 'img/ga-fewd35/05-tic_tac_toe.png',
                        },
                        title: 'Tic Tac Toe',
                        description: 'Build a tic-tac-toe game from scratch using HTML, CSS, and jQuery.',
                        objectives: [
                            'Track game play using jQuery click events and selectors.',
                            'Use JavaSCript to handle application logic (ie, check for win).',
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/05-tic_tac_toe" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/05-tic_tac_toe/" target="_blank">Live Version</a>',
                        ],
                    },
                    {
                        thumbnail: {
                            url: '/projects/ga-fewd35/06-divided_times/',
                            src: 'img/ga-fewd35/06-divided_times.png',
                        },
                        title: 'Divided Times',
                        description: 'Using jQuery, build a drop-down navigation menu for a newspaper website.',
                        objectives: [
                            'For click events, use jQuery to toggle an "active" class to show/hide menu items.',
                            'Use jQuery <code>slideUp</code>/<code>slideDown</code> methods to animate navigation menu.',
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/06-divided_times" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/06-divided_times/" target="_blank">Live Version</a>',
                        ],
                    },
                    {
                        thumbnail: {
                            url: '/projects/ga-fewd35/03-bootstrap_off_canvas_clone/',
                            src: 'img/ga-fewd35/03-bootstrap_off_canvas_clone.png',
                        },
                        title: 'Bootstrap Off-Canvas Clone',
                        description: 'Clone the Bootstrap <a href ="http://getbootstrap.com/examples/offcanvas/">Off-Canvas Template</a>. Exercise does not include the JavaScript to toggle the sidebar.',
                        objectives: [
                            'Build a copy of Bootstrap\'s template, matching responsive column sizes.',
                            'For extra-small screens, hide the sidebar using the responsive helper class.',
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/03-bootstrap_off_canvas_clone" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/03-bootstrap_off_canvas_clone/" target="_blank">Live Version</a>',
                        ],
                    },
                    {
                        thumbnail: {
                            url: '/projects/ga-fewd35/04-score_keeper/',
                            src: 'img/ga-fewd35/04-score_keeper.png',
                        },
                        title: 'Score Keeper',
                        description: 'Create a simple score-keeper application using JavaScript.',
                        objectives: [
                            'Dynamically change HTML using JavaScript events and selectors.',
                            'Use JavaScript to handle application logic (ie, score cannot go below zero).',
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/04-score_keeper" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/04-score_keeper/" target="_blank">Live Version</a>',
                        ],
                    },
                    {
                        thumbnail: {
                            url: '/projects/ga-fewd35/01-resume_exercise/',
                            src: 'img/ga-fewd35/01-resume_exercise.png',
                        },
                        title: 'Resume Exercise',
                        description: 'From PNG mock-ups, build a two-page resume using HTML and CSS.',
                        objectives: [
                            'Build an HTML page with images, links, and structured layout.',
                            'Create a linked style sheet to modify HTML using CSS selectors.',
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/01-resume_exercise" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/01-resume_exercise/" target="_blank">Live Version</a>',
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/01-resume_exercise/mox" target="_blank">Mock-up</a>',
                        ],
                    },
                    {
                        thumbnail: {
                            url: '/projects/ga-fewd35/02-fashion_blog/',
                            src: 'img/ga-fewd35/02-fashion_blog.png',
                        },
                        title: 'Fashion Blog',
                        description: 'From a PNG mock-up, build a one-page blog using a 12-column grid system.',
                        objectives: [
                            'Use floating elements within a container to create columns.',
                            'Match fonts, colors, and other design elements.',
                        ],
                        links: [
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/tree/master/projects/ga-fewd35/02-fashion_blog" target="_blank">GitHub Code</a>',
                            '<a href="/projects/ga-fewd35/02-fashion_blog/" target="_blank">Live Version</a>',
                            '<a href="https://github.com/damonsauve/damonsauve.github.io/blob/master/projects/ga-fewd35/02-fashion_blog/mox/fashion_blog_2.png" target="_blank">Mock-up</a>',
                        ],
                    },
                ]
            },
        ],
    };

    var portfolio = Object.keys(context);

    portfolio.forEach(function(project) {

        var items = Object.keys(context[project]);

        items.forEach(function(item) {

            var value = context[project][item];

            //var myObject = JSON.stringify(context[project][item]);
            //alert(myObject);

            //console.log(context[project][item]);

            // Get HTML used for templating.
            //
            var source = $("#project-template").html();

            // Get the function that translates source code.
            //
            var template = Handlebars.compile(source);

            results = {
                'h1': context[project][item].h1,
                'h2': context[project][item].h2,
                'h3': context[project][item].h3,
                'project': context[project][item].project,
            };

            //console.log(results);

            var html = template(results);

            //console.log(html);

            $("#project").append(html);
        });
    });

});
