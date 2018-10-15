// the API information 
var apiKey = "4mth1euP7BKazZvxjk93SI1i15z91Spn";

// when the user clicks Create Button this function runs
$("#createButton").on("click", function () {
    event.preventDefault(); //prevents page refresh
    renderButtons();
});

//  once the user created button is clicked it generates a giphy at the bottom of the page 
$(document).on("click", ".btn-secondary", function () {
    console.log($(this).attr("data-name"))
    var userSearch = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey + "&tag=" + userSearch +"";
    
    // the call to pull the giphy gif. files 
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        //saves the gif
        var results = response.data.images.fixed_height.url;
        console.log(results);
        var gifImage = $("<img id='gifImage'>");
        gifImage.attr("src", results);
        $("#gifGroup").prepend(gifImage);
    });
});


// generates buttons with a data-name the same as what the user enters 
function renderButtons() {
    var a = $("<button>");
    a.addClass("btn btn-secondary");
    a.attr("type", "button");
    a.attr("data-name", $("#inlineFormInput").val().trim());
    a.text($("#inlineFormInput").val().trim());
    $("#buttonGroup").append(a);
}


// when the clear button is clicked it removed the gifs but not the buttons
$("#resetButton").on("click", function(){
    event.preventDefault();
    $("#gifGroup").empty();
})


// when the header is clicked it removes all content
$("#header").on("click", function(){
    $("#gifGroup").empty();
    $("#buttonGroup").empty();
    
})