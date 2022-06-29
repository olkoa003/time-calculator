const result = document.getElementById('datecalc__result');

export const printError = (errorText) => {
  result.innerText = errorText;
}

export function printResult({years, months, days}) {
  result.innerHTML = `Year: ${years} - Month: ${months} - Day: ${days}`;
}