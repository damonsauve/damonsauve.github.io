$(document).ready(function() {

    // Select box for year.
    //
    $('#year').html(function() {
        var myDate = new Date();
        var year = myDate.getFullYear();
        var list = '';

        for (var i = year; i >= 1900; i--) {
            list += '<option value="' + i + '"> ' + i + ' </option>' + "\n";
        }

        return list;
    });

    $(document).on("click", "#wine-list", function(event) {

        console.clear();
        event.preventDefault();

        $.ajax({
            type: "GET",
            url: "http://daretodiscover.herokuapp.com/wines/",
            success: function(data) {

                for (var i = 0; i <= data.length; i++) {

                    for (var j in data[i]) {
                        console.log( j + ': ' + data[i][j]);
                    }
                    console.log('*****');
                }
            },
            failure: function() {
                alert("Error!");
            }
        });

        // $("#add-wine-form")[0].submit();
    });

    $(document).on("click", "#add-wine", function(event) {

        console.clear();
        event.preventDefault();

        // name: "VITICCIO CLASSICO RISERVA",
        // year: "2007",
        // grapes: "Sangiovese Merlot",
        // country: "Italy",
        // region: "Tuscany",
        // price: 45,
        // description: "Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.",
        // picture: "http://s3-us-west-2.amazonaws.com/sandboxapi/viticcio.jpg"

        var wineData = {
            name:           $("#name").val(),
            year:           $("#year").val(),
            grapes:         $("#grapes").val(),
            country:        $("#country").val(),
            region:         $("#region").val(),
            price:          $("#price").val(),
            description:    $("#description").val(),
            picture:        $("#picture").val(),
        };

        for (var key in wineData) {
            if (wineData[key] === '') {
                // alert('Please fill in all fields!');

                $( "#messages" ).text('ERROR: ' + key + ' field is empty');
                return false;
            }
        }

        $.ajax({
            type: "POST",
            url: "http://daretodiscover.herokuapp.com/wines",
            data: wineData,
            success: function(data) {

                // console.log(data);

                for ( var key in data ) {
                    console.log(key + ': ' + data[key]);
                }
            },
            failure: function() {
                alert("Error!");
            }
        });
    });
});


