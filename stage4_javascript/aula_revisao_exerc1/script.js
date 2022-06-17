/*

Solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

• A soma dos dois números;
• A subtração dos dois números;
• A multiplicação dos dois números;
• A divisão dos dois números;
• O resto da divisão dos dois números;

*/


let firstNumber = prompt ("Digite o primeiro número: ")
let secondNumber = prompt ("Digite o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + multi)
alert("Divisão: " + div)
alert("Resto da Divisão: " + restDiv)

const sum2 = ((firstNumber + secondNumber) % 2 == 0)

let result = sum2

if (result) {
  alert ("Esse número é: " + sum2 + " par")
} else {
  alert ("Esse número é: " + sum2 + " impar")

}


