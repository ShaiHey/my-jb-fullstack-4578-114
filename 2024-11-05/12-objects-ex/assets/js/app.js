const empInfo = {
    firstName: "Shai",
    lastName: "Heyman",
    salary: 10000
}

for (const key in empInfo) {
    document.write(`${key} : ${empInfo[key]}<br>`);
}

empInfo.address = "HaMasger 34 Tel Aviv"

document.write(`Address of emp is : ${empInfo.address}<br>`);

delete empInfo.salary;

document.write(`Salary (After delete) : ${empInfo.salary}`);