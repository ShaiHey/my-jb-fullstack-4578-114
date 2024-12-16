$(() => {
    $("ul").hide();

    $("h3").hover(
    function() {
        $(this).next().show();
    },
    function() {
        $(this).next().hide();
    });
})