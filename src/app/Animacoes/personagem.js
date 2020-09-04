export default {
  movimento: {
    esquerda: 1,
    direita: 2,
    sobe: 3,
    desce: 4,
  },
  direcao: 0,
  spriteW: 240,
  spriteH: 350,
  frameW: 60,
  frameH: 90,
  linha: 0,
  coluna: 0,
  posX: 0,
  posY: 0,
  desenhar: function (ctx) {
    ctx.drawImage(
      (() => {
        let imagem = new Image();
        imagem.src = "../assets/personagem.png";
        return imagem;
      })(),
      this.coluna,
      this.linha,
      this.frameW,
      this.frameH,
      this.posX,
      this.posY,
      this.frameW,
      this.frameH
    );
  },
  andar: function () {
    this.coluna +=
      this.coluna == this.spriteW - this.frameW
        ? -(this.spriteW - this.frameW)
        : this.frameW;
    switch (this.direcao) {
      case 1:
        this.posX -= 20;
        break;
      case 2:
        this.posX += 20;
        break;
      case 3:
        this.posY -= 20;
        break;
      case 4:
        this.posY += 20;
        break;
    }
  },
  eventListener: function (atualizar) {
    window.addEventListener("keydown", (evt) => {
      switch (evt.keyCode) {
        case 37 /*seta para esquerda*/:
          this.direcao = this.movimento.esquerda;
          this.linha = this.frameH * 2;
          break;
        case 38 /*seta para cima*/:
          this.direcao = this.movimento.sobe;
          this.linha = this.frameH;
          break;
        case 39 /*seta para direita*/:
          this.direcao = this.movimento.direita;
          this.linha = this.frameH * 3;
          break;
        case 40 /*seta para baixo*/:
          this.direcao = this.movimento.desce;
          this.linha = 0;
          break;
      }
      atualizar();
    });
  },
};
