const generatePassword = length => {
    const possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let password = ''

    for (let i = 0; i < length; i++) {
        const randomChar = Math.floor(Math.random() * possibleChars.length);
        password += possibleChars[randomChar];
    }

    return password;
}
module.exports = { generatePassword };