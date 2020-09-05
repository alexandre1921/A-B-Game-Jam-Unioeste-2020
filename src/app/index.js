// eu dividi o codigo em 2 partes
// Animacoes que tem relacao com o personagem, rato ou cenario
// Funcionalidades são as coisas como onde o jogador faz o click, cria o canvas e contexto e o listener para pegar qual tecla foi acionada
import canvasCtx from "./Funcionalidades/canvasCtx.js";
import mouse from "./Funcionalidades/mouse.js";
import audio from "./Funcionalidades/audio.js";
import cenario from "./Animacoes/cenario.js";
import rato from "./Animacoes/rato.js";
audio();
// criando canvas e o contexto
let { canvas, ctx } = canvasCtx();
function executar() {
  // desenhar faz os desenhos na ordem certa, por exemplo, o personagem tem que ser desenhado depois do cenário
  desenhar();
  // requestAnimationFrame é responsável pela atualização dos quadros
  window.requestAnimationFrame(executar);
  // faz a animação do rato andando
  rato.andar();
}
function desenhar() {
  // ordem de desenho cenario, personagem, rato
  cenario.desenhar(ctx);
  // ctx.beginPath();
  // ctx.moveTo(rato.posX + 150, rato.posY + 30);
  // ctx.lineTo(mouseX, mouseY);
  // ctx.stroke();
  rato.desenhar(ctx);
}
// executar roda a primeira função que vai chamar outras funçoes e vai pedir a requestAnimationFrame
executar();
// isto é para sabermos onde o mouse está e onde clickou
mouse.eventListener(canvas);
rato.eventListener();
