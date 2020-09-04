export default class keyController {
  constructor(
    canvas,
    movimento,
    direcao,
    personagem,
    menuSrc,
    showMenu,
    frameH
  ) {
    this.movimentar(movimento, direcao, personagem);
    this.menu(canvas, menuSrc, showMenu);
  }
  movimentar(movimento, direcao, personagem, frameH) {
    window.addEventListener("keydown", (evt) => {
      switch (evt.keyCode) {
        case 37 /*seta para esquerda*/:
          direcao = movimento.esquerda;
          personagem.linha = frameH * 2;
          break;
        case 38 /*seta para cima*/:
          direcao = movimento.sobe;
          personagem.linha = frameH;
          break;
        case 39 /*seta para direita*/:
          direcao = movimento.direita;
          personagem.linha = frameH * 3;
          break;
        case 40 /*seta para baixo*/:
          direcao = movimento.desce;
          personagem.linha = 0;
          break;
      }
      personagem.andar();
    });
  }
  menu(canvas, menuSrc, showMenu) {
    canvas.addEventListener("mousemove", (e) => {
      //canto superior esquerdo
      //canto superior direito
      //canto inferior esquerdo
      //canto inferior direito
      if (
        e.clientY > 200 &&
        e.clientY < 338 &&
        e.clientX > 335 &&
        e.clientX < 1002
      ) {
        menuSrc = "../assets/menuActive.png";
      } else {
        menuSrc = "../assets/menu.png";
      }
      //   console.log(e.clientY, e.clientX);
    });
    canvas.addEventListener("click", (e) => {
      //canto superior esquerdo
      //canto superior direito
      //canto inferior esquerdo
      //canto inferior direito
      if (
        e.clientY > 174 &&
        e.clientY < 338 &&
        e.clientX > 367 &&
        e.clientX < 1046
      ) {
        showMenu = false;
      }
    });
  }
}
