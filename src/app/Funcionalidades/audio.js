export default () => {
  const audio = document.createElement("audio");
  audio.src = "../assets/audio/Ratatouillevil.wav";
  audio.loop = true;
  audio.play();
};
