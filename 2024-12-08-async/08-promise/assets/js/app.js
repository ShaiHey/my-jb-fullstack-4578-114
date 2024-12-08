"use strict";

(() => {

  const getNumberOfCandles = (dayNumber, successCallback, errorCallback) => {
    setTimeout(() => {
      if(typeof dayNumber !== "number") return errorCallback("Number is required");
      if(dayNumber < 1) return errorCallback("Day Number must be greater than 0");
      if(dayNumber > 8) return errorCallback("No Isru Hag in Hanukah");
      successCallback(dayNumber + 1);
    }, 3000);
  }

  document.getElementById("calc").addEventListener("click", () => {
    let day = 1;
    let sum = 0;
    setInterval(() => {
      getNumberOfCandles(day, result => {
        console.log(`Today : ${result} total : ${sum+=result}`);
      }, console.log);
      day++;
    }, 3000);
  });

  // getNumberOfCandles(1, day1 => {
  //   getNumberOfCandles(2, day2 => {
  //     getNumberOfCandles(3, day3 => {
  //       getNumberOfCandles(4, day4 => {
  //         getNumberOfCandles(5, day5 => {
  //           getNumberOfCandles(6, day6 => {
  //             getNumberOfCandles(7, day7 => {
  //               getNumberOfCandles(8, day8 => {
  //                 console.log(day1 + day2 + day3 + day4 + day5 + day6 + day7 + day8);
  //               }, console.log)
  //             }, console.log)
  //           }, console.log)
  //         }, console.log)
  //       }, console.log)
  //     }, console.log)
  //   }, console.log)
  // }, console.log);

  
})();