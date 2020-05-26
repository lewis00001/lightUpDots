$(document).ready(function () {
    // reloads the html page
    $('#clear').on('click', function () {
        location.reload();
    });
    // generates all the dots on the screen
    let numDots = 208;
    for (let i = 0; i < numDots; i++) {
        $(".dot-output").append("<div class='circ off'></div>");
    }
    // active color selection
    let activeColor = "off";
    // records color selection


    // cycles though colors based on currently displayed color
    $('.circ').on('click', function (e) {

        if ($(this).hasClass("b")) {
            $(this).toggleClass("b g");
        } else if ($(this).hasClass("g")) {
            $(this).toggleClass("g r");
        } else if ($(this).hasClass("r")) {
            $(this).toggleClass("r off");
        } else if ($(this).hasClass("off")) {
            $(this).toggleClass("off b");
        }
    });
});