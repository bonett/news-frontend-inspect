
var emailRegexp       = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneNumberRegexp = /^\D?(\d{2})\D?\D?(\d{3})\D?(\d{4})$/;

const validateElements = document.getElementsByClassName("validate");

var firstname     = document.getElementById("fname");
var lastname      = document.getElementById("lname");
var email         = document.getElementById("email");
var phoneNumber   = document.getElementById("pnumber");
var message       = document.getElementById("message");
var inputList     = document.querySelectorAll('input');
var acceptTerms   = document.getElementById("accept-terms");
var dialog        = document.getElementById("myDialog");
var dialogContent = document.getElementById('response')
var dialogClose   = document.getElementsByClassName("dialog--close")[0];

var emailVerified      = false;
var phonNumberVerified = false

/**
 * Shold be close dialog and clear form
 */
dialogClose.onclick = function () {
    dialog.style.display = "none";
    clearForm();
}

/**
 * Shold be close dialog and clear form when the click is ourside dialog content
 */
window.onclick = function (event) {
    if (event.target == dialogClose) {
        dialog.style.display = "none";
        clearForm();
    }
}

function formValidations() {

    var errorMessage = document.getElementsByClassName("error__message");
    
    /**
     * It allows valiate email field
     */
    if (email.value == "") {
        showErrorMessage(errorMessage[0], inputList[2], !emailVerified);
    } else {
        if (emailRegexp.test(email) === false) {
            showErrorMessage(errorMessage[0], inputList[2], emailVerified);
            emailVerified = !emailVerified;
        } else {
            showErrorMessage(errorMessage[0], inputList[2], !emailVerified);
        }
    }

    /**
     * It allows valiate phone number field
     */
    if (phoneNumber.value == "") {
        showErrorMessage(errorMessage[1], inputList[3], !phonNumberVerified);
    } else {
        if (phoneNumberRegexp.test(email) === false) {
            showErrorMessage(errorMessage[1], inputList[3], phonNumberVerified);
            phonNumberVerified = !phonNumberVerified;
        } else {
            showErrorMessage(errorMessage[1], inputList[3], !phonNumberVerified);
        }
    }

    /**
     * It allows to show dialog content if the form has been filled
     */
    if ((emailVerified || phonNumberVerified) === false) {
        return false;
    } else {
        var form = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            message: message.value,
            acceptTerms: acceptTerms.checked
        };

        dialogContent.innerHTML = "<pre> Firstname: " + form.firstname + "\n Lastname: " + form.lastname + "\n Email: " + form.email + "\n Phone number: " + form.phoneNumber + "\n Message: " + form.message + "\n send newsletter: " + form.acceptTerms + "</pre>"
        dialog.style.display    = "block";
        return false
    }

    /**
     * It allows show error message on the inputs
     */
    function showErrorMessage(error, element, validate) {
        if (validate) {
            element.classList.add('input--error');
            error.classList.add('error__message--show');
        } else {
            element.classList.remove('input--error');
            error.classList.remove('error__message--show');
        }
    }

};

/**
 * It allows clear form
 */
function clearForm() {
    firstname.value     = "";
    lastname.value      = "";
    email.value         = "";
    phoneNumber.value   = "";
    message.value       = "";
    acceptTerms.checked = false
}