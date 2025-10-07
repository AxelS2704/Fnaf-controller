const jumpscareVideoElement = document.getElementById("jumpscareVideo");
const lightsOutVideoElement = document.getElementById("lightsOutVideo");
const cumbiaAudioElement = document.getElementById("cumbiaAudio");
const freddyNoseAudioElement = document.getElementById("freddyNoseAudio");
const omgisfreddyVideoElement = document.getElementById("omgisfreddy"); // Agregamos esta línea para obtener el elemento de video "omgisfreddy"

function hideContent() {
  document.querySelectorAll(".content-to-hide").forEach((element) => {
    element.style.display = "none";
  });
}

function showContent() {
  document.querySelectorAll(".content-to-hide").forEach((element) => {
    element.style.display = "block";
  });
}

document.getElementById("jumpscare-button").addEventListener("click", function () {
  // Reproducir el video de jumpscare en pantalla completa
  jumpscareVideoElement.style.display = "block";
  jumpscareVideoElement.play();

  // Ocultar el resto de los elementos mientras el video se reproduce
  hideContent();

  // Mostrar el video en pantalla completa
  jumpscareVideoElement.classList.add("fullscreen-video");

  // Cerrar la pantalla completa y mostrar los elementos nuevamente al terminar el video
  jumpscareVideoElement.onended = function () {
    jumpscareVideoElement.style.display = "none";
    showContent();
    jumpscareVideoElement.classList.remove("fullscreen-video");
  };
});

document.getElementById("lights-out-button").addEventListener("click", function () {
  // Reproducir el video de lights out en pantalla completa
  lightsOutVideoElement.style.display = "block";
  lightsOutVideoElement.play();

  // Ocultar el resto de los elementos mientras el video se reproduce
  hideContent();

  // Mostrar el video en pantalla completa
  lightsOutVideoElement.classList.add("fullscreen-video");

  // Cerrar la pantalla completa y mostrar los elementos nuevamente al terminar el video
  lightsOutVideoElement.onended = function () {
    lightsOutVideoElement.style.display = "none";
    showContent();
    lightsOutVideoElement.classList.remove("fullscreen-video");
  };
});

// Agregamos la función para el botón "Power-on"
document.getElementById("Power-on").addEventListener("click", function () {
  // Reproducir el video omgisfreddy en pantalla completa
  omgisfreddyVideoElement.style.display = "block";
  omgisfreddyVideoElement.play();

  // Ocultar el resto de los elementos mientras el video se reproduce
  hideContent();

  // Mostrar el video en pantalla completa
  omgisfreddyVideoElement.classList.add("fullscreen-video");

  // Cerrar la pantalla completa y mostrar los elementos nuevamente al terminar el video
  omgisfreddyVideoElement.onended = function () {
    omgisfreddyVideoElement.style.display = "none";
    showContent();
    omgisfreddyVideoElement.classList.remove("fullscreen-video");
  };
});

let isCumbiaPlaying = false;
document.getElementById("cumbia-button").addEventListener("click", function () {
  if (!isCumbiaPlaying) {
    // Reproducir el audio de cumbia
    cumbiaAudioElement.play();
    isCumbiaPlaying = true;
  } else {
    // Detener y reiniciar el audio si se presiona nuevamente el botón
    cumbiaAudioElement.pause();
    cumbiaAudioElement.currentTime = 0;
    cumbiaAudioElement.play();
  }
});

let isFreddyNosePlaying = false;
document.getElementById("freddy-nose-button").addEventListener("click", function () {
  if (!isFreddyNosePlaying) {
    // Reproducir el audio de la nariz de Freddy
    freddyNoseAudioElement.play();
    isFreddyNosePlaying = true;
  } else {
    // Detener y reiniciar el audio si se presiona nuevamente el botón
    freddyNoseAudioElement.pause();
    freddyNoseAudioElement.currentTime = 0;
    freddyNoseAudioElement.play();
  }
});

// Detectar cuando los audios han terminado para cambiar las banderas correspondientes
cumbiaAudioElement.addEventListener("ended", function () {
  isCumbiaPlaying = false;
});

freddyNoseAudioElement.addEventListener("ended", function () {
  isFreddyNosePlaying = false;
});

// ... (código posterior)
