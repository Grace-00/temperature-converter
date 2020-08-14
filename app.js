window.addEventListener("DOMContentLoaded", (e) => {
    //store useful elements in variables
    const form = document.querySelector("form");
    const button = document.getElementById("submit");
    const result = document.getElementById("result");
    const userInput = document.getElementById("userInput");

  //listen for click on submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputValue = document.getElementById("userInput").value;
    const selectTemperature = document.getElementById("temperature").value;

    //transform c in f...
    const farenheit = (c) => {
        let f = (c * 9) / 5 + 32;
        return Math.round(f);
      };
      //...and viceversa
      const celsius = (f) => {
        let c = ((f - 32) * 5) / 9;
        return Math.round(c);
      };    