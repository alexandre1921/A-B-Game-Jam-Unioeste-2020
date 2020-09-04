export default () => {
  let canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");
  // resolução do canvas
  canvas.height = 720;
  canvas.width = 1280;
  document.body.appendChild(canvas);
  return { canvas, ctx };
};
