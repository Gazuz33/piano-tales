let keys = document.querySelectorAll('.piano-key');

keys.forEach(key => {
 key.addEventListener('click', playNote);
});
keys.forEach(key => {
 key.addEventListener('transitionend', removeTransition);
});
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('active');
}
function playNote(a) {
 let key = a.target;
 let note = document.getElementById(key.dataset.note);
 key.classList.add('active');
 note.currentTime = 0;
 note.play();
 note.addEventListener('ended',() => {
  key.classList.remove('active');
 });
}
