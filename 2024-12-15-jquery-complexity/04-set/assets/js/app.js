"use strict";

(() => {
  const mySet = new Set();

  mySet.add("Shai");
  mySet.add("Beery");
  mySet.add("David");

  console.log(mySet.has("Shai"));
  console.log(mySet.has("efm"));

  console.log(mySet);

  
  const myNonUniqueArray = [10, 10, 10, 20, 30];
  const myUniqueSet = new Set(myNonUniqueArray);
  const myUniqueArray = [...myUniqueSet];

  console.log(myUniqueSet);
  console.log(myUniqueArray);
})();