export default {
  eventListener: function (canvas) {
    canvas.addEventListener("mousemove", (e) => {
      if (
        e.clientY > 200 &&
        e.clientY < 338 &&
        e.clientX > 335 &&
        e.clientX < 1002
      ) {
      } else {
      }
      //   console.log(e.clientY, e.clientX);
    });
    canvas.addEventListener("click", (e) => {
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
