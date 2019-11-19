$(document).ready(function () {

    let numDots = 256;
    for (let i = 0; i < numDots; i++) {
        $(".content").append("<div class='circ off'></div>");
    }

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