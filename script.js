"use strict";

const tempInput = document.getElementById("tempF");
const convertButton = document.getElementById("converter");
const resultsSpan = document.getElementById("resultsSpan");

function handleConversion(event) {
  event.preventDefault();

  const valueInput = document.querySelector("#selectorInput").value;
  const valueOutput = document.querySelector("#selector").value;
  const tempF = parseInt(document.getElementById("tempF").value);

  //from fehrenheit-----------------------------------------------

  if (valueInput === "fahrenheit" && valueOutput === "fahrenheit") {
    resultsSpan.innerHTML = `${tempF}° F`;
  } else if (valueInput === "fahrenheit" && valueOutput === "celsius") {
    resultsSpan.innerHTML = `${+(((tempF - 32) * 5) / 9).toFixed(2)}° C`;
  } else if (valueInput === "fahrenheit" && valueOutput === "kelvin") {
    resultsSpan.innerHTML = resultsSpan.innerHTML = `${+(
      ((tempF + 459.67) * 5) /
      9
    ).toFixed(2)}° K`;
  } else if (valueInput === "fahrenheit" && valueOutput === "rankine") {
    resultsSpan.innerHTML = `${+(tempF + 459.67).toFixed(2)}° Ra`;
  } else if (valueInput === "fahrenheit" && valueOutput === "romer") {
    resultsSpan.innerHTML = `${+(((tempF - 32) * 7) / 24 + 7.5).toFixed(
      2
    )}° Rø`;
  } else if (valueInput === "fahrenheit" && valueOutput === "delisle") {
    resultsSpan.innerHTML = `${+(((212 - tempF) * 5) / 6).toFixed(2)}° D`;
  } else if (valueInput === "fahrenheit" && valueOutput === "reaumur") {
    resultsSpan.innerHTML = `${+(((tempF - 32) * 4) / 9).toFixed(2)}° Ré`;
    //from celsius----------------------------------------------
  } else if (valueInput === "celsius" && valueOutput === "celsius") {
    resultsSpan.innerHTML = `${tempF}° C`;
  } else if (valueInput === "celsius" && valueOutput === "fahrenheit") {
    resultsSpan.innerHTML = `${+((tempF * 9) / 5 + 32).toFixed(2)}° F`;
  } else if (valueInput === "celsius" && valueOutput === "kelvin") {
    resultsSpan.innerHTML = `${+(tempF + 273.15).toFixed(2)}° K`;
  } else if (valueInput === "celsius" && valueOutput === "rankine") {
    resultsSpan.innerHTML = `${+(((tempF + 273.15) * 9) / 5).toFixed(2)}° Ra`;
  } else if (valueInput === "celsius" && valueOutput === "romer") {
    resultsSpan.innerHTML = `${+((tempF * 21) / 40 + 7.5).toFixed(2)}° Rø`;
  } else if (valueInput === "celsius" && valueOutput === "delisle") {
    resultsSpan.innerHTML = `${+(((100 - tempF) * 3) / 2).toFixed(2)}° D`;
  } else if (valueInput === "celsius" && valueOutput === "reaumur") {
    resultsSpan.innerHTML = `${+((tempF * 4) / 5).toFixed(2)}° Ré`;
    //from kelvin---------------------------------------------
  } else if (valueInput === "kelvin" && valueOutput === "kelvin") {
    resultsSpan.innerHTML = `${tempF}° K`;
  } else if (valueInput === "kelvin" && valueOutput === "fahrenheit") {
    resultsSpan.innerHTML = `${+((tempF * 9) / 5 - 459.67).toFixed(2)}° F`;
  } else if (valueInput === "kelvin" && valueOutput === "celsius") {
    resultsSpan.innerHTML = `${+(tempF - 273.15).toFixed(2)}° C`;
  } else if (valueInput === "kelvin" && valueOutput === "rankine") {
    resultsSpan.innerHTML = `${+((tempF * 9) / 5).toFixed(2)}° Ra`;
  } else if (valueInput === "kelvin" && valueOutput === "romer") {
    resultsSpan.innerHTML = `${+(((tempF - 273.15) * 21) / 40 + 7.5).toFixed(
      2
    )}° Rø`;
  } else if (valueInput === "kelvin" && valueOutput === "delisle") {
    resultsSpan.innerHTML = `${+(((373.15 - tempF) * 3) / 2).toFixed(2)}° D`;
  } else if (valueInput === "kelvin" && valueOutput === "reaumur") {
    resultsSpan.innerHTML = `${+(((tempF - 273.15) * 4) / 5).toFixed(2)}° Ré`;

    //from rankine------------------------------------------------
  } else if (valueInput === "rankine" && valueOutput === "rankine") {
    resultsSpan.innerHTML = `${tempF}° Ra`;
  } else if (valueInput === "rankine" && valueOutput === "fahrenheit") {
    resultsSpan.innerHTML = `${+(tempF - 459.67).toFixed(2)}° F`;
  } else if (valueInput === "rankine" && valueOutput === "celsius") {
    resultsSpan.innerHTML = `${+(((tempF - 491.67) * 5) / 9).toFixed(2)}° C`;
  } else if (valueInput === "rankine" && valueOutput === "kelvin") {
    resultsSpan.innerHTML = `${+((tempF * 5) / 9).toFixed(2)}° K`;
  } else if (valueInput === "rankine" && valueOutput === "romer") {
    resultsSpan.innerHTML = `${+(((tempF - 491.67) * 7) / 24 + 7.5).toFixed(
      2
    )}° Rø`;
  } else if (valueInput === "rankine" && valueOutput === "delisle") {
    resultsSpan.innerHTML = `${+(((671.67 - tempF) * 5) / 6).toFixed(2)}° D`;
  } else if (valueInput === "rankine" && valueOutput === "reaumur") {
    resultsSpan.innerHTML = `${+(((tempF - 491.67) * 4) / 9).toFixed(2)}° Ré`;
    //from romer----------------------------------------------------
  } else if (valueInput === "romer" && valueOutput === "romer") {
    resultsSpan.innerHTML = `${tempF}° Rø`;
  } else if (valueInput === "romer" && valueOutput === "fahrenheit") {
    resultsSpan.innerHTML = `${+(((tempF - 7.5) * 24) / 7 + 32).toFixed(2)}° F`;
  } else if (valueInput === "romer" && valueOutput === "celsius") {
    resultsSpan.innerHTML = `${+(((tempF - 7.5) * 40) / 21).toFixed(2)}° C`;
  } else if (valueInput === "romer" && valueOutput === "kelvin") {
    resultsSpan.innerHTML = `${+(((tempF - 7.5) * 40) / 21 + 273.15).toFixed(
      2
    )}° K`;
  } else if (valueInput === "romer" && valueOutput === "rankine") {
    resultsSpan.innerHTML = `${+(((tempF - 7.5) * 24) / 7 + 491.67).toFixed(
      2
    )}° Ra`;
  } else if (valueInput === "romer" && valueOutput === "delisle") {
    resultsSpan.innerHTML = `${+(((60 - tempF) * 20) / 7).toFixed(2)}° D`;
  } else if (valueInput === "romer" && valueOutput === "reaumur") {
    resultsSpan.innerHTML = `${+(((tempF - 7.5) * 32) / 21).toFixed(2)}° Ré`;
    //from delisle---------------------------------------------------
  } else if (valueInput === "delisle" && valueOutput === "delisle") {
    resultsSpan.innerHTML = `${tempF}° D`;
  } else if (valueInput === "delisle" && valueOutput === "fahrenheit") {
    resultsSpan.innerHTML = `${+(212 - (tempF * 6) / 5).toFixed(2)}° F`;
  } else if (valueInput === "delisle" && valueOutput === "celsius") {
    resultsSpan.innerHTML = `${+(100 - (tempF * 2) / 3).toFixed(2)}° C`;
  } else if (valueInput === "delisle" && valueOutput === "kelvin") {
    resultsSpan.innerHTML = `${+(373.15 - (tempF * 2) / 3).toFixed(2)}° K`;
  } else if (valueInput === "delisle" && valueOutput === "rankine") {
    resultsSpan.innerHTML = `${+(671.67 - (tempF * 6) / 5).toFixed(2)}° Ra`;
  } else if (valueInput === "delisle" && valueOutput === "romer") {
    resultsSpan.innerHTML = `${(+60 - (tempF * 7) / 20).toFixed(2)}° Rø`;
  } else if (valueInput === "delisle" && valueOutput === "reaumur") {
    resultsSpan.innerHTML = `${+(80 - (tempF * 8) / 15).toFixed(2)}° Ré`;

    //from reaumur-----------------------------------------------------
  } else if (valueInput === "reaumur" && valueOutput === "reaumur") {
    resultsSpan.innerHTML = `${tempF}° Ré`;
  } else if (valueInput === "reaumur" && valueOutput === "fahrenheit") {
    resultsSpan.innerHTML = `${+((tempF * 9) / 4 + 32).toFixed(2)}° F`;
  } else if (valueInput === "reaumur" && valueOutput === "celsius") {
    resultsSpan.innerHTML = `${+((tempF * 5) / 4).toFixed(2)}° C`;
  } else if (valueInput === "reaumur" && valueOutput === "kelvin") {
    resultsSpan.innerHTML = `${+((tempF * 5) / 4 + 273.15).toFixed(2)}° K`;
  } else if (valueInput === "reaumur" && valueOutput === "rankine") {
    resultsSpan.innerHTML = `${+((tempF * 9) / 4 + 491.67).toFixed(2)}° Ra`;
  } else if (valueInput === "reaumur" && valueOutput === "romer") {
    resultsSpan.innerHTML = `${+((tempF * 21) / 32 + 7.5).toFixed(2)}° Rø`;
  } else if (valueInput === "reaumur" && valueOutput === "delisle") {
    resultsSpan.innerHTML = `${+(((80 - tempF) * 15) / 8).toFixed(2)}° D`;
  }
}

convertButton.onclick = handleConversion;
