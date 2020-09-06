import { mapaVelocidade } from "../Funcionalidades/TheWorld.js";
import { fabricaQueijo } from "./fabricaQueijo.js";
export const fabricaAldeao = (posX, posY) => {
  return {
    spriteW: 150,
    spriteH: 100,
    frameW: 73,
    frameH: 100,
    coluna: 0,
    linha: 0,
    posX: posX,
    posY: posY,
    currentTick: 0,
    ticks: 4,
    mapaVelocidade,
    drop: false,
    img: (() => {
      // faço isso pra instanciar uma imagem e retonar ela, já que o canvas obriga a fazer com um objeto imagem
      let imagem = new Image();
      imagem.src =
        "../assets/img/aldeao" +
        ["Homen", "mulher"][Math.floor(Math.random() * 2)] +
        ".png";
      return imagem;
    })(),
    queijo: fabricaQueijo(posX, posY),
    desenhar: function (ctx, cenario, rato) {
      if (this.drop) {
        this.queijo.desenhar(ctx, cenario, rato, this.drop);
      }
      if (
        cenario.posVer <
        cenario.Width - this.mapaVelocidade - cenario.sceneW
      ) {
        this.posX -= this.mapaVelocidade;
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
        this.frameW * 2,
        this.frameH * 2
      );
    },
  };
};
