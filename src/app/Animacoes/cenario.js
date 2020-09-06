import { mapaVelocidade } from "../Funcionalidades/TheWorld.js";
export default {
  // limpa a tela desenhando um quadrado branco do tamanho da tela
  limpaTela: function (ctx) {
    // começa a desenhar
    ctx.beginPath();
    // setarmos a cor do que vai ser desenhado
    ctx.fillStyle = "white";
    // é desenhado uma forma apartir dessas coordenadas, cada coordenada dessa é um ponto da forma geométrica
    ctx.fillRect(0, 0, 1280, 720);
  },
  Width: 128000, // largura da imagem
  Height: 720, // altura da imagem
  sceneW: 1280, // largura do que nos queremos mostra(ou seja tamanho da tela)
  sceneH: 720, // largura do que nos queremos
  posVer: 0, // pos vertical onde começa a ser mostrado(isso é bem util em sprites), aqui usamos para mover o cenário e dar impressão de movimento
  posHor: 0, // pos horizontal onde começa a ser mostrado
  posX: 0, // coordenada X onde colocar imagem
  posY: 0, // coordenada Y onde colocar imagem
  mapaVelocidade,
  posCW: 0,
  desenhar: function (ctx) {
    this.posCW = Math.floor(this.posVer / this.sceneW);
    console.log(this.posCW);
    if (this.posVer < this.Width - this.mapaVelocidade - this.sceneW)
      this.posVer += this.mapaVelocidade;
    ctx.drawImage(
      (() => {
        // faço isso pra instanciar uma imagem e retonar ela, já que o canvas obriga a fazer com um objeto imagem
        let imagem = new Image();
        imagem.src = "../assets/img/cena1.jpeg";
        return imagem;
      })(),
      this.posVer - this.sceneW * (this.posCW + 1),
      this.posHor,
      this.sceneW,
      this.sceneH,
      this.posX,
      this.posY,
      this.sceneW,
      this.sceneH
    );
    ctx.drawImage(
      (() => {
        // faço isso pra instanciar uma imagem e retonar ela, já que o canvas obriga a fazer com um objeto imagem
        let imagem = new Image();
        imagem.src = "../assets/img/cena1.jpeg";
        return imagem;
      })(),
      this.posVer - this.sceneW * this.posCW,
      this.posHor,
      this.sceneW,
      this.sceneH,
      this.posX,
      this.posY,
      this.sceneW,
      this.sceneH
    );
  },
  desenharMenu: function (ctx) {
    ctx.drawImage(
      (() => {
        // faço isso pra instanciar uma imagem e retonar ela, já que o canvas obriga a fazer com um objeto imagem
        let imagem = new Image();
        imagem.src = "../assets/img/backgroundMenu.png";
        return imagem;
      })(),
      0,
      0
    );
  },
};
