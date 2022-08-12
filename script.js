"use strct";

const convertButton = document.getElementById("converter");
const resultsSpan = document.getElementById("resultsSpan");

function handleConversion(event) {
  event.preventDefault();

  const valueInput = document.querySelector("#selectorInput").value;
  const valueOutput = document.querySelector("#selector").value;
  const tempF = parseFloat(document.getElementById("tempF").value);
  let toCelsius;
  //converts all inputed temperatures to celsius
  switch (valueInput) {
    case "fahrenheit":
      toCelsius = +(((tempF - 32) * 5) / 9).toFixed(2);
      break;
    case "celsius":
      toCelsius = tempF;
      break;
    case "kelvin":
      toCelsius = +(tempF - 273.15).toFixed(2);
      break;
    case "rankine":
      toCelsius = +(((tempF - 491.67) * 5) / 9).toFixed(2);
      break;
    case "romer":
      toCelsius = +(((tempF - 7.5) * 40) / 21).toFixed(2);
      break;
    case "delisle":
      toCelsius = +(100 - (tempF * 2) / 3).toFixed(2);
      break;
    default:
      toCelsius = +((tempF * 5) / 4).toFixed(2);
  }
  //converts celsius to desired temperture
  let convertedText;
  switch (valueOutput) {
    case "fahrenheit":
      convertedText = `${+((toCelsius * 9) / 5 + 32).toFixed(2)}° F`;
      break;
    case "celsius":
      convertedText = `${toCelsius}° C`;
      break;
    case "kelvin":
      convertedText = `${+(toCelsius + 273.15).toFixed(2)}° K`;
      break;
    case "rankine":
      convertedText = `${+(((toCelsius + 273.15) * 9) / 5).toFixed(2)}° Ra`;
      break;
    case "romer":
      convertedText = `${+((toCelsius * 21) / 40 + 7.5).toFixed(2)}° Rø`;
      break;
    case "delisle":
      convertedText = `${+(((100 - toCelsius) * 3) / 2).toFixed(2)}° D`;
      break;
    default:
      convertedText = `${+((toCelsius * 4) / 5).toFixed(2)}° Ré`;
  }
  resultsSpan.innerHTML = convertedText;

  convertButton.onclick = handleConversion;
}
