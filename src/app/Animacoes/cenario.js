export default {
  limpaTela: function (ctx) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720);
  },
  // ctx.drawImage(
  //   (() => {
  //     let imagem = new Image();
  //     imagem.src = "../assets/testesvg.svg";
  //     return imagem;
  //   })(),
  //   0,
  //   0,
  //   1705,
  //   1707,
  //   0,
  //   0,
  //   300,
  //   300
  // );
  Width: 12800,
  Height: 720,
  sceneW: 1280,
  sceneH: 720,
  linha: 0,
  coluna: 0,
  posX: 0,
  posY: 0,
  desenhar: function (ctx) {
    this.coluna += 7;
    ctx.drawImage(
      (() => {
        let imagem = new Image();
        imagem.src = "../assets/teste.png";
        return imagem;
      })(),
      this.coluna,
      this.linha,
      this.sceneW,
      this.sceneH,
      this.posX,
      this.posY,
      this.sceneW,
      this.sceneH
    );
  },
};
