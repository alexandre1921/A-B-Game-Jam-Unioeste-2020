import { mapaVelocidade } from "../Funcionalidades/TheWorld.js";
export const fabricaQueijo = (posX, posY) => {
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
    velocidade: mapaVelocidade * 2,
    pegouY: false,
    pegouX: false,
    comeu: false,
    audioFxM: (() => {
      let audioFx = document.createElement("audio");
      audioFx.src = "../assets/audio/RatoComendo.mp3";
      audioFx.loop = false;
      audioFx.volume = 0.5;
      return audioFx;
    })(),
    img: (() => {
      // faço isso pra instanciar uma imagem e retonar ela, já que o canvas obriga a fazer com um objeto imagem
      let imagem = new Image();
      imagem.src =
        "../assets/img/queijo" +
        ["Amarelo", "Azul", "Verde", "Vermelho"][
          Math.floor(Math.random() * 4)
        ] +
        ".png";
      return imagem;
    })(),
    desenhar: function (ctx, cenario, rato) {
      if (cenario.posVer < cenario.Width - this.mapaVelocidade - cenario.sceneW)
        this.posX -= this.mapaVelocidade;
      if (rato.posX + rato.spriteW / 2 >= this.posX) {
        if (this.posX + this.velocidade > rato.posX + rato.spriteW / 2) {
          this.pegouX = true;
        } else this.posX += this.velocidade;
      } else {
        if (this.posX - this.velocidade < rato.posX - rato.spriteW / 2) {
          this.pegouX = true;
        } else this.posX -= this.velocidade;
      }
      if (rato.posY + rato.spriteH / 1.1 >= this.posY) {
        if (this.posY + this.velocidade > rato.posY + rato.spriteH / 1.1) {
          this.pegouY = true;
        } else this.posY += this.velocidade;
      } else {
        if (this.posY - this.velocidade < rato.posY - rato.spriteH / 1.1) {
          this.pegouY = true;
        } else this.posY -= this.velocidade;
      }
      if (!(this.pegouY !== false && this.pegouX !== false)) {
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
      } else if (!this.comeu) {
        this.comeu = true;
        this.audioFxM.play();
      }
    },
  };
};
