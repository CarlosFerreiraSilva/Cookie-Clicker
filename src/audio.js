
    // Obtém referência para a imagem e o elemento de áudio
    const playImage = document.getElementById('playImage');
    const goldenCookie = document.getElementById('randomElement');
    const autoClicker = document.getElementById('AutoClicker');
    const upgrades = document.getElementById('upgrades');
    const closeBtn = document.getElementById('closeBtn');
    
    const background = document.getElementById('audio');
    const clickGCookie = document.getElementById('clickGoldenCookie');
    const buy = document.getElementById('buy');
    const open = document.getElementById('Open');
    const Close = document.getElementById('Close');

    // Adiciona um ouvinte de eventos à imagem para tocar o som quando clicada
    playImage.addEventListener('click', () => {
        
        background.currentTime = 0;
        background.play();
    });

    upgrades.addEventListener('click', () => {
        
        open.currentTime = 0;
        open.play();
    });

    closeBtn.addEventListener('click', () => {
        
        Close.currentTime = 0;
        Close.play();
    });

    autoClicker.addEventListener('click', () => {
        
        buy.currentTime = 0;
        buy.play();
    });

    goldenCookie.addEventListener('click', () => {
        
        clickGCookie.currentTime = 0;
        clickGCookie.play();
    });


    const backgroundmusic = document.getElementById('backgroundMusic');
    const image = document.getElementById('pauseButton');
    // const texto = document.getElementById('musicText');
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
                image.src = "images/icons/volume (2).png";// Caso a música esteja pausada, toca novamente
                // texto.innerHTML = "Now Playing Art of Silence";
                // pauseButton.textContent = 'Pausar Música';
            } else {
                backgroundmusic.pause(); 
                image.src = "images/icons/volume-mute.png";
                // texto.innerHTML = "";// Caso a música esteja tocando, pausa
                // pauseButton.textContent = 'Continuar Música';
            }
        });
