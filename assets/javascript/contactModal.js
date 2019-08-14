var modal = document.getElementById("contact-modal");
var email = document.getElementById("email");
var hireButton = document.getElementById("hire-button");
var hireNav = document.getElementById("hire-nav");
var email = document.getElementById("email");
var span = document.getElementsByClassName("close")[0];

email.onclick = function() {
  show_modal();
  validate_form();
}

hireButton.onclick = function() {
  show_modal();
  validate_form();
}

hireNav.onclick = function() {
  show_modal();
  validate_form();
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

function show_modal() {
  modal.style.display = "block";
}

function close_modal() {
  modal.style.display == "block" ? modal.style.display = "none" : modal.style.display = "block"
}

function validate_form() {
  var form = document.getElementById("contact-form");
  var catchEntry = document.getElementById("no-entry");
  
  form.addEventListener("submit", function (event) {
    if (catchEntry.value != "") {
      event.preventDefault();
    }
  }, false);
}