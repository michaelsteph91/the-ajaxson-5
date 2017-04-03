$(document).ready(function() {
    $("#form-gif-request").submit(fetchAndDisplayGif);
});


function fetchAndDisplayGif(event) {

    event.preventDefault();

    var captcha = $("#form-gif-request input[name=captcha]").val();
    var searchQuery = $("#form-gif-request input[name=tag]").val();
    console.log(searchQuery);




    var params = {
        api_key: "dc6zaTOxFJmzC",
        tag :"jackson 5" + searchQuery,
    };

        if(captcha === "5"){

            $.ajax({
                url: "http://api.giphy.com/v1/gifs/random",
                data: params,

                beforeSend: function(){
                    $("#loading").attr("hidden", false)
                        .text("loading.....")
                },

                success: function(response) {

                    $("#gif").attr("src", response.data.image_url)
                    .attr("hidden", false);
                    $("feedback").attr("hidden", true);
                    $("#fail").attr("hidden", true);
                    $("#loading").attr("hidden", true)

                },
                error: function() {
                    $("#feedback").text("Sorry, could not load GIF. Try again!");
                    setGifLoadedStatus(false);
                }
            });

        }
        else{
            $("#fail").text("No gif 4 U")
                .attr("hidden", false);
        }


    }

    function setGifLoadedStatus(isCurrentlyLoaded) {
        $("#gif").attr("hidden", !isCurrentlyLoaded);
        $("#feedback").attr("hidden", isCurrentlyLoaded);
    }
