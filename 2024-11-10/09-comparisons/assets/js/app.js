const myAge = 22;
const yourAge = "22";

// ALWAYS use strict comparison
if(myAge === yourAge){
    console.log("My age and your age are equal");
} else {
    console.log("My age and your age are NOT equal");
}

// Don't ever use weak comparison
if(myAge == yourAge){
    console.log("My age and your age are equal");
} else {
    console.log("My age and your age are NOT equal");
}

const num = 0;
const bool = false;

// ALWAYS use strict comparison
if(num === bool){
    console.log("num and bool are equal");
} else {
    console.log("num and bool are NOT equal");
}

// Don't ever use weak comparison
if(num == bool){
    console.log("num and bool are equal");
} else {
    console.log("num and bool are NOT equal");
}