// eu dividi o codigo em 2 partes
// Animacoes que tem relacao com o personagem, rato ou cenario
// Funcionalidades são as coisas como onde o jogador faz o click, cria o canvas e contexto e o listener para pegar qual tecla foi acionada

import canvasCtx from "./Funcionalidades/canvasCtx.js";
import mouse from "./Funcionalidades/mouse.js";
import cenario from "./Animacoes/cenario.js";
import rato from "./Animacoes/rato.js";

const closeBtn = document.getElementById("start-btn");
const menu = document.getElementById("menu");
const pauseBtn = document.getElementById("pause");
const tutorial = document.getElementById("tutorial");
const tutorialBtn = document.getElementById("tutorial-btn");
const tutorialClose = document.getElementById("close-btn");
const historia = document.getElementById("historia");
const contHistoria = document.getElementById("conteudo-historia");


// criando canvas e o contexto
let { canvas, ctx } = canvasCtx();
function executar() {
  // desenhar faz os desenhos na ordem certa, por exemplo, o personagem tem que ser desenhado depois do cenário
  desenhar();
  // requestAnimationFrame é responsável pela atualização dos quadros
  window.requestAnimationFrame(executar);
  // faz a animação do rato andando
  // rato.andar();
}
function desenhar() {
  // ordem de desenho cenario, personagem, rato
  cenario.desenhar(ctx);
  rato.desenhar(ctx);
}
// executar roda a primeira função que vai chamar outras funçoes e vai pedir a requestAnimationFrame
executar();
// isto é para sabermos onde o mouse está e onde clickou
mouse.eventListener(canvas);

/* esconde o menu quando clica no botão start*/
closeBtn.addEventListener("click", () => menu.classList.add("hidden"));
closeBtn.addEventListener("click", () => historia.classList.add("show"));
closeBtn.addEventListener("click", () => contHistoria.classList.add("show"));

/*Mostra o menu ao pausarmos o jogo*/
pauseBtn.addEventListener("click", () => menu.classList.add("show"));

/*Volta a esconder o menu quando clicado em start novamente*/
closeBtn.addEventListener("click", () => menu.classList.remove("show"));

/*efeito do botão tutorial para aparecer e sumir junto do menu*/
tutorialBtn.addEventListener("click", () => menu.classList.add("hidden"));
tutorialBtn.addEventListener("click", () => tutorial.classList.add("hidden"));
tutorialClose.addEventListener("click", () => tutorial.classList.remove("hidden"));
tutorialClose.addEventListener("click", () => menu.classList.add("show"));

document.querySelector('#main > .jogo > .tutorial').remove();
