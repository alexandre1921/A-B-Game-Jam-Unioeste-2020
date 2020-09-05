import { gravidade } from "../Funcionalidades/TheWorld.js";
export default {
  movimento: {
    esquerda: 1,
    direita: 2,
    sobe: 3,
    desce: 4,
  },
  direcao: 0,
  spriteW: 240,
  spriteH: 56,
  frameW: 120,
  frameH: 56,
  linha: 0,
  coluna: 0,
  posX: 200,
  posY: 600,
  currentTick: 0,
  ticks: 8,
  pulando: false,
  chao: 600,
  alturaPulo: 150,
  forcaPulo: 15,
  gravidade,
  mouseX: 0,
  mouseY: 0,
  desenhar: function (ctx) {
    if (this.pulando == true) {
      this.posY -= this.forcaPulo;
      if (this.posY <= this.chao - this.alturaPulo) {
        this.pulando = false;
      }
    } else if (this.posY < this.chao) {
      this.posY += this.gravidade;
    }
    ctx.drawImage(
      (() => {
        let imagem = new Image();
        imagem.src = "../assets/img/ratoCorrendo.png";
        return imagem;
      })(),
      this.coluna,
      this.linha,
      this.frameW,
      this.frameH,
      this.posX,
      this.posY,
      // uso * 0.5 pra aumentar a altura e largura proporcionalmente, assim não fica achatada a imagem, só é necessário pois a imagem está do tamanho errado
      this.frameW + this.frameW * 0.5,
      this.frameH + this.frameH * 0.5
    );
  },
  andar: function () {
    // uso isso pra limitar a velocidade com que o rato muda de frame, mais ticks mais devagar
    if (this.currentTick >= this.ticks) {
      this.currentTick = 0; // inicalizo a contagem de ticks
      this.coluna += // pro proximo frame
        this.coluna == this.spriteW - this.frameW
          ? -(this.spriteW - this.frameW)
          : this.frameW;
    } else {
      this.currentTick++; // incremento o tick
    }
  },

  // vai ser implementado ainda a movimentação do rato
  eventListener: function () {
    window.addEventListener("keydown", (evt) => {
      switch (evt.keyCode) {
        case 32 /*seta para esquerda*/:
          if (this.posY >= this.chao) this.pulando = true;
          break;
      }
      console.log(evt.keyCode);
    });
    window.addEventListener("mousemove", function (e) {
      // ao mover o mouse faça
      // temos acesso ao y e x coordenadas do mouse
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      //   console.log(e.clientY, e.clientX);
    });
    window.addEventListener("click", (e) => {
      // ao clickar faça
      // temos acesso ao y e x coordenadas do mouse
    });
    return { mouseX, mouseY };
  },
};
