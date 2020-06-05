
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

//OPEN GYM
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


// TEST
