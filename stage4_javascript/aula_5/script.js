/* 
** Jogo da Adivinhação **

Apresentar a mensagem ao usuário:
"Adivinhe o número que estou pensando? Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sisitema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem:
"Erro, tente novamente:"

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você advinhou o número em x tentativas"

Substitua o "x" da mensagem, pelo número de tentativas

*/

const result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

/*
Math.ceil(Math.random() * 10) Arredonda para cima

Math.round(Math.random() * 10) Arredonda para cima ou baixo.
*/

const randomNumber = Math.round(Math.random() * 10)
const match = Number(result) == randomNumber

console.log(result, randomNumber, match)



