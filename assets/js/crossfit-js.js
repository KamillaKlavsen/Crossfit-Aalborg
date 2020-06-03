
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

// Get the modal
var bandModalId = document.getElementById("bandModalId");

// Get the button that opens the modal
var btn = document.getElementById("bands");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  bandModalId.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  bandModalId.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == bandModalId) {
    bandModalId.style.display = "none";
  }
}