export default () => {
  let canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");
  // resolução do canvas
  canvas.height = 600;
  canvas.width = 800;
  document.body.appendChild(canvas);
  return { canvas, ctx };
};
