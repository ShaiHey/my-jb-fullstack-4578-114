const password = prompt("Please enter a password:");

if (password.length < 6) {
    document.write("Password is too short.");
} else {
    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecialChar = /[!@#$%^&*()_+[\]{}|;:,.<>?/]/.test(password);

    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
        document.write("Password is strong.");
    } else {
        document.write("Password is not strong enough.<br>");
        if (!hasUpperCase) document.write("Missing an uppercase letter.<br>");
        if (!hasLowerCase) document.write("Missing a lowercase letter.<br>");
        if (!hasNumber) document.write("Missing a number.<br>");
        if (!hasSpecialChar) document.write("Missing a special character.<br>");
    }
}