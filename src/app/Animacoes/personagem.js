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
    // passa para o proximo frame se estiver no ultimo volta ao final
    this.coluna +=
      this.coluna == this.spriteW - this.frameW
        ? -(this.spriteW - this.frameW) // volta ao final
        : this.frameW; // próximo frame
    switch (this.direcao) {
      case 1:
        this.posX -= 20; // manda a imagem pra trás
        break;
      case 2:
        this.posX += 20; // manda a imagem pra frente
        break;
      case 3:
        this.posY -= 20; // manda a imagem pra baixo
        break;
      case 4:
        this.posY += 20; // manda a imagem pra cima
        break;
    }
  },
  eventListener: function (atualizar) {
    window.addEventListener("keydown", (evt) => {
      switch (evt.keyCode) {
        case 37 /*seta para esquerda*/:
          this.direcao = this.movimento.esquerda; // muda a direção da sprite
          this.linha = this.frameH * 2; // linha 2 tem a sprite da esquerda
          break;
        case 38 /*seta para cima*/:
          this.direcao = this.movimento.sobe; // muda a direção da sprite
          this.linha = this.frameH; // linha 1 tem a sprite pra cima
          break;
        case 39 /*seta para direita*/:
          this.direcao = this.movimento.direita; // muda a direção da sprite
          this.linha = this.frameH * 3; // linha 3 tem a sprite da direita
          break;
        case 40 /*seta para baixo*/:
          this.direcao = this.movimento.desce; // muda a direção da sprite
          this.linha = 0; // linha 0 tem a sprite pra baixo
          break;
      }
      atualizar(); // depois de alterar valores atualiza a tela
    });
  },
};
