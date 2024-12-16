$(() => {
    $("#fill").click(function () {
        const start = $('#firstNumber').val();
        const end = $('#secondNumber').val();
        let HTML = "";
    
        for (let i = start; i <= end; i++) {
            HTML += `<option value="${i}">${i}</option>`;
        }
    
        $('#list').append(HTML);
    })
})