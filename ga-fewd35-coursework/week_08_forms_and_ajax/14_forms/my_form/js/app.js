$(document).ready(function() {

    $(document).on("submit", "form", function(event) {

        event.preventDefault();

        var formInfo = {

            // Using IDS
            //
            first_name: $("#first-name").val(),
            last_name:  $("#last-name").val(),
            email:      $("#email-address").val(),
            address:    $("#address").val(),
            address_2:  $("#address-2").val(),
            city:       $("#city").val(),
            state:      $("#state").val(),
            country:    $("#country").val()

            // // using name attribute.
            // //
            // first_name: $("input[name='first-name']").val(),
            // last_name:  $("input[name='last-name']").val(),
            // email:      $("input[name='email-address']").val(),
            // address:    $("input[name='address']").val(),
            // address_2:  $("input[name='address-2']").val(),
            // city:       $("input[name='city']").val(),
            // state:      $("select[name='state']").val(),
            // country:    $("select[name='country']").val()
        };

        console.log(formInfo.first_name);
        console.log(formInfo);

        for (var key in formInfo) {

            if (formInfo[key] === '') {
                // alert('Please fill in all fields!');

                $( "#messages" ).text('ERROR: ' + key + ' field is empty');

                return false;
            }
        }


        // document.forms["my-form"].submit();
        $("#my-form")[0].submit();

    });

});


