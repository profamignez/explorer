const saida = document.querySelector(".saida");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 90);
  }
}

digitacao("Veja as lindas paisagens: Rio Grande do Sul e Joanópolis-SP!", 0);