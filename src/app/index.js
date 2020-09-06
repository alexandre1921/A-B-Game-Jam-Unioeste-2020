// eu dividi o codigo em 2 partes
// Animacoes que tem relacao com o personagem, rato ou cenario
// Funcionalidades são as coisas como onde o jogador faz o click, cria o canvas e contexto e o listener para pegar qual tecla foi acionada
import canvasCtx from "./Funcionalidades/canvasCtx.js";
import mouse from "./Funcionalidades/mouse.js";
import audio from "./Funcionalidades/audio.js";
import randomNumber from "./Funcionalidades/randomNumber.js";
import cenario from "./Animacoes/cenario.js";
import rato from "./Animacoes/rato.js";
import { fabricaAldeao } from "./Animacoes/fabricaAldeao.js";
audio();

const closeBtn = document.getElementById("start-btn");
const menu = document.getElementById("menu");
const sound = document.getElementById("sound-on");
const soundOff = document.getElementById("sound-off");
const pauseBtn = document.getElementById("pause");

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
  rato.desenhar(ctx);
  for (var i = 0; i < aldeaos.length; i++) {
    aldeaos[i].desenhar(ctx, cenario, rato);
  }
}
// executar roda a primeira função que vai chamar outras funçoes e vai pedir a requestAnimationFrame
let aldeaos = [];
let quantidadeAldeaos = 90;
for (var i = 0; i < quantidadeAldeaos; i++) {
  aldeaos.push(
    fabricaAldeao(randomNumber(1280, 11520), randomNumber(470, 550))
  );
}
executar();
// isto é para sabermos onde o mouse está e onde clickou
mouse.eventListener(canvas);
rato.eventListener(aldeaos);

closeBtn.addEventListener("click", () => menu.classList.add("hidden"));
sound.addEventListener("click", () => sound.classList.replace("soundOff"));
pauseBtn.addEventListener("click", () => menu.classList.add("show"));
closeBtn.addEventListener("click", () => menu.classList.remove("show"));
