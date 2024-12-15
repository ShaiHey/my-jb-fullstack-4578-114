"use strict";

(() => {

  function showThis() {
    console.log(this);
  }

  document.getElementById('btn').addEventListener("click", showThis);

  console.log(this);

  showThis();

  function paintGreen() {
    this.style.backgroundColor = "green";
  }

  document.getElementById("myDiv").addEventListener("click", paintGreen)
  document.getElementById("greenBtn").addEventListener("click", paintGreen)

  document.getElementById("greenBtnTimeout").addEventListener("click", function() {
    const that = this;
    setTimeout(function() {
      that.style.backgroundColor = "green";
    }, 1000);
  })

  document.getElementById("greenBtnTimeout2").addEventListener("click", function() {
    setTimeout(paintGreen.bind(this), 1000);
  })

  document.getElementById("greenBtnTimeout3").addEventListener("click", function() {
    setTimeout(() => {
      this.style.backgroundColor = "green";
    }, 1000);
  })
})();