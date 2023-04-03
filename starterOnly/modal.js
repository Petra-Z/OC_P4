// function editNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const form = document.getElementById("form");

const successPopupClose = document.querySelector(".close-success")
const errorMsg = document.querySelectorAll(".error");
const successIcon = document.querySelectorAll(".success-icon");
const failureIcon = document.querySelectorAll(".failure-icon");
let successMsg = document.getElementById("success-popup");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
modalCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form when clicking the x
function closeModal() {
  modalbg.style.display = "none";
}

// close modal function when clicking outside form
window.addEventListener("click", (e) => {
  if(e.target === modalbg){
    modalbg.style.display = "none";
  }
})

//close success event
successPopupClose.addEventListener("click", closeSuccess);

//close success message popup
function closeSuccess() {
  successMsg.style.display = "none";
}


// Get all the form elements
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let checkbox1 = document.getElementById("checkbox1");
let quantity = document.getElementById("quantity")
let city = document.reserve.location;

let isFormValid = false;


form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(isFormValid) {
    modalbg.remove();
    successMsg.style.display = 'block';
  }

  // Validate first name
  if(firstName.value.trim() === ''){
    errorMsg[0].innerHTML = 'Veuillez entrer au moins 2 caractères';
    failureIcon[0].style.opacity = "1";
    isFormValid = false;
  } else {
    errorMsg[0].innerHTML = '';
    failureIcon[0].style.opacity = "0";
    successIcon[0].style.opacity = "1";
    isFormValid = true;
  }

  // Validate last name
  if(lastName.value.trim() === ''){
    errorMsg[1].innerHTML = 'Veuillez entrer au moins 2 caractères';
    failureIcon[1].style.opacity = "1";
    isFormValid = false;
  } else {
    errorMsg[1].innerHTML = '';
    failureIcon[1].style.opacity = "0";
    successIcon[1].style.opacity = "1";
    isFormValid = true;
  }
  
  // Validate email name
  if(email.value.trim() === ''){
    errorMsg[2].innerHTML = 'Vous devez entrer une address mail';
    failureIcon[2].style.opacity = "1";
    isFormValid = false;
  } else {
    errorMsg[2].innerHTML = '';
    failureIcon[2].style.opacity = "0";
    successIcon[2].style.opacity = "1";
    isFormValid = true;
  }

  // Validate birthday
  if(birthdate.value === ''){
    errorMsg[3].innerHTML = 'Vous devez entrer une date de naissance';
    isFormValid = false;
  } else {
    errorMsg[3].innerHTML = '';
    successIcon[3].style.opacity = "1";
    isFormValid = true;
  }

  // Validate quantity
  if(quantity.value === ''){
    errorMsg[4].innerHTML = 'Ce champ ne peut pas être vide';
    failureIcon[4].style.opacity = "1";
    isFormValid = false;
  } else {
    errorMsg[4].innerHTML = '';
    successIcon[4].style.opacity = "1";
    isFormValid = true;
  }

  // Validate location
  for (i=0; i<city.length; i++) {
    if(city[i].checked==true){
      errorMsg[5].innerHTML = '';
      isFormValid = true;
      break;
    }
    else {
     errorMsg[5].innerHTML = "Vous devez choisir une option";
     isFormValid = false
    //  return false;
    }
  }

  // Validate checkbox
  if(checkbox1.checked) {
    errorMsg[6].innerHTML = '';
    isFormValid = true;
  } else {
    errorMsg[6].innerHTML = "Vous devez accepter les conditions d'utilisation";
    isFormValid = false
  }

})


