const generatePassword = (length, allowSpecialChars) => {
    let possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const specialChars = '!@#$%^&*()'

    if(allowSpecialChars) possibleChars += specialChars;

    let password = ''

    for (let i = 0; i < length; i++) {
        const randomChar = Math.floor(Math.random() * possibleChars.length);
        password += possibleChars[randomChar];
    }

    return password;
}

module.exports = { generatePassword };