$(() => {
    $(".copy").click(function() {
        const input = $(this).closest('tr').find('input');
        $(this).closest('tr').find('.result').text(input.val());
        input.remove();
    });
})