export default () => {
  let canvas = document.createElement("canvas"), // crio o a tag canvas
    ctx = canvas.getContext("2d"); // pego contexto da cena no canvas
  // resolução do canvas
  canvas.height = 720;
  canvas.width = 1280;
  document.body.appendChild(canvas); // coloco a tag no html
  return { canvas, ctx }; // retorno o contexto e o canvas
};
