// var helloWorld = "Hello world!!!";


// console.log(helloWorld);
// // console.log("Hello World!!!");


// /* variáveis de escopo
// let é uma variável que muda, leva em consideração onde você declarou a variável, tem escopo de bloco
// const não pode mudar, são constantes. ex.: conexão do banco de dados ou algo desse tipo.
// */

// // float ou ints são numbers em JavaScript

// // typeOf tipo de dado da variavél

// console.log(typeof(helloWorld));

// // instanceOf de qual instancia veio

// // boolean function linguagem fracamente tipada

// // functions de conversão parseInt, parseFloat

// // operadores

// let a = 20;
// const b = "20";

// console.log(a == b); // operador de comparação;

// // para comparar o tipo de variável vc usa ===
// // = atribuição == comparação de valor === comparação de tipo !== diferente

// console.log(a === b);
// console.log(a !== b);

// // != compara o valor e não o tipo

// // operadores lógicos && e ou ||

// console.log(a == b && typeof b == 'string');
// console.log(a == b && typeof a == 'string');

// // operador incremental a++ operador decremental a--

// let color = 'yellow';

// if (color === 'green') {

//   console.log('go');

// } else if (color === 'yellow') {

//   console.log('attention');

// } else {

//   console.log('stop');

// }

// if(condition) {instructions} uma condição verdadeira anula todas as variáveis

// switch analisa todos os casos

let color = 'blue';

switch (color) {

  case 'green':
    console.log('go');
    break;

  case 'yellow':
    console.log('attention');
    break;

  case 'red':
    console.log('stop');
    break;

  default:
    console.log('I don/t know');
}
// laços de repetição
// for
// for each
// for in
// while
// do while
// break pára a iteração e o continue volta para a iteração

let n = 7;

for (let i = 0; i <= 10; i++) {


  console.log(`${i} X ${n} = ${i*n}`);

}


