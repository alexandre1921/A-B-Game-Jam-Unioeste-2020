export default {
  spriteW: 1608,
  spriteH: 62,
  frameW: 124,
  frameH: 62,
  coluna: 0,
  linha: 0,
  posX: 0,
  posY: 0,
  currentTick: 0,
  ticks: 4,
  velocity: 5,
  desenhar: function (ctx, x, y) {
    x += this.velocity;
    ctx.drawImage(
      (() => {
        // faço isso pra instanciar uma imagem e retonar ela, já que o canvas obriga a fazer com um objeto imagem
        let imagem = new Image();
        imagem.src = "../assets/img/aldeao.png";
        return imagem;
      })(),
      this.coluna,
      this.linha,
      this.frameW,
      this.frameH,
      x,
      y,
      this.frameW * 2,
      this.frameH * 2
    );
  },
  morrer: function () {
    if (this.currentTick >= this.ticks) {
      this.currentTick = 0; // inicalizo a contagem de ticks
      this.coluna += // pro proximo frame
        this.coluna >= this.spriteW - this.frameW
          ? -(this.spriteW - this.frameW)
          : this.frameW;
    } else {
      this.currentTick++; // incremento o tick
    }
  },
};
