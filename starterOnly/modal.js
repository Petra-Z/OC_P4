function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements - form
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const form = document.getElementById("form");

// DOM Elements - validation message
const successMsg = document.getElementById("success-popup");
const successPopupClose = document.querySelector(".close-success");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form when clicking the x
function closeModal() {
  modalbg.style.display = "none";
}

// close modal function when clicking outside the form
window.addEventListener("click", (e) => {
  if(e.target === modalbg){
    modalbg.style.display = "none";
  }
});

// close success event
successPopupClose.addEventListener("click", closeSuccess);

// close success message popup
function closeSuccess() {
  successMsg.style.display = "none";
}


// all the form elements
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const checkbox1 = document.getElementById("checkbox1");
const quantity = document.getElementById("quantity");


// eveny submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkQuantity();
  checkLocation();
  checkboxValidation();
  if(
  checkFirstName() && checkLastName() && checkEmail() && checkBirthdate() && checkQuantity() && checkLocation() && checkboxValidation()
  ) {
    modalbg.remove();
    successMsg.style.display = 'block';
  }
});


// check first name
function checkFirstName() {

  let firstName = document.getElementById("first-name");

  if(first.value.trim() === ''){
    firstName.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    firstName.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check last name
function checkLastName() {

  let lastName = document.getElementById("last-name");

  if(last.value.trim() === ''){
    lastName.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    lastName.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check email 
function checkEmail() {

  let emailData = document.getElementById("emailData");

   if(email.value.trim() === '' ||
   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false){
    emailData.setAttribute('data-error-visible', 'true');
    return false;
   }
  else {
    emailData.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check birthday
function checkBirthdate() {

  let birthdateData = document.getElementById("birthdateData");

  if(birthdate.value === ''){
    birthdateData.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    birthdateData.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check quantity
function checkQuantity() {

  let quantityData = document.getElementById("quantityData");
  
  if(quantity.value === ''){
    quantityData.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    quantityData.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check location
function checkLocation() {

  let locationData = document.getElementById("locationData");

  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    locationData.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    locationData.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check checkbox
function checkboxValidation() {

  let checkbox1Data = document.getElementById("checkbox1Data");

  if(checkbox1.checked == false) {
    checkbox1Data.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    checkbox1Data.setAttribute('data-error-visible', 'false');
    return true;
  } 
}

