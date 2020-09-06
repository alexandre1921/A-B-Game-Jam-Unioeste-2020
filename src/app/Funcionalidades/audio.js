export default () => {
  const music = document.querySelector("#gameMusic");
  music.src = "../assets/audio/Ratatouillevil.wav";
  music.loop = true;
  music.volume = 0.2;
  music.play();
  return music;
};
