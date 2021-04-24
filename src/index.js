import Robot from './templates/Robot';
import Home from './pages/Home';
import Instructions from './templates/Instructions';

Robot();

const home = document.getElementById('main-game');
home.innerHTML = Home();


const btnControl = document.getElementById('btn-control-music');
const audio = document.getElementById('game-music');
const imgAudio = document.getElementById('img-audio-game')

const controlMusic = () =>{
    if(audio.paused){
        audio.play();
        imgAudio.src= "../src/img/play.svg"
    }else{
        audio.pause();
        imgAudio.src= "../src/img/mute.svg"
    }
}

btnControl.addEventListener("click", controlMusic);

const btnInstructions = document.getElementById('btn-instructions-game');
const modal = document.getElementById('modal');


const showModal = () =>{
    modal.innerHTML = Instructions();
    modal.style.display = 'block';
    const btnCloseModal = document.getElementById('btn-close-modal');
    btnCloseModal.addEventListener('click', function(){
        modal.style.display = 'none';
    });
}

btnInstructions.addEventListener('click', showModal);













