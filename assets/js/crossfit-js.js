
// Bokse til at vise mere tekst når men klikker 
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




// Modal til holdbeskrivelser

//ved hjælp fra følgende video https://www.youtube.com/watch?v=Ifx85VUGQIY

let modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn) {
  btn.onclick = function(){
    let modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});

let closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
  btn.onclick = function(){
    let modal = (btn.closest('.modal').style.display = 'none');
  };
});

window.onclick = function(event){
  if(event.target.className === 'modal'){
    event.target.style.display = 'none';
  }
}


// Billede slider 

const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
}) 