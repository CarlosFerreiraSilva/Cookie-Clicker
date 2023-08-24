let cookie = 0

window.addEventListener("DOMContentLoaded", () => {
    const savedCookie = localStorage.getItem("username");
    if (savedCookie !== null) {
        cookie = parseFloat(savedCookie);
    }
    console.log(cookie);
});


let cps = 0;
let clickpower = 1;

let autoclicker = document.getElementById('AutoClicker')
let displayAutoClicker = document.getElementById('displayAutoClicker')

function clearCo(){
    localStorage.removeItem("username");
    console.log(username);
}
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
        displayAutoClicker.innerHTML = ( Math.floor(autoclickercost*100)/100 + ' ' +'<img id="playImage" class="image" style="height: 15px; width: 15px;" src="images/icons/Cookie-Download-PNG.png" draggable="false"></img>')
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
        displayAutoClicker.innerHTML = (Math.floor(autoclickercost*100)/100 + ' ' +'<img id="playImage" class="image" style="height: 15px; width: 15px;" src="images/icons/Cookie-Download-PNG.png" draggable="false"></img>')
    }
    else{
        alert("not enough cookies!")
    }
}

// Função de Intervalo de tempo para cookies
setInterval(function(){
cookie = cookie + autoclickers*.1
displayCookies()
localStorage.setItem("username", cookie.toString());
},100)

function displayCookies(){
    document.getElementById('number').innerHTML =   Math.floor(cookie*100)/100 + ' ' + "cookies";
}


function displayCps(){
    document.getElementById('cps').innerHTML = "por segundo:" + ' ' + Math.floor(cps*100)/100;
}

function bakecookie() {
    cookie += clickpower;
    displayCookies()
}

function clickAnimation(event) {
    const flyOne = document.createElement('div');
    flyOne.textContent = clickpower + '+';
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

