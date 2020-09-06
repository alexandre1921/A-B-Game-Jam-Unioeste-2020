import { mapaVelocidade } from "../Funcionalidades/TheWorld.js";
import { fabricaQueijo } from "./fabricaQueijo.js";
export const fabricaInimigo = (posX, posY) => {
  return {
    spriteW: 150,
    spriteH: 100,
    frameW: 75,
    frameH: 100,
    coluna: 0,
    linha: 0,
    posX: posX,
    posY: posY,
    currentTick: 0,
    ticks: 4,
    mapaVelocidade,
    velocidade: 5,
    drop: false,
    currentTick: 0,
    ticks: 8,
    img: (() => {
      // faço isso pra instanciar uma imagem e retonar ela, já que o canvas obriga a fazer com um objeto imagem
      let imagem = new Image();
      imagem.src = "../assets/img/medicoCorrendo.png";
      return imagem;
    })(),
    queijo: fabricaQueijo(posX, posY),
    desenhar: function (ctx, cenario, rato) {
      // uso isso pra limitar a velocidade com que o rato muda de frame, mais ticks mais devagar
      if (this.currentTick >= this.ticks) {
        this.currentTick = 0; // inicalizo a contagem de ticks
        this.coluna += // pro proximo frame
          this.coluna >= this.spriteW - this.frameW
            ? -(this.spriteW - this.frameW)
            : this.frameW;
      } else {
        this.currentTick++; // incremento o tick
      }
      if (this.drop) {
        this.queijo.desenhar(ctx, cenario, rato, this.drop);
      }
      if (
        cenario.posVer <
        cenario.Width - this.mapaVelocidade - cenario.sceneW
      ) {
        this.posX -= this.mapaVelocidade + this.velocidade;
        this.queijo.posX = this.posX;
      }
      ctx.drawImage(
        this.img,
        this.coluna,
        this.linha,
        this.frameW,
        this.frameH,
        this.posX,
        this.posY,
        this.frameW * 1.8,
        this.frameH * 1.8
      );
    },
  };
};
