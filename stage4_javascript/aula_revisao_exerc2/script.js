/*

Criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
•	nome;
•	nota da primeira prova;
•	nota da segunda prova.

Calcular a média das provas e exibir -
Aprovado ou reprovado.

*/

let student = prompt("Digite o nome do aluno:")

let n1 = prompt("Digite a primeira nota da prova: ")
let n2 = prompt("Digite a segunda nota da prova: ")

let avegare = (Number(n1) + Number(n2))  / 2

let result = avegare >= 7

avegare = avegare.toFixed(2)

if (result) {
  alert ("A média do(a) aluno(a) " + student + " foi: "  + avegare +  " Parabéns, " + student + ". Você foi APROVADO(a) no concurso!") 
   
} else if(avegare < 7)  {
  alert ("A média do(a) aluno(a) " + student + " foi: " + avegare + " Não foi desta vez, " + student + ". Tente Novamente!")

}


