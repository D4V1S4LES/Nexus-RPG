function atchin() {
  const dadoSelecionado = document.getElementById("dado").value;
  const maximoDado = parseInt(dadoSelecionado, 10);
  const numeroSorteado = Math.floor(Math.random() * maximoDado) + 1;

  document.getElementById("resultado").textContent =
  "Resultado: Você rodou um D" + dadoSelecionado + " e tirou " + numeroSorteado;
}