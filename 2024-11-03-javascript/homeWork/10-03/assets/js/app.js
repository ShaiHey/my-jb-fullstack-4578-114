const age = +prompt("Please enter your age :");
const minLicenseAge = 17;

if(age >= 17){
    document.write("You can pass the driving test you are of the required age")
} else {
    document.write(`You cannot pass the driving test because you are not the required age which is ${minLicenseAge} years old, you could pass the test in ${minLicenseAge-age} year(s)`)
}