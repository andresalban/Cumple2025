 const video = document.getElementById("miVideo");
    const contador = document.getElementById("contador");
    let reproducciones = 0;

    video.addEventListener("play", () => {
      if (video.currentTime === 0) {
        // Solo cuenta si empieza desde el inicio
        reproducciones++;
        contador.textContent = reproducciones;
      }
    });