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

// let color = 'blue';

// switch (color) {

//   case 'green':
//     console.log('go');
//     break;

//   case 'yellow':
//     console.log('attention');
//     break;

//   case 'red':
//     console.log('stop');
//     break;

//   default:
//     console.log('I don/t know');
// }
// // laços de repetição
// // for
// // for each
// // for in
// // while
// // do while
// // break pára a iteração e o continue volta para a iteração

// let n = 7;

// for (let i = 0; i <= 10; i++) {


//   console.log(`${i} X ${n} = ${i*n}`);

// }

// funções são trechos de códigos que podem ser reutilizados
// classe agrupa métodos e atributos no mesmo lugar
// argumentos ou parâmetros sãao informações que as funções precisam.
// funções nativas são as já existentes.

// function calc(x1, x2, operator){

//     return eval(`${x1} ${operator} ${x2}`);

// }

// let result = calc(1, 2, '+');

// console.log(result);


// (function(x1, x2, operator){

//   return eval(`${x1} ${operator} ${x2}`);

// })(1, 2, '*');


// arrow function é uma forma mais simples de escrever function
// o que acontece dentro dela fica dentro dela

// let calc = (x1, x2, operator) => {

//     return eval(`${x1} ${operator} ${x2}`);

// }

// console.log(calc(1, 2, '*'));

// função de retorno como parâmetro após uma ação CALLBACK
// DOM document Object Model é a estrutura como o HTML é formado.
// eventos : ações realizadas na aplicação que dispara rotinas.

window.addEventListener('focus', event => {

    console.log('focus');

});

// window é a janela, manipulamos a aplicação
// document é o próprio website

document.addEventListener('click', event => {

    console.log('click');

});

// retorna um timestamp de quantos segundos tem de 1970 até agora
let now = Date.now();

console.log(now);

// retorna uma data atual

let timeNow = new Date;

console.log(timeNow.getDate()); // retorna o dia

console.log(timeNow.getFullYear()); // retorna o ano

console.log(timeNow.getMonth()); // retorna o mês

// array coleção de valores sempre

let cars = ['palio 98', 'toro', 'uno', 10, true, new Date(), function(){}];

// array.length para saber a quantidade

console.log(cars[5].getMonth());

// forEach para iterar sobre os elementos do array

cars.forEach(function(value, index){

    console.log(index, value);

});


let ciaAirs = ['tam', 'varig', 'azul', 'gol', 'rayanair'];

ciaAirs.forEach(function(value, index){

      console.log(index, value);


});


// POO dentro de uma classe uma variável é um atributo e uma função é um método
// o atributo você pode chamar onde vc quiser dentro de uma classe
// método é a mesma coisa que a function porém você não precisa mais da palavra function
// tem que estar dentro de uma classe
// THIS é um comando interno usado paraa referenciar ATRIBUTOS E MÉTODOS na mesma classe.
// Classe é um conjunto de atributos e métodos
// Atributos informações armazenadas Métodos são acões que a classe executa
// Instância é quando o objeto representa uma classe
// quanto mais inteligente a sua classe, mais limpo seu código final.


let cellphone = function(){

    this.color = 'silver';


    this.call = function()
    {
        console.log('one call');
    }
}


let object = new cellphone();

console.log(object)






