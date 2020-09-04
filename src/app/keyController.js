// 📁 sayHi.js
export default class keyController {
  constructor(paddle) {
    // Keyboard event handlers
    document.addEventListener("keydown", (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        paddle.dx = paddle.speed;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        paddle.dx = -paddle.speed;
      }
    });
    document.addEventListener("keyup", (e) => {
      if (
        e.key === "Right" ||
        e.key === "ArrowRight" ||
        e.key === "Left" ||
        e.key === "ArrowLeft"
      ) {
        paddle.dx = 0;
      }
    });
  }
}
