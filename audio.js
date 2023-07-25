
    // Obtém referência para a imagem e o elemento de áudio
    const playImage = document.getElementById('playImage');
    const audio = document.getElementById('audio');

    // Adiciona um ouvinte de eventos à imagem para tocar o som quando clicada
    playImage.addEventListener('click', () => {
        
        audio.currentTime = 0;
        audio.play();
    });


    const backgroundmusic = document.getElementById('backgroundMusic');
    const image = document.getElementById('pauseButton');
    // const texto = document.getElementById('musicText');
        backgroundmusic.play();
        // texto.innerHTML = "Now Playing Art of Silence";

        // function stopBackgroundAudio(){
        //     backgroundmusic.stopBackgroundAudio();
        // }

       
        // Obtém referência para o botão e o elemento de áudio
        const pauseButton = document.getElementById('pauseButton');
      

        // Adiciona um ouvinte de eventos ao botão para pausar a música quando clicado
        pauseButton.addEventListener('click', () => {
            if (backgroundmusic.paused) {
                backgroundmusic.play(); 
                image.src = "images/volume (2).png";// Caso a música esteja pausada, toca novamente
                // texto.innerHTML = "Now Playing Art of Silence";
                // pauseButton.textContent = 'Pausar Música';
            } else {
                backgroundmusic.pause(); 
                image.src = "images/volume-mute.png";
                // texto.innerHTML = "";// Caso a música esteja tocando, pausa
                // pauseButton.textContent = 'Continuar Música';
            }
        });
