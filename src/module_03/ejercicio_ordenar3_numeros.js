const numbers = document.getElementById("numbers");
const result = document.getElementById("result");

let a = prompt("Introduzca el primer número");
let b = prompt("Introduzca eñ segundo número");
let c = prompt("Introduzca eñ tercer número");

numbers = `Los numeros introducidos son ${a}, ${b}, ${c}`;

if (a >= b && a >= c) {
  if (b > c) {
    result = `El orden es: ${a}, ${b}, ${c}`;
  } else {
    result = `El orden es: ${a}, ${c}, ${b}`;
  }
} else if (b >= a && b >= c) {
  if (a > c) {
    result = `El orden es: ${b}, ${a}, ${c}`;
  } else {
    result = `El orden es: ${b}, ${c}, ${a}`;
  }
} else if (c >= a && c >= b) {
  if (a > b) {
    result = `El orden es: ${c}, ${a}, ${b}`;
  } else {
    result = `El orden es: ${c}, ${b}, ${a}`;
  }
}
