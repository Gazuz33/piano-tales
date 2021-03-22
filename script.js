const keys = document.querySelectorAll('.piano-key');
const piano = document.getElementById('piano');

const startNote = (event) => {
  let key = event.target;
   let note = document.getElementById(key.dataset.note);
   key.classList.add('active');
   note.currentTime = 0;
   note.play();
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

 function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"] `);
  const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"] `);
  if (e.repeat) return
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
}

function stoPNote(e) {
const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"] `);
 key.classList.remove('active');
}


window.addEventListener('keydown', playNote);
window.addEventListener('keyup', stoPNote);

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

const btnСolection = document.querySelectorAll('.btn');
const btnFeild = document.querySelector('.btn-container');

btnFeild.addEventListener('click',(event)=> {
    if(event.target.classList.contains('btn')) {
    if(!event.target.classList.contains('btn-active')) {
          btnСolection.forEach((elem)=>{
    if(event.target === elem) {
          elem.classList.add('btn-active');
    if(elem.classList.contains('btn-letters')) {
          keys.forEach((elem1)=> {
          elem1.classList.add('piano-key-letter');
        });
  }
  else {
    keys.forEach((element)=> {
      element.classList.remove('piano-key-letter');
      });
  }
}   else {
    elem.classList.remove('btn-active');
                }
            });
        }
    }
});
