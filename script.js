const pound = document.getElementById("pound");
const euro = document.getElementById("euro");
const dollar = document.getElementById("dollar");

const value = prompt("enter the value");

function getEuro(gbp) {
  return gbp * 1.18;
}

function calc(value) {
  return (euro.innerText = getEuro(value));
}
calc(value);
