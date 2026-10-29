let lightOn = false;

function toggleLight() {
  if (lightOn === true) {
    document.querySelector("img").className = "";
    lightOn = false;
    audio.pause();
    document.querySelector("button").style.backgroundColor = "red";
  } else {
    document.querySelector("img").className = "switchOn";
    lightOn = true;
    audio.play();
    document.querySelector("button").style.backgroundColor = "purple";
  }
}