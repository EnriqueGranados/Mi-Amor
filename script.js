const yBtn = document.getElementById("yBtn");

const nBtn = document.getElementById("nBtn");

var modal = document.getElementById("miModal");

var botonMostrar = document.getElementById("mostrarModal");

var txt = document.getElementById("text");

yBtn.addEventListener('click', function(){
    modal.style.display = "block";
});

function cerrarModal() {
    modal.style.display = "none";
}

nBtn.addEventListener('mouseover', function(){
   const randomX = parseInt(Math.random() * (window.innerWidth - 150));
   const randomY = parseInt(Math.random() * (window.innerHeight - 150));

   nBtn.style.setProperty('margin-left', 0);
   nBtn.style.setProperty('top', randomY + 'px');
   nBtn.style.setProperty('left', randomX + 'px');
});

nBtn.addEventListener('click', function(){
    txt.textContent = "Se que es mentira >:'v, es más no tendrías que poder darle al botón :'( 💔"
    modal.style.display = "block";
});