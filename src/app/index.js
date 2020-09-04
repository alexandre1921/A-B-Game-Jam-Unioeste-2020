// Get the current window
var win = nw.Window.get();

win.maximize();

var canvas;
var ctx;
var spriteW = 240;
var spriteH = 350;
var frameW = 60;
var frameH = 90;
var frames = 1;
var imagem = new Image();
imagem.src = "../assets/personagem.png";

var movimento = {
  esquerda: 1,
  direita: 2,
  sobe: 3,
  desce: 4,
};
var personagem = {
  linha: 0,
  coluna: 0,
  posX: 0,
  posY: 0,
  desenhar: function () {
    ctx.drawImage(
      (() => {
        let imagem = new Image();
        imagem.src = "../assets/personagem.png";
        return imagem;
      })(),
      this.coluna,
      this.linha,
      frameW,
      frameH,
      this.posX,
      this.posY,
      frameW,
      frameH
    );
  },
  andar: function () {
    this.coluna +=
      this.coluna == spriteW - frameW ? -(spriteW - frameW) : frameW;
    //frames++;
    switch (direcao) {
      case 1:
        this.posX -= 20;
        break;
      case 2:
        this.posX += 20;
        break;
      case 3:
        this.posY -= 20;
        break;
      case 4:
        this.posY += 20;
        break;
    }
  },
};
function limpatela() {
  // ctx.beginPath();
  // ctx.fillStyle = "white";
  // ctx.fillRect(0, 0, 800, 600);
  ctx.drawImage(
    (() => {
      let imagem = new Image();
      imagem.src = "../assets/backgroundCheio.png";
      return imagem;
    })(),
    0,
    0
  );
}
function executar() {
  limpatela();
  desenhar();
  window.requestAnimationFrame(executar);
}
function desenhar() {
  personagem.desenhar();
}
function atualizar() {
  personagem.andar();
}
function iniciar() {
  canvas = document.createElement("canvas");
  ctx = canvas.getContext("2d");
  canvas.height = 600;
  canvas.width = 800;
  document.body.appendChild(canvas);
  direcao = 0;
  executar();
}

function KeyDown(evt) {
  switch (evt.keyCode) {
    case 37 /*seta para esquerda*/:
      direcao = movimento.esquerda;
      personagem.linha = frameH * 2;
      break;
    case 38 /*seta para cima*/:
      direcao = movimento.sobe;
      personagem.linha = frameH;
      break;
    case 39 /*seta para direita*/:
      direcao = movimento.direita;
      personagem.linha = frameH * 3;
      break;
    case 40 /*seta para baixo*/:
      direcao = movimento.desce;
      personagem.linha = 0;
      break;
  }
  atualizar();
}
window.addEventListener("keydown", KeyDown);
iniciar();
// import keyController from "./keyController.js";
// new keyController(paddle);
