/**
 * Function() constructor
 * 
 * expressão new
 * o nome com letra maiúscula ao 
 * criar novo objeto
 * this keyword (palavra chave)
 */


function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}

const kedma = new Person("Kedma")
const anne = new Person("Anne")

console.log(kedma.walk());
console.log(anne.walk());

// let name = new String("Kedma")

// console.log(name[0]);

// let date = new Date(2021 - 06 - 07)
// console.log(date);