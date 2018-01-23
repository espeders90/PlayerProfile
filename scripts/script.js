/* global $*/
$(document).ready(function() {
    console.log("scipt connected");

    $("#submit").on("click", function(event) {
        event.preventDefault();

        var newPlayer = {
            firstname: $("#firstname").val().trim(),
            lastname: $("#lastname").val().trim(),
            height: $("#height").val().trim(),
            weight: $("#weight").val().trim(),
            dash: $("#dash").val().trim(),
            school: $("#school").val().trim(),
            position: $("#school").val().trim(),
            positionrating: $("#positionrating").val().trim(),
            overallrank: $("#overallrank").val(),
            comments: $("#comments").val().trim(),
        };

        console.log("test" + newPlayer);

        $.ajax({
                url: '/newPlayer',
                method: "POST",
                data: newPlayer
            })
            .then(function(data) {
                console.log("_________________");
                if (data) {
                    alert("New Player added to the database");
                }
                else {
                    alert("Fail! Try again!");
                }
                // Clear the form when submitting
                $("#firstname").val().trim();
                $("#lastname").val().trim();
                $("#height").val().trim();
                $("#weight").val().trim();
                $("#dash").val().trim();
                $("#school").val().trim();
                $("#positionrating").val().trim();
                $("#overallrank").val().trim();
                $("#comments").val().trim();

            });

    });
});
