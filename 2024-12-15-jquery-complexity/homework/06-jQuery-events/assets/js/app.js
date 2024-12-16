$(() => {

    const randomColor = () => {
        const colors = ["blue", "red"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex]
    }

    let HTML = '';

    for (let i = 1; i <= 15; i++) {
        HTML += `<div class="${randomColor()}">${i}</div>`
    }

    $(".container").append(HTML);

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