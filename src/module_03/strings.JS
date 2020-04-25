let cadena = "Hola Mundo";

/*PROPIEDADES*/
/* length -> Devuelve la longitud de la cadena*/
console.log(cadena.length);

/*METODOS*/
/*Todos los métodos devuelven una cadena nueva, la cadena original
no será modificada*/

console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

/*indexOf(string) -> Devuelve la posicion en la que se encunetra el 
string, si no lo encuentra devuelve -1*/
console.log(cadena.indexOf('o'));
console.log(cadena.indexOf('Hola'));

/*replace(valor a buscar, valor nuevo) -> Replaza el fragmento de 
la cadena que le digamos y pone el valor nuevo*/
console.log(cadena.replace('Mundo','Youtube'));

/*substring(inicio [,fin]) -> Extrae los caracteres desde inicio
hasta fin (el final no se incluye)
Si no se incluye el fin, extrae hasta el final*/
console.log(cadena.substring(3));
console.log(cadena.substring(3, 7));

/*slice(inicio [,fin]) -> Igual que substring pero admite valores
negativos, si ponemos valores negativos empezará desde atrás
Si no se incluye el final extrae hasta el final*/
 console.log(cadena.slice(-3));
 console.log(cadena.slice(0,-2));

 /*trim()-> Elimina los espacios al inicio y al final de la cadena*/
 let cadena2 = 'Hola youtube, estamos trabajando con cadenas';
 console.log(cadena2.trim());

 /*startWith(valor [,inicio]) -> Sirve para saber si la cadena
 empieza con ese valor. Devuelve true o false*/
 console.log(cadena.startsWith('H'));
 console.log(cadena.startsWith('h'));
 console.log(cadena.startsWith('M',5));

 /*endsWith(valor [,longitud]) -> Sirve para saber si la cadena 
 termina con ese valor. Devuelve true o false*/
 console.log(cadena.endsWith('o'));
 console.log(cadena.endsWith('o',4));
 console.log(cadena.endsWith('n',8));
 console.log(cadena.endsWith('Mundo'));

 /*includes(valor [,inicio]) -> Igual que indexOF pero duvuelve true
 o false */
 console.log(cadena.includes('n'));
 console.log(cadena.includes('a',5));
 console.log(cadena.includes('a',2));

 /*repeat(valor) -> Repite el string el número de veces que le 
 indiquemos*/
let cadena3 = 'Kagome';
console.log(cadena3.repeat(3));
console.log('r'.repeat(10));

/*Templates Strings*/

let nombre = 'Juan';
let apellido = 'Gomez';
let edad = 20;

console.log("Hola " + nombre + " " + apellido + ". Tienes " + edad + " años. ");
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`);
console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años`);
