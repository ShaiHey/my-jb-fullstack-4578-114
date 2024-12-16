$(() => {
    let blueVisible = true;
    let redVisible = true;

    $('#blueButton').click(function() {
        if (blueVisible) {
            $('.blue').fadeOut(2000);
            $(this).text("Fade In Blue Squares")
        } else {
            $('.blue').fadeIn(2000);
            $(this).text("Fade Out Blue Squares")
        }
        blueVisible = !blueVisible;
    });

    $('#redButton').click(function() {
        if (redVisible) {
            $('.red').fadeOut(2000);
            $(this).text("Fade In Red Squares")
        } else {
            $('.red').fadeIn(2000);
            $(this).text("Fade Out Red Squares")
        }
        redVisible = !redVisible;
    });
})