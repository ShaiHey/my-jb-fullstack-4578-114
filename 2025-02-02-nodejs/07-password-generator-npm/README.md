# `password-generator-shaihey`

A simple and flexible random password generator in JavaScript. Create secure and customizable passwords for your applications or projects with easy-to-use options.

## Installation

You can install the package via npm or yarn:

```bash
npm install password-generator-shaihey
```

or

```bash
yarn add password-generator-shaihey
```

## Usage

### Import the package

```javascript
const { generatePassword } = require('password-generator-shaihey');
```

### Generate a Password

The password generator takes two parameters:

- `length` (required): The desired length of the password.
- `allowSpecialChars` (optional): A boolean flag that specifies whether special characters should be included (defaults to `false`).

#### Example: Simple password generation (no special characters)

```javascript
const password = generatePassword(12);
console.log(password);  // Example: 'aB3d5Fg7H9K1'
```

#### Example: Password generation with special characters

```javascript
const password = generatePassword(16, true);
console.log(password);  // Example: 'aB!2dF#5gH7$K1J9'
```

## API

### `generatePassword(length, allowSpecialChars)`

#### Arguments:

- `length` (number): The desired length of the password (required).
- `allowSpecialChars` (boolean): If `true`, special characters will be included in the password. Defaults to `false`.

#### Returns:

- `string`: A randomly generated password based on the specified criteria.

## Full Example:

```javascript
const { generatePassword } = require('password-generator-shaihey');

// Generate a password of 12 characters without special characters
const password1 = generatePassword(12);
console.log(password1);  // Example: 'd7J3gF2B9vTq'

// Generate a password of 16 characters with special characters
const password2 = generatePassword(16, true);
console.log(password2);  // Example: 'aB3d$F2!gH7X8K9J'
```

## Tests

You can manually test the package by simply running the code in a Node.js environment. If you want to set up automated tests, consider using a testing framework like Mocha, Jest, etc.