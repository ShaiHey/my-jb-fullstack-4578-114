const emp = {
    firstName: "Shai",
    lastName: "Heyman",
    salary: 30000,
    eMail: "shaihey@test.com",
    phoneNumber: "0132222222"
}

document.write(`First Name : ${emp.firstName}<br>Last Name : ${emp.lastName}<br>Salary : ${emp.salary}<br>eMail : ${emp.eMail}<br>Phone : ${emp.phoneNumber}<br>`);

// Object.keys(emp).forEach(key => {
//     document.write(`${key}: ${emp[key]}<br>`);
// });

document.write("<hr/>");

for (const key in emp) {
    document.write(`${key} : ${emp[key]}<br>`);
}