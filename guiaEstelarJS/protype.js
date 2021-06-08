/**
 * JS baseada em protótipos e tem uma cadeia própria protótipos.
 *
 * Prototype
 *
 * prototype-based language
 * prototype chain
 * __proto__
 *
 */

// Type conversion (typecasting) vs Type coersion

/**
 * Faz Alteração do tipo de dado para outro
 * Type conversion (typecasting) - explicitamente eu(humano) altero o tipo de dado
 * Type coersion - quando o Javascript(maquina só) implicitamente faz essa troca
 * 
 */

console.log('9' + 5); //coersion quando o js força a conversão
console.log(Number('9') + 5); //conversion na mão(explicitamente)

//Transformar string em numero e vice-versa

let string = "123"
console.log(Number(string));
let number = 321
console.log(String(number).length);
let numeros = 13254456.4655555
console.log(numeros.toFixed(2).replace(".", ","));
let word = "Amo programar"
console.log(word.toLowerCase().toUpperCase());
let phrase = "Eu quero aprender a programar"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())
console.log(phrase.includes("programar"));

//Transformar uma String em myArray em elementos de um array
/** let word = "manipulação"
console.log(Array.from(word))
*/

//Manipulando Arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")
//add no começo do array
techs.unshift("sql");
//remover do fim
techs.pop()
//remover do inicio
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3));
//remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)
//encontrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)
console.log(techs);