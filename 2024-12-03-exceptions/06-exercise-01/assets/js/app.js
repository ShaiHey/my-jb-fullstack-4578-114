const applyCode = () => {
    const userCode = document.getElementById("code").value;

    try {
        eval(userCode);
    } catch (error) {
        alert(error);
    }
}