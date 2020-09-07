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
    audioFxM: (() => {
      let audioFx = document.createElement("audio");
      audioFx.src = "../assets/audio/MedicoAtacando.mp3";
      audioFx.loop = false;
      audioFx.volume = 0.1;
      return audioFx;
    })(),
    img: (() => {
      // faço isso pra instanciar uma imagem e retonar ela, já que o canvas obriga a fazer com um objeto imagem
      let imagem = new Image();
      imagem.src = "../assets/img/medicoCorrendo.png";
      return imagem;
    })(),
    queijo: fabricaQueijo(posX, posY),
    desenhar: function (ctx, cenario, rato, musicaFundo, animationFrame) {
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
      if (
        this.posX - this.frameW < rato.posX &&
        this.posX + this.frameW > rato.posX &&
        this.posY - this.frameH * 0.2 < rato.posY &&
        this.posY + this.frameH * 1.2 > rato.posY
      ) {
        rato.levaDano(musicaFundo, animationFrame);
      }
      if (
        this.posX - this.frameW * 4 < rato.posX &&
        this.posX + this.frameW * 4 > rato.posX &&
        this.posY - this.frameH * 2 < rato.posY &&
        this.posY + this.frameH * 2 > rato.posY
      ) {
        if (rato.vidas < 1) {
          console.log(rato.vidas);
          this.audioFxM.volume = 0;
        } else {
          this.audioFxM.play();
          this.img.src = "../assets/img/medicoAtacando.png";
        }
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
