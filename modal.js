function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const body = document.querySelector("body");
const close = document.querySelector(".close");
const submit = document.querySelector(".btn-submit");
const modal_confirmation = document.querySelector(".modal_confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.addEventListener("click", closeModal);
btn - submit.addEventListener("click", confirmMessage);
modal_confirmation.addEventListener("click",);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  body.style.overflow = "hidden";
  window.scrollTo(0, 0);
}

// For closing the modal
function closeModal() {
  modalbg.style.display = "none";
  body.style.overflow = "initial";
}

// To confirm the form
function confirmMessage() {
  closeModal()
  modalbg.style.display = "none";
  body.style.overflow = "hidden";
  window.scrollTo(0, 0);

  confirmation()
  modal_confirmation.style.display = "block";
  body.style.overflow = "hidden";
  window.scrollTo(0, 0);
}
window.confirmMessage = confirmMessage