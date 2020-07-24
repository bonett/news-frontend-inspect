
var emailRegexp       = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneNumberRegexp = /^\D?(\d{2})\D?\D?(\d{3})\D?(\d{4})$/;

const validateElements = document.getElementsByClassName("validate");

var termIsChecked = document.getElementById("accept-terms");
var email         = document.getElementById("email");
var phoneNumber   = document.getElementById("pnumber");
var inputList     = document.querySelectorAll('input');
var emailIsVerified, phoneNumberIsVerified = false;

function getErrorElements() {
    return document.getElementsByClassName("error__message");
}

function emailValidation() {

    var errorMessage = getErrorElements();
console.log(email.value.length)
    if (!email.value.match(emailRegexp)) {
        showErrorMessage(errorMessage[0], inputList[2], !emailIsVerified);
        emailIsVerified = false;
    } else {
        showErrorMessage(errorMessage[0], inputList[2], emailIsVerified);
        emailIsVerified = true;
    }
    validateForm();
};

function phoneNumberValidation() {

    var errorMessage = getErrorElements();

    if (phoneNumber.value < 10 || !phoneNumber.value.match(phoneNumberRegexp)) {
        showErrorMessage(errorMessage[1], inputList[3], !phoneNumberIsVerified);
        phoneNumberIsVerified = false;
    } else {
        showErrorMessage(errorMessage[1], inputList[3], phoneNumberIsVerified);
        phoneNumberIsVerified = true;
    }
    validateForm();
};

function validateForm() {
    if (emailIsVerified && phoneNumberIsVerified) {
        document.getElementById('submit-form').disabled = false;
    } else {
        document.getElementById('submit-form').disabled = true;
    }
}

function sendMessage() {
    if (emailIsVerified && phoneNumberIsVerified) {
        alert('sent')
    }
}

function showErrorMessage(error, element, validate) {
    if (validate) {
        element.classList.add('input--error');
        error.classList.add('error__message--show');
    } else {
        element.classList.remove('input--error');
        error.classList.remove('error__message--show');
    }
}