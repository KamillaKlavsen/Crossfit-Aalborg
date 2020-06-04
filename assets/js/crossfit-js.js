
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


/*
// Modal til holdbeskrivelser

//OPEN GYM
// Get the modal
let holdModalId = document.getElementById("holdModalId");

// Get the button that opens the modal
let btn = document.getElementById("hold");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  holdModalId.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  holdModalId.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == holdModalId) {
    holdModalId.style.display = "none";
  }
}

//MASTER
var holdModalId1 = document.getElementById("holdModalId1");

// Get the button that opens the modal
var btn1 = document.getElementById("hold1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  holdModalId1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  holdModalId1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == holdModalId1) {
    holdModalId1.style.display = "none";
  }
}*/


