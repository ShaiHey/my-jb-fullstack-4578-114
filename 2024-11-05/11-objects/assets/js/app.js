// const name = "Beery"
// const gender = "Male"
// const age = 18;
// const hairColor = "Lightblack";
// const hairStyle = "Curley"
// const weight = 50;
// const height = 168;

// const nameMira = "Mira"
// const genderMira = "Female"
// const ageMira = 18;
// const hairColorMira = "Lightblack";
// const hairStyleMira = "Straight"
// const weightMira = 50;
// const heightMira = 168;

// Object is a collection of named data items, grouped in {}
const miraInfo = {
    name: "Mira",
    gender: "Female",
    age: 22,
    hairColor: "lightblack",
    hairStyle: "Straight",
    weight: 50,
    height: 170
}

// // We can access object properties
// miraInfo.hobby = "Shopping"
// alert(`Name : ${miraInfo.name}
// Gender : ${miraInfo.gender}
// Age : ${miraInfo.age}
// Hair Color : ${miraInfo.hairColor}
// Hair Style : ${miraInfo.hairStyle}
// Weight : ${miraInfo.weight}
// Height : ${miraInfo.height}
// Hobby : ${miraInfo.hobby}`)

// delete miraInfo.hobby
// document.write(miraInfo.hobby)

// const yoavInfo = mira; // asign to yoav the address of mira


// for-in loop
for (const key in miraInfo) {
    document.write(`${key} : ${miraInfo[key]}<br>`)
}