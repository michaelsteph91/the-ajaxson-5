

$(document).ready(function() {
    // register our function as the "callback" to be triggered by the form's submission event
    $("#form-gif-request").submit(fetchAndDisplayGif); // in other words, when the form is submitted, fetchAndDisplayGif() will be executed
});

function fetchAndDisplayGif(event) {

    event.preventDefault();

    var searchQuery = $("#form-gif-request input[name=tag]").val();
    var captcha = $("#form-gif-request input[name=captcha]").val();




    var params = {
        api_key: "dc6zaTOxFJmzC",
        tag : "jackson 5" + searchQuery
    };

    $.ajax({
        url: "http://api.giphy.com/v1/gifs/random",
        data: params,
        success: function(response) {

            $("#gif").attr("src", response.data.image_url)
            .attr("hidden", false);
            $("feedback").attr("hidden", true);

        },
        error: function() {
            $("#feedback").text("Sorry, could not load GIF. Try again!");
            setGifLoadedStatus(false);
        }
    });

    // TODO
    // give the user a "Loading..." message while they wait

}

function setGifLoadedStatus(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
}
