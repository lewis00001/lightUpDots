$(document).ready(function () {
    // reloads the html page
    $('#clear').on('click', function () {
        location.reload();
    });
    // generates all the dots on the screen
    let numDots = 208;
    for (let i = 0; i < numDots; i++) {
        $(".dot-output").append("<div class='circ set-off'></div>");
    }
    // active color selection
    let activeColor = "set-off";
    let activeColorSelected = "off";
    // records color selection
    $('.color-options').on('click', function () {
        activeColor = $(this).attr('value');
        console.log(activeColor);
        console.log(activeColorSelected);
        activeColorSelected = activeColor.replace("set-","");
        $('#active-color').removeClass();
        $('#active-color').addClass(activeColorSelected);
    });

    // adds currently selected color to circ
    $('.circ').on('click', function (e) {
        $(this).removeClass();
        $(this).addClass("circ").addClass(activeColor);
    });
});
