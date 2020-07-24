
var textRegexp        = /^[a-zA-Z._-\s]{3,}$/;
var emailRegexp       = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneNumberRegexp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
var messageRegexp     = /^[a-zA-Z._-\s]{10,}$/;

var termIsChecked = document.getElementById("accept-terms");
var submitForm    = document.getElementById("submit-form");
var firstname     = document.getElementById("fname");
var lastname      = document.getElementById("lname");
var email         = document.getElementById("email");
var phoneNumber   = document.getElementById("pnumber");
var message       = document.getElementById("message");
var inputList     = document.querySelectorAll('input');
var textArea      = document.querySelectorAll('textarea');
var errorMessage  = document.getElementsByClassName("error__message");

var firstnameIsVerified, lastnameIsVerified, phoneNumberIsVerified, emailIsVerified, messageIsVerified = false;

function inputFormValidation() {

    function validateFirstname() {
        if (firstname.value == "" || !isNaN(firstname.value) || !firstname.value.match(textRegexp)) {
            firstnameIsVerified =  showErrorMessage(0, inputList[0], !firstnameIsVerified);
        } else {
            firstnameIsVerified =  showErrorMessage(0, inputList[0], firstnameIsVerified);
        }
    };

    validateFirstname();

    function validateLastname() {
        if (lastname.value == "" || !isNaN(lastname.value) || !lastname.value.match(textRegexp)) {
            lastnameIsVerified = showErrorMessage(1, inputList[1], !lastnameIsVerified);
        } else {
            lastnameIsVerified = showErrorMessage(1, inputList[1], lastnameIsVerified);
        }

    };

    validateLastname();

    function validateEmail() {
        if (email.value == "" || !isNaN(email.value) || !email.value.match(emailRegexp)) {
            emailIsVerified = showErrorMessage(2, inputList[2], !emailIsVerified);
        } else {
            emailIsVerified = showErrorMessage(2, inputList[2], emailIsVerified);
        }
    };

    validateEmail();

    function validatePhoneNumber() {
        if (phoneNumber.value.length !== 10 && !phoneNumber.value.match(phoneNumberRegexp)) {
            phoneNumberIsVerified = showErrorMessage(3, inputList[3], !phoneNumberIsVerified);
        } else {
            phoneNumberIsVerified = showErrorMessage(3, inputList[3], phoneNumberIsVerified);
        }
    };

    validatePhoneNumber();

    function validateMessage() {
        if (message.value.length !== 10 && !message.value.match(messageRegexp)) {
            messageIsVerified = showErrorMessage(4, textArea[0], !messageIsVerified);
        } else {
            messageIsVerified = showErrorMessage(4, textArea[0], messageIsVerified);
        }
    };

    validateMessage();

    function showErrorMessage(index, input, validate){
        if (validate) {
            input.classList.add('input--error');
            errorMessage[index].classList.add('error__message--show');
            return false;
        } else {
            input.classList.remove('input--error');
            errorMessage[index].classList.remove('error__message--show');
            return true;
        }
    }
};

function sendEmail() {
    if (firstnameIsVerified && lastnameIsVerified && phoneNumberIsVerified && emailIsVerified&& messageIsVerified) {
        submitForm.disabled = false;
    } else {
        submitForm.disabled = true
    }
}