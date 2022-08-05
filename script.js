"use strct";

const convertButton = document.getElementById("converter");
const resultsSpan = document.getElementById("resultsSpan");

function handleConversion(event) {
  event.preventDefault();

  const valueInput = document.querySelector("#selectorInput").value;
  const valueOutput = document.querySelector("#selector").value;
  const tempF = parseInt(document.getElementById("tempF").value);
  let toCelsius = 0;

  if (valueInput === "fahrenheit") {
    toCelsius = +(((tempF - 32) * 5) / 9).toFixed(2);
  } else if (valueInput === "celsius") {
    toCelsius = tempF;
  } else if (valueInput === "kelvin") {
    toCelsius = +(tempF - 273.15).toFixed(2);
  } else if (valueInput === "rankine") {
    toCelsius = +(((tempF - 491.67) * 5) / 9).toFixed(2);
  } else if (valueInput === "romer") {
    toCelsius = +(((tempF - 7.5) * 40) / 21).toFixed(2);
  } else if (valueInput === "delisle") {
    toCelsius = +(100 - (tempF * 2) / 3).toFixed(2);
  } else {
    toCelsius = +((tempF * 5) / 4).toFixed(2);
  }

  valueOutput === "fahrenheit"
    ? (resultsSpan.innerHTML = `${+((toCelsius * 9) / 5 + 32).toFixed(2)}° F`)
    : valueOutput === "celsius"
    ? (resultsSpan.innerHTML = `${toCelsius}° C`)
    : valueOutput === "kelvin"
    ? (resultsSpan.innerHTML = `${+(toCelsius + 273.15).toFixed(2)}° K`)
    : valueOutput === "rankine"
    ? (resultsSpan.innerHTML = `${+(((toCelsius + 273.15) * 9) / 5).toFixed(
        2
      )}° Ra`)
    : valueOutput === "romer"
    ? (resultsSpan.innerHTML = `${+((toCelsius * 21) / 40 + 7.5).toFixed(
        2
      )}° Rø`)
    : valueOutput === "delisle"
    ? (resultsSpan.innerHTML = `${+(((100 - toCelsius) * 3) / 2).toFixed(
        2
      )}° D`)
    : (resultsSpan.innerHTML = `${+((toCelsius * 4) / 5).toFixed(2)}° Ré`);
}

convertButton.onclick = handleConversion;
