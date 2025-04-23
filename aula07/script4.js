const imagem = document.getElementById("imagemPrincipal");

function mostrarImagem(numero) {
  if (numero === 1) {
    imagem.src = "img/richard.jpg";
  } else if (numero === 2) {
    imagem.src = "img/estevao.jpg";
  } else if (numero === 3) {
    imagem.src = "img/piquerez.jpg";
  }
}
