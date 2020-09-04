export default {
  // ctx.beginPath();
  // ctx.fillStyle = "white";
  // ctx.fillRect(0, 0, 800, 600);
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
  desenhar: function (ctx) {
    ctx.drawImage(
      (() => {
        let imagem = new Image();
        imagem.src = "../assets/backgroundCheio.png";
        return imagem;
      })(),
      0,
      0
    );
  },
};
