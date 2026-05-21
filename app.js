const audio = new Audio('musica/fondo.mp3');
const container = document.getElementById('lyrics-container');
const startScreen = document.getElementById('pantalla-inicio');
const authorScreen = document.getElementById('author-screen');
const viz = document.getElementById('visualizer');

// 1. Generar las barras automáticamente al cargar
for(let i=0; i<30; i++) {
    let bar = document.createElement('div');
    bar.className = 'bar';
    viz.appendChild(bar);
}

const lyrics = [
    { time: 5.5, text: "<span class='orange'>-- SOLO RELAJA LA MENTE --</span>" },
    { time: 12.6, text: "Qué <span class='gold'>fatalidad</span>" },
    { time: 16.8, text: "Eres mi <span class='pink'>héroe</span> y mi villana" },
    { time: 20.2, text: "Podría <span class='gold'>enloquecer</span>" },
    { time: 24.0, text: "Descifrando tu <span class='pink'>conspiración</span>" },
    { time: 27.5, text: "Muero por saber el <span class='gold'>desenlace</span>" },
    { time: 32.6, text: "De esta <span class='pink'>trama</span> comienza a anochecer" },
    { time: 38.0, text: "Y el <span class='gold'>corazón</span> va al descubierto" },
    { time: 41.3, text: "Debo <span class='pink'>interpretar</span> tus gritos" },
    { time: 44.7, text: "Tus llamadas, tus <span class='gold'>caricias</span> entrecortadas" },
    { time: 49.8, text: "Y tus arranques de <span class='pink'>pasión</span>" },
    { time: 55.4, text: "Debo buscar dentro de tanto <span class='gold'>desperfecto</span>" },
    { time: 60.3, text: "La moraleja de este <span class='pink'>cuento</span>" },
    { time: 63.8, text: "Debo domar tu <span class='gold'>corazón</span>" },
    { time: 68.7, text: "En la <span style='font-size: 4rem; color: #fff;'>oscuridad</span>" },
    { time: 72.5, text: "Son los <span class='gold'>instintos</span> los que mandan" },
    { time: 76.8, text: "¿Qué más quieres <span class='blue'>romper</span>?" },
    { time: 79.5, text: "De <span class='red'>corazones</span> tienes colección" },
    { time: 83.5, text: "Ya va a <span class='green'>amanecer</span>" },
    { time: 86.7, text: "Y sigo en esta <span class='pink'>encrucijada</span>" },
    { time: 90.5, text: "<span class='blue'>Misterio</span> de mujer" },
    { time: 93.9, text: "Solo será cuestión de <span class='green'>tiempo</span>" },
    { time: 97.4, text: "Debo <span class='red'>interpretar</span> tus gritos" },
    { time: 100.0, text: "Tus llamadas, tus <span class='blue'>caricias</span> entre cortadas" },
    { time: 105.4, text: "Y tus <span class='blue'>arranques</span> de <span class='green'>pasión</span>" },
    { time: 111.3, text: "<span class='orange'>Debo buscar</span> dentro de tanto <span class='red'>desperfecto</span>" },
    { time: 116.0, text: "<span class='pink'>La moraleja</span> de este <span class='blue'>cuento</span>" },
    { time: 119.8, text: "Debo domar tu <span class='green'>corazón</span>" },
    { time: 125.0, text: "<span style='font-size: 4rem; color: #fff;'>. . . . .</span>" },
    { time: 153.9, text: "Y debo de enterrar el filo de tu <span class='red'>espada</span>" },
    { time: 158.4, text: "En los <span class='blue'>secretos</span> de tu almohada" },
    { time: 162.3, text: "Hasta que entiendas la <span class='green'>lección</span>" },
    { time: 166.9, text: "<span class='gold'>Debo llegar</span> al fondo de este <span class='red'>desparpajo</span>" },
    { time: 172.7, text: "Que yo de esta no me <span class='blue'>rajo</span>" },
    { time: 176.1, text: "<span class='red'>Hasta domar</span> tu <span class='pink'>corazón</span>" },
    { time: 181.0, text: "<span style='font-size: 4rem; color: #fff;'>. . . . .</span>" }
];

document.getElementById('start-btn').onclick = () => {
    startScreen.style.display = 'none';
    audio.play();
    animateBars();
    
    audio.addEventListener('timeupdate', () => {
        let current = lyrics.find((l, i) => audio.currentTime >= l.time && (lyrics[i+1] ? audio.currentTime < lyrics[i+1].time : true));
        if (current && container.innerHTML !== current.text) {
            container.style.opacity = 0;
            setTimeout(() => { container.innerHTML = current.text; container.style.opacity = 1; }, 300);
        }
    });

    audio.onended = () => {
        container.style.display = 'none';
        viz.style.display = 'none';
        authorScreen.classList.remove('hidden');
    };
};

function animateBars() {
    // Solo animar si el audio está sonando
    if (!audio.paused) {
        document.querySelectorAll('.bar').forEach(b => {
            b.style.height = (Math.random()*80 + 20) + 'px';
        });
        requestAnimationFrame(animateBars);
    }
}