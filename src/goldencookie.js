function getRandomPosition() {
    const width = window.innerWidth - 50;
    const height = window.innerHeight - 50;
    const x = Math.random() * width;
    const y = Math.random() * height;
    return { x, y };
  }
  
  function createRandomElement() {
    const randomElement = document.getElementById('randomElement');
    const position = getRandomPosition();
    randomElement.style.left = position.x + 'px';
    randomElement.style.top = position.y + 'px';
    randomElement.style.display = 'block';
  }
  
  function hideRandomElement() {
    const randomElement = document.getElementById('randomElement');
    randomElement.style.display = 'none';
  }
  
  function showRandomElementPeriodically() {
    createRandomElement(); // Show the element immediately
  
    setInterval(function () {
      hideRandomElement(); // Hide the element after 5 minutes
      setTimeout(createRandomElement, 10); // Show the element after 5 minutes and 1 second
    }, 5 * 60 * 10); // 5 minutes in milliseconds
  }
  
  document.getElementById('randomElement').addEventListener('click', CookieDourado);

  function CookieDourado(event){
    cookie += cps*5
    clickAnimationGolden(event)
    hideRandomElement()
  }
  
  // Wait 5 minutes before starting the periodic appearance
  setTimeout(showRandomElementPeriodically, 5 * 60 * 10);


  
function clickAnimationGolden(event) {
    const flyOneGolden = document.createElement('div');
    flyOneGolden.textContent = cps*5 + '+';
    flyOneGolden.style.position = 'absolute';
    flyOneGolden.style.fontSize = '30px';
    flyOneGolden.style.color = 'white';
    flyOneGolden.style.opacity = '1';
    flyOneGolden.style.fontFamily = 'Merriweather', 'Georgia,serif';
    flyOneGolden.style.userSelect = 'none';
    document.body.appendChild(flyOneGolden);

    // Obtém as coordenadas do clique do usuário
    const clickX = event.clientX;
    const clickY = event.clientY;

    // Define a posição inicial do "1+" com base nas coordenadas do clique do usuário (um pouco mais acima)
    flyOneGolden.style.left = `${clickX}px`;
    flyOneGolden.style.top = `${clickY}px`; // Subtrai 20 pixels para posicionar o "1+" um pouco acima

    const animationDuration = 2500; // 2 segundos (tempo da animação)

    // Função para animar a transição do elemento voando e desaparecendo
    function animateElement() {
        const startTime = performance.now();
        requestAnimationFrame(function animate(time) {
            let elapsed = time - startTime;
            let progress = elapsed / animationDuration;

            // Modifique os valores abaixo para ajustar o caminho de voo do elemento
            let x = clickX + progress * 200; // Distância horizontal percorrida
            let y = clickY - Math.pow(progress * 100, 2) + 100; // Distância vertical percorrida (parábola)

            flyOneGolden.style.left = `${x}px`;
            flyOneGolden.style.top = `${y - 80}px`;

            // Modifique o valor abaixo para ajustar a opacidade do elemento durante a animação
            flyOneGolden.style.opacity = 1 - progress;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                flyOneGolden.remove(); // Remove o elemento após a animação ser concluída
            }
        });
    }

    animateElement();
}

