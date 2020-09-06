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
const pauseBtn = document.getElementById("pause");
const tutorial = document.getElementById("tutorial");
const tutorialBtn = document.getElementById("tutorial-btn");
const tutorialClose = document.getElementById("close-btn");

let animationFrame;

// criando canvas e o contexto
let { canvas, ctx } = canvasCtx();
function executar() {
  // desenhar faz os desenhos na ordem certa, por exemplo, o personagem tem que ser desenhado depois do cenário
  desenhar();
  // requestAnimationFrame é responsável pela atualização dos quadros
  animationFrame = window.requestAnimationFrame(executar);
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
let quantidadeAldeaos = (cenario.Width / cenario.sceneW) * 15; // 100 aldeaos por cada frame
for (var i = 0; i < quantidadeAldeaos; i++) {
  aldeaos.push(
    fabricaAldeao(
      randomNumber(cenario.sceneW, cenario.Width),
      randomNumber(400, 550)
    )
  );
}
// isto é para sabermos onde o mouse está e onde clickou

mouse.eventListener(canvas);
rato.eventListener(aldeaos);
/* esconde o menu quando clica no botão start*/
closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});
menu.disabled = true;
/*Mostra o menu ao pausarmos o jogo*/
pauseBtn.addEventListener("click", () => {
  cancelAnimationFrame(animationFrame);
  menu.classList.add("show");
  menu.disabled = true;
});
/*Volta a esconder o menu quando clicado em start novamente*/
closeBtn.addEventListener("click", () => {
  if (menu.disabled) animationFrame = window.requestAnimationFrame(executar);
  menu.classList.remove("show");
  menu.disabled = false;
});

function desenharInicio() {
  cenario.desenharMenu(ctx);
  window.requestAnimationFrame(desenharInicio);
}

desenharInicio();

/*efeito do botão tutorial para aparecer e sumir junto do menu*/
tutorialBtn.addEventListener("click", () => menu.classList.add("hidden"));
tutorialBtn.addEventListener("click", () => tutorial.classList.add("hidden"));
tutorialClose.addEventListener("click", () =>
  tutorial.classList.remove("hidden")
);
tutorialClose.addEventListener("click", () => menu.classList.add("show"));
