import canvasCtx from "./Funcionalidades/canvasCtx.js";
import mouse from "./Funcionalidades/mouse.js";
import personagem from "./Animacoes/personagem.js";
import cenario from "./Animacoes/cenario.js";

// criando canvas
let { canvas, ctx } = canvasCtx();
function executar() {
  desenhar();
  window.requestAnimationFrame(executar);
}
function desenhar() {
  cenario.desenhar(ctx);
  personagem.desenhar(ctx);
}
function atualizar() {
  personagem.andar();
}

personagem.eventListener(atualizar);
executar();
mouse.eventListener(canvas);
