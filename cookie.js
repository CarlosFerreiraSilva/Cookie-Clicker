
let cookie = 0;
let cps = 0;
let cpc = 1;

let autoclicker = document.getElementById('AutoClicker')
let displayAutoClicker = document.getElementById('displayAutoClicker')

autoclicker.addEventListener("click", AutoClickerClicked)
let autoclickers = 0;
let autoclickercost = 50;
function AutoClickerClicked(){
    if(cookie >= autoclickercost){
        cookie -= autoclickercost
        displayCookies()
        cps += 1;
        displayCps()
        autoclickers += 1;
        autoclickercost *= 1.3;
        displayAutoClicker.innerHTML = ( Math.floor(autoclickercost*100)/100 + ' ' +'<img id="playImage" class="image" style="height: 15px; width: 15px;" src="images/Cookie-Download-PNG.png" draggable="false"></img>')
    }
    else{
        alert("not enough cookies!")
    }
}

function GrandmaClicked(){
    if(cookie >= autoclickercost){
        cookie -= autoclickercost
        displayCookies()
        autoclickers += 1;
        autoclickercost *= 1.3;
        displayAutoClicker.innerHTML = (Math.floor(autoclickercost*100)/100 + ' ' +'<img id="playImage" class="image" style="height: 15px; width: 15px;" src="images/Cookie-Download-PNG.png" draggable="false"></img>')
    }
    else{
        alert("not enough cookies!")
    }
}

// Função de Intervalo de tempo para cookies
setInterval(function(){
cookie = cookie + autoclickers*.1
displayCookies()
},100)

function displayCookies(){
    document.getElementById('number').innerHTML =   Math.floor(cookie*100)/100 + ' ' + "cookies";
}


function displayCps(){
    document.getElementById('cps').innerHTML = "por segundo:" + ' ' + Math.floor(cps*100)/100;
}

function bakecookie() {
    cookie += cpc;
    displayCookies()
}

function flyOnePlus(event) {
    const flyOne = document.createElement('div');
    flyOne.textContent = '1+';
    flyOne.style.position = 'absolute';
    flyOne.style.fontSize = '30px';
    flyOne.style.color = 'white';
    flyOne.style.opacity = '1';
    flyOne.style.fontFamily = 'Merriweather', 'Georgia,serif';
    flyOne.style.userSelect = 'none';
    document.body.appendChild(flyOne);

    // Obtém as coordenadas do clique do usuário
    const clickX = event.clientX;
    const clickY = event.clientY;

    // Define a posição inicial do "1+" com base nas coordenadas do clique do usuário (um pouco mais acima)
    flyOne.style.left = `${clickX}px`;
    flyOne.style.top = `${clickY}px`; // Subtrai 20 pixels para posicionar o "1+" um pouco acima

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

            flyOne.style.left = `${x}px`;
            flyOne.style.top = `${y - 80}px`;

            // Modifique o valor abaixo para ajustar a opacidade do elemento durante a animação
            flyOne.style.opacity = 1 - progress;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                flyOne.remove(); // Remove o elemento após a animação ser concluída
            }
        });
    }

    animateElement();
}

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
  
  document.getElementById('randomElement').addEventListener('click', hideRandomElement);
  
  // Wait 5 minutes before starting the periodic appearance
  setTimeout(showRandomElementPeriodically, 5 * 60 * 10);

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}