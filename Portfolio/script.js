const fraseEfeito = document.getElementById("fraseEfeito");

const frases = [
  "<p>\"Bacon pancakes.<br>I'm making bacon pancakes.\"<br>- Jake</p>",
  "<p>\"Dai é só cortar os zero tudo.\"<br>- Albert Einstein</p>",
  "<p>\"Calça tá apertada.\"<br>- Michael Jackson</p>",
  "<p>\"Se liga no celular do pai!\"<br>- Steve Jobs"
];


function startFraseChanger() {
  let i = 0;

  function fraseChanger() {
    if (i === frases.length) {
      i = 0;
    }
    fraseEfeito.innerHTML = frases[i++];
  }

  return fraseChanger;
}


let fraseChanger = startFraseChanger();

fraseChanger();

setInterval(() => {
  fraseChanger();
}, 5000);