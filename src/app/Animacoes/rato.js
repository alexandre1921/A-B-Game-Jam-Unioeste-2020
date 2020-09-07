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
  posY: 430,
  currentTick: 0,
  ticks: 8,
  pulando: false,
  chao: 430,
  alturaPulo: 300,
  forcaPulo: 20,
  gravidade,
  mouseX: 0,
  mouseY: 0,
  atira: false,
  vidas: 1,
  img: (() => {
    let imagem = new Image();
    imagem.src = "../assets/img/ratoCorrendo.png";
    return imagem;
  })(),
  audioFx: (() => {
    let audioFx = document.querySelector("#rato-fx");
    audioFx.src = "../assets/audio/RatoAndando.mp3";
    audioFx.loop = true;
    audioFx.volume = 0.1;
    return audioFx;
  })(),
  levaDano: function (musicaFundo, animationFrame) {
    this.vidas--;
    if (this.vidas < 1 && this.vidas == 0) {
      cancelAnimationFrame(animationFrame);
      this.audioFx.volume = 0;
      this.audioFx.pause();
      musicaFundo.pause();

      this.img.src = "../assets/img/ratoMorto.png";
      new Promise((r) => setTimeout(r, 1000));

      morte.style.display = "";
      morte.classList.remove("hidden");
      morte.classList.add("show");
      restartGame.addEventListener("click", () => {
        document.location.reload(true);
      });
    }
  },
  desenhar: function (ctx) {
    ctx.drawImage(
      (() => {
        let imagem = new Image();
        imagem.src = "../assets/img/cross.png";
        return imagem;
      })(),
      0,
      0,
      128,
      128,
      ex.value - 64 * 0.5,
      ey.value - 64 * 0.5,
      128 * 0.5,
      128 * 0.5
    );

    if (this.pulando == true) {
      this.posY -= this.forcaPulo;
      if (this.posY <= this.chao - this.alturaPulo) {
        this.pulando = false;
      }
    } else if (this.posY < this.chao) {
      this.posY += this.gravidade;
    } else {
      if (this.audioFx.paused) {
        this.audioFx.src = "../assets/audio/RatoAndando.mp3";
        this.audioFx.loop = true;
        this.audioFx.play();
      }
    }
    ctx.drawImage(
      this.img,
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
        this.coluna >= this.spriteW - this.frameW
          ? -(this.spriteW - this.frameW)
          : this.frameW;
    } else {
      this.currentTick++; // incremento o tick
    }
  },

  // vai ser implementado ainda a movimentação do rato
  eventListener: function (aldeaos) {
    window.addEventListener("keydown", (evt) => {
      switch (evt.keyCode) {
        case 32 /*seta para esquerda*/:
          if (this.posY >= this.chao) {
            this.audioFx.src = "../assets/audio/PuloDeVerdade.mp3";
            this.audioFx.loop = false;
            this.audioFx.play();
            this.pulando = true;
          }
          break;
      }
    });

    window.addEventListener("mousemove", function (e) {
      // ao mover o mouse faça
      // temos acesso ao y e x coordenadas do mouse
      ex.value = e.clientX;
      ey.value = e.clientY;
    });
    window.addEventListener("click", (e) => {
      let pulgaFx = document.createElement("audio");
      pulgaFx.src = "../assets/audio/Pulga.mp3";
      pulgaFx.volume = 0.1;
      pulgaFx.play();
      for (var i = 0; i < aldeaos.length; i++) {
        if (
          e.clientX > aldeaos[i].posX + aldeaos[i].frameW * 0.7 &&
          e.clientY > aldeaos[i].posY + aldeaos[i].frameH * 0.3 &&
          e.clientX < aldeaos[i].posX + aldeaos[i].frameW * 1.4 &&
          e.clientY < aldeaos[i].posY + aldeaos[i].frameH * 1.8
        ) {
          aldeaos[i].drop = true;
          aldeaos[i].coluna = aldeaos[i].frameW;
          break;
        }
      }
    });
  },
};
