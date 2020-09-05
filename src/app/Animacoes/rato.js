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

  desenhar: function (ctx) {
    ctx.drawImage(
      (() => {
        let imagem = new Image();
        imagem.src = "../assets/ratoCorrendo.png";
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
  // eventListener: function (atualizar) {
  //   window.addEventListener("keydown", (evt) => {
  //     switch (evt.keyCode) {
  //       case 37 /*seta para esquerda*/:
  //         this.direcao = this.movimento.esquerda;
  //         this.linha = this.frameH * 2;
  //         break;
  //       case 38 /*seta para cima*/:
  //         this.direcao = this.movimento.sobe;
  //         this.linha = this.frameH;
  //         break;
  //       case 39 /*seta para direita*/:
  //         this.direcao = this.movimento.direita;
  //         this.linha = this.frameH * 3;
  //         break;
  //       case 40 /*seta para baixo*/:
  //         this.direcao = this.movimento.desce;
  //         this.linha = 0;
  //         break;
  //     }
  //     atualizar();
  //   });
  // },
};
