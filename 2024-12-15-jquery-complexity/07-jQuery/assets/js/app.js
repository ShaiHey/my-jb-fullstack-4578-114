$(() => {
    $("#btn1").css("background-color", "green");

    $("#btn1").click(function (event) {
        $(this).css("background-color", "red");
        $(this).text("Clicked");
        $(this).fadeOut(2000).fadeIn(2000);
        $(this).addClass("shai")

        $("div").css("background-color", "red");

        // $("div").each(function () {
        //     $(this).css("background-color", "red");
        // })

        $.getJSON({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.warn(err);
            }
        })

        
    })
})