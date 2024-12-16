$(() => {
    const randomNumber = () => Math.floor(Math.random() * 100);

    const randomColor = () => {
        const colors = ["red", "green", "blue", "yellow", "grey"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    $("#random").click(function () {
        $("div").each(function () {
            $(this).text(randomNumber());
            $(this).css("background-color", randomColor());
        })
    })
})