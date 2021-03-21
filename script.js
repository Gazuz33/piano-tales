const keys = document.querySelectorAll('.piano-key');
const piano = document.getElementById('piano');

const startNote = (event) => {
  let key = event.target;
   let note = document.getElementById(key.dataset.note);
   key.classList.add('active');
   note.currentTime = 0;
   note.play();
   note.addEventListener('ended');
}

keys.forEach(key => {
 key.addEventListener('mouseup', removeTransition);
});
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('active');
}

const stopNote = (event) => {
  event.target.classList.remove('active');
}

keys.forEach((elem) => {
  elem.addEventListener('mousedown', startNote)
  elem.addEventListener('mouseup', stopNote)
});

const startCorrOver = (event) => {
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.add('active');
  }
  keys.forEach((elem) => {
    elem.addEventListener('mouseover', startNote)
    elem.addEventListener('mouseout', stopNote)
  });
}

const stopCorrOver = () => {
  keys.forEach((elem) => {
    elem.classList.remove('active');
    elem.removeEventListener('mouseover', startNote)
    elem.removeEventListener('mouseout', stopNote)
    });

}

function playNote(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"] `);
  const key = document.querySelector(`key[data-key="${e.keyCode}"] `);
  if (e.repeat) return
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('active');
}

 window.addEventListener('keydown', playNote);
piano.addEventListener('mousedown', startCorrOver);
window.addEventListener('mouseup', stopCorrOver)

document.querySelector('.fullscreen').addEventListener('click', toggleScreen);

function toggleScreen(){
  if (!document.fullscreenElement)  {
    document.documentElement.requestFullscreen();
  }
  else {
    if (document.fullscreenEnabled) {
      document.exitFullscreen();
    }
  }
}
