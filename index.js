var helloWorld = "Hello world!!!";


console.log(helloWorld);
// console.log("Hello World!!!");


/* variáveis de escopo
let é uma variável que muda, leva em consideração onde você declarou a variável, tem escopo de bloco
const não pode mudar, são constantes. ex.: conexão do banco de dados ou algo desse tipo.
*/

// float ou ints são numbers em JavaScript

// typeOf tipo de dado da variavél

console.log(typeof(helloWorld));

// instanceOf de qual instancia veio

// boolean function linguagem fracamente tipada

// functions de conversão parseInt, parseFloat

// operadores

let a = 20;
const b = "20";

console.log(a == b); // operador de comparação;

// para comparar o tipo de variável vc usa ===
// = atribuição == comparação de valor === comparação de tipo !== diferente

console.log(a === b);
console.log(a !== b);

// != compara o valor e não o tipo

// operadores lógicos && e ou || 

console.log(a == b && typeof b == 'string');
console.log(a == b && typeof a == 'string');

