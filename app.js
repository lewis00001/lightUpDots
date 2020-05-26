$(document).ready(function () {
    // reloads the html page
    $('#clear').on('click', function () {
        location.reload();
    });
    // generates all the dots on the screen
    let numDots = 208;
    for (let i = 0; i < numDots; i++) {
        $(".dot-output").append("<div class='dot circ set-off'></div>");
    }
    // active color selection
    let activeColor = "set-pink";
    let activeColorSelected = "pink";
    // records color selection
    $('.color-options').on('click', function () {
        activeColor = $(this).attr('value');
        console.log(activeColorSelected);
        activeColorSelected = activeColor.replace("set-","");
        $('#active-color').removeClass();
        $('#active-color').addClass(activeColorSelected);
    });

    let dotShape = "circ";

    // adds currently selected color to circ
    $('.dot').on('click', function (e) {
        $(this).removeClass();
        $(this).addClass('dot').addClass(dotShape).addClass(activeColor);
    });

    // sets shape of dot in the grid
    $(".toggle").on('click', function (e) {
        let clicked = $(this).hasClass('t-circle');
        // change from square to circle
        if(clicked) {
            $('.t-circle').addClass('toggle-active');
            $('.t-square').removeClass('toggle-active');
            $('.dot').removeClass('sqr').addClass('circ');
            dotShape = "circ";
        // change from circle to square 
        } else {
            $('.t-circle').removeClass('toggle-active');
            $('.t-square').addClass('toggle-active');
            $('.dot').removeClass('circ').addClass('sqr');
            dotShape = "sqr";
        }
    });
});
