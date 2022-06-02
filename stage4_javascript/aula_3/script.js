/* 
Solicitar o nome do aluno e as três notas:

A média positiva deverá ser maior que 6
Se o aluno  passou no bimestre dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação.

Em ambos os caos mostre uma mensagem com o nome do aluno e a nota.
*/

let student = prompt("Qual o nome do aluno(a)")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3= prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

//toFixed() - casas decimais

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if(average < 3) {
  alert("Reprovado")
}
 else {
    alert(student + " estude para sua prova de recuperação! Sua média foi de: " + average) 
}



