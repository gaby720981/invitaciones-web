window.sr = ScrollReveal();

 sr.reveal('.frase, .dia, .hora, .lugar, .dresscode, .asistencia, .cancion, .insta, .tips, .fotos', {
    duration: 1500,
    origin: 'bottom', // Animación desde abajo
    distance: '80px' 
});
sr.reveal('.despedida', {
  duration: 5000,
  origin: 'bottom', // Animación desde abajo
  distance: '100px' 
});

const backgroundMusic = document.getElementById('backgroundMusic');
const playButton = document.getElementById('playButton');
let isMusicPlaying = false;

playButton.addEventListener('click', () => {
  if (isMusicPlaying) {
    backgroundMusic.pause();
  } else {
    backgroundMusic.play();
  }
  isMusicPlaying = !isMusicPlaying;
  updatePlayButtonState();
});

backgroundMusic.addEventListener('ended', () => {
  isMusicPlaying = false;
  updatePlayButtonState();
});

function updatePlayButtonState() {

  const playIcon = playButton.querySelector('i');


  playIcon.className = isMusicPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  playIcon.style.color = '#ffffff'; 
}


document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    // Verificar si el botón no tiene el id "playButton"
    if (button.id !== 'playButton') {
      button.addEventListener('click', function () {
        this.classList.toggle('clicked');
      });
    }
  });
});





 //CONFETI
 

 