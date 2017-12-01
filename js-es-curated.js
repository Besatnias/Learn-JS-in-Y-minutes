// Los comentarios en JavaScript son los mismos como comentarios en C. 

//Los comentarios de una sola línea comienzan con //,
/* y los comentarios multilínea comienzan
   y terminan con */

// Cada sentencia puede ser terminada con punto y coma ;
hazAlgo();

// ... aunque no es necesario, ya que el punto y coma se agrega automáticamente
// cada que se detecta una nueva línea, a excepción de algunos casos.
hazAlgo()

// Dado que esta práctica puede llevar a resultados inesperados, seguiremos agregando
// punto y coma en esta guía.

///////////////////////////////////
// 1. Números, Strings y Operadores

// JavaScript tiene un solo tipo de número (doble de 64-bit IEEE 754).
// Así como con Lua, no te espantes por la falta de enteros: los dobles tienen 52 bits
// de mantisa, lo cual es suficiente para guardar enteros de hasta 9✕10¹⁵.
3; // = 3
1.5; // = 1.5

// Toda la aritmética básica funciona como uno esperaría.
1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7

// Incluyendo divisiones con resultados no enteros.
5 / 2; // = 2.5

// Las operaciones con bits también funcionan; cuando ejecutas una operación con bits
// el número flotante se convierte a entero con signo *hasta* 32 bits.
1 << 2; // = 4

// La jerarquía de las operaciones se aplica con paréntesis.
(1 + 3) * 2; // = 8

// Hay tres casos especiales de valores con los números:
Infinity; // por ejemplo: 1/0
-Infinity; // por ejemplo: -1/0
NaN; // por ejemplo: 0/0

// También hay booleanos:
true;
false;

// Los Strings se pueden crear con ' o ".
'abc';
"Hola, mundo";

// La negación se aplica con la expresión ! 
!true; // = false
!false; // = true

// Para comprobar una igualdad se usa ===
1 === 1; // = true
2 === 1; // = false

// Para comprobar una desigualdad se usa !==
1 !== 1; // = false
2 !== 1; // = true

// Más comparaciones
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// Los Strings se concatenan con +
"¡Hola " + "mundo!"; // = "¡Hola mundo!"

// y se comparan con < y con >
"a" < "b"; // = true

// Los tipos no importan con el operador ==...
"5" == 5; // = true
null == undefined; // = true

// ...a menos que uses ===
"5" === 5; // = false
null === undefined; // false

// Los Strings funcionan como arreglos de caracteres
// Puedes acceder a cada caracter con la función charAt()
"Este es un String".charAt(0);  // = 'E'

// ...o puedes usar la función substring() para acceder a pedazos más grandes
"Hola Mundo".substring(0, 4); // = "Hola"

// length es una propiedad, así que no uses ()
"Hola".length; // = 4

// También hay null y undefined
null; // usado para indicar una falta de valor deliberada
undefined; // usado para indicar que un valor no está presente actualmente
           // (aunque undefined es un valor en sí mismo)

// false, null, undefined, NaN, 0 y "" es false; todo lo demás es true.
// Note que 0 es false y "0" es true, a pesar de que 0 == "0".
// Aunque 0 === "0" sí es false.

///////////////////////////////////
// 2. Variables, Arrays y Objetos

// Las variables se declaran con las palabras const, let y var. JavaScript cuenta con tipado dinámico,
// así que no se necesitan aplicar tipos. La asignación se logra con el operador =.
// var es de las versiones anteriores, luego se introdujeron const y let (const para todo menos
// texto o números que van a cambiar, y let para las cosas que necesitan cambiar como en los loops)
let miPrimeraVariable = 5;

// si no escribes la palabra var no se marcará ningún error... (a menos de que uses 'use strict')
miSegundaVariable = 10;

// ...pero tu variable se declarará en el ámbito global, no en el ámbito
// en el que se definió.

// Las variables que no están aún asignadas tienen el valor undefined.
// No se puede no asignar con const o sale error
let miTerceraVariable; // = undefined

// Existen atajos para realizar operaciones aritméticas:
miPrimeraVariable += 5; // equivalente a miPrimeraVariable = miPrimeraVariable + 5;
                        // miPrimeraVariable ahora es 10
miPrimeraVariable *= 10; // ahora miPrimeraVariable es 100

// Y atajos aún más cortos para sumar y restar 1
miPrimeraVariable++; // ahora miPrimeraVariable es 101
miPrimeraVariable--; // de vuelta a 100

// Los arreglos son listas ordenadas de valores, de cualquier tipo.
const miArreglo = ["Hola", 45, true];

// Los miembros de un arreglo pueden ser accesados con la sintaxis 
// de indices dentro de corchetes [].
// Los índices empiezan en cero.
miArreglo[1]; // = 45

// Los arreglos son mutables y pueden cambiar de longitud.
miArreglo.push("Mundo");
miArreglo.length; // = 4

// Agregar/Modificar en un determinado índice
miArreglo[3] = "Hola";

// Los objetos en JavaScript son equivalentes a los 'diccionarios' o 'mapas' en otros
// lenguajes: una colección de pares llave/valor desordenada.
let miObjeto = {llave1: "Hola", llave2: "Mundo"};

// Las llaves son strings, pero no se necesitan las comillas si son un identificador
// válido de JavaScript. Los valores pueden ser de cualquier tipo.
let miObjeto = {miLlave: "miValor", "mi otra llave": 4};

// Los atributos de los objetos también pueden ser accesadas usando
//  la sintaxis de corchetes,
miObjeto["mi otra llave"]; // = 4

// ... o usando la sintaxis de punto, dado que la llave es un identificador válido.
miObjeto.miLlave; // = "miValor"

// Los objetos son mutables; los valores pueden ser cambiados y se pueden
// agregar nuevas llaves.
miObjeto.miTerceraLlave = true;

// Si intentas acceder con una llave que aún no está asignada tendrás undefined.
miObjeto.miCuartaLlave; // = undefined

///////////////////////////////////
// 3. Lógica y estructura de control

// La sintaxis de esta sección es casi idéntica a la de Java. 

// La estructura if funciona de la misma forma.
let contador = 1;
if (contador == 3){
    // evaluar si contador es igual a 3
} else if (contador == 4){
    // evaluar si contador es igual a 4
} else {
    // evaluar si contador no es igual a 3 ni a 4
}

// la esctructura for es la misma que la de C y Java:
// inicialización; condición; iteración.
for (let i = 0; i < 5; i++){
    // correrá cinco veces
}

// && es un "y" lógico, || es un "o" lógico
if (casa.tamaño == "grande" && casa.color == "azul"){
    casa.contiene = "oso";
}
if (color == "rojo" || color == "azul"){
    // el color es rojo o azul
}

// && y || "corto circuito", lo cual es útil para establecer valores por defecto.
const nombre = otroNombre || "default";


// la estructura switch usa === para sus comparaciones
// usa 'break' para terminar cada caso 
// o los casos después del caso correcto serán ejecutados también. 
calificación = 'B';
switch (calificación) {
  case 'A':
    console.log("Excelente trabajo");
    break;
  case 'B':
    console.log("Buen trabajo");
    break;
  case 'C':
    console.log("Puedes hacerlo mejor");
    break;
  default:
    console.log("Muy mal");
    break;
}


///////////////////////////////////
// 4. Funciones, ámbitos y closures

// Las funciones en JavaScript son declaradas con la palabra clave "function".
function miFunción(miArgumentoString){
    return miArgumentoString.toUpperCase(); //la funcion toUpperCase() vuelve todo
    // el String a mayúsculas
}
miFunción("foo"); // = "FOO"

// Se pueden declarar también como variables a las que se les asigna una función anónima
const miFunción = (miArgumentoString) =>
    toUpperCase(miArgumentoString) // No hace falta el 'return' si no se colocan {} en
    // las funciones anónimas, pero solo pueden llevar una sentencia. Si son más, se ponen
    // corchetes de la siguiente manera:

const miFunción = (miArgumentoString) => {
    console.log(miArgumentoString)
    const nuevoArg = toUpperCase(miArgumentoString)
    console.log(nuevoArg)
    return nuevoArg
}

// Note que el valor a ser regresado debe estar en la misma línea que la
// palabra clave 'return', de otra forma la función siempre regresará 'undefined' 
// debido a la inserción automática de punto y coma.
function miFunción()
{
    return // <- punto y coma insertado aquí automáticamente
    {
        estaEsUna: 'propiedad'
    }
}
miFunción(); // = undefined al mandar a llamar la función

// Las funciones en JavaScript son de primera clase, así que pueden ser asignadas
// a variables y pasadas a otras funciones como argumentos - por ejemplo:
function miFunción(){
    // este código será llamado cada cinco segundos
}
setTimeout(miFunción, 5000);
// Note: setTimeout no es parte de JS, pero lo puedes obtener de los browsers
// y Node.js.

// Es posible declarar funciones sin nombre - se llaman funciones anónimas
// y se definen como argumentos de otras funciones.
setTimeout(function(){
    // este código se ejecuta cada cinco segundos
}, 5000);

// JavaScript tiene ámbitos de funciones; las funciones tienen su propio ámbito pero
// otros bloques no.
if (true){
    const i = 5; // Pero evita declarar variales dentro de if-else, ponlas afuera y dales valor adentro
}
i; // = 5 - en un lenguaje que da ámbitos por bloque esto sería undefined, pero no aquí.

// Pero igual es recomendable hacer así:

let i;
if (true) i = 5

// Este conlleva a un patrón de diseño común llamado "ejecutar funciones anónimas 
//inmediatamente", que preveé variables temporales de fugarse al ámbito global
(function(){
    const temporal = 5;
    // Podemos acceder al ámbito global asignando al 'objeto global', el cual
    // en un navegador siempre es 'window'. El objeto global puede tener
    // un nombre diferente en ambientes distintos, por ejemplo Node.js (global).
    global.permanente = 10; // por favor, evita siempre declarar globales dentro de funciones... ¬¬
})();
temporal; // da ReferenceError
permanente; // = 10

// Una de las características más útiles de JavaScript son los closures.
// Si una función es definida dentro de otra función, la función interna tiene acceso
// a todas las variables de la función externa, incluso aunque la función 
// externa ya haya terminado.
function decirHolaCadaCincoSegundos(nombre){
    const texto = "¡Hola, " + nombre + "!";
    // Las funciones internas son puestas en el ámbito local por defecto
    // como si fueran declaradas con 'var'.
    function interna(){
        alert(texto);
    }
    setTimeout(interna, 5000);
    // setTimeout es asíncrono, así que la función decirHolaCadaCincoSegundos 
    // terminará inmediatamente, y setTimeout llamará a interna() a los cinco segundos
    // Como interna está "cerrada dentro de" decirHolaCadaCindoSegundos, interna todavía tiene
    // acceso a la variable 'texto' cuando es llamada.
}
decirHolaCadaCincoSegundos("Adam"); // mostrará una alerta con "¡Hola, Adam!" en 5s

///////////////////////////////////
// 5. Más sobre objetos; constructores y prototipos

// Los objetos pueden contener funciones.
const miObjeto = {
    miFunción: function(){
        return "¡Hola Mundo!";
    }
};
miObjeto.miFunción(); // = "¡Hola Mundo!"

// Cuando las funciones de un objeto son llamadas, pueden acceder a las variables 
// del objeto con la palabra clave 'this'.
miObjeto = {
    miString: "¡Hola Mundo!",
    miFunción: function(){
        return this.miString;
    }
};
miObjeto.miFunción(); // = "¡Hola Mundo!"

// Las funciones de un objeto deben ser llamadas dentro del contexto de ese objeto.
const miFunción = myObj.miFunción;
miFunción(); // = undefined

// Una función puede ser asignada al objeto y ganar acceso a él gracias a esto,
// incluso si no estaba dentro del objeto cuando este se definió.
const miOtraFunción = function(){
    return this.miString.toUpperCase();
}
miObjeto.miOtraFunción = myOtherFunc;
miObjeto.miOtraFunción(); // = "¡HOLA MUNDO!"
