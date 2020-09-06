export default {
  eventListener: function (canvas) {
    canvas.addEventListener("mousemove", (e) => {
      // ao mover o mouse faça
      // temos acesso ao y e x coordenadas do mouse
      if (
        e.clientY > 200 &&
        e.clientY < 338 &&
        e.clientX > 335 &&
        e.clientX < 1002
      ) {
      } else {
      }
    });
    canvas.addEventListener("click", (e) => {
      // ao clickar faça
      // temos acesso ao y e x coordenadas do mouse
      if (
        e.clientY > 174 &&
        e.clientY < 338 &&
        e.clientX > 367 &&
        e.clientX < 1046
      ) {
      }
    });
  },
};
