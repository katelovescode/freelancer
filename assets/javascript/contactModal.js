var modal = document.getElementById("contact-modal");
var email = document.getElementById("email");
var span = document.getElementsByClassName("close")[0];

email.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(e) {
  e.target !== this ? close_modal : "";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function close_modal() {
  modal.style.display == "block" ? modal.style.display = "none" : modal.style.display = "block"
}