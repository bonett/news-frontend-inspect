
const emailRegexp       = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      phoneNumberRegexp = /^\D?(\d{2})\D?\D?(\d{3})\D?(\d{4})$/;

let firstname          = document.getElementById("fname"),
    lastname           = document.getElementById("lname"),
    email              = document.getElementById("email"),
    phoneNumber        = document.getElementById("pnumber"),
    message            = document.getElementById("message"),
    acceptTerms        = document.getElementById("accept-terms"),
    checkboxField      = document.querySelector(".checkmark"),
    inputList          = document.querySelectorAll('input'),
    textarea           = document.querySelectorAll('textarea'),
    dialog             = document.getElementById("myDialog"),
    dialogContent      = document.getElementById('response'),
    dialogClose        = document.getElementsByClassName("dialog--close")[0],
    firstnameVerified  = false,
    lastnameVerified   = false,
    emailVerified      = false,
    phonNumberVerified = false,
    messageVerified    = false;

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

const formValidations = () => {

    let errorMessage = document.getElementsByClassName("error__message");
    
    /**
     * It allows valiate firstname field
     */
    if (firstname.value == "") {
        showErrorMessage(errorMessage[0], inputList[0], !firstnameVerified);
    } else {
        showErrorMessage(errorMessage[0], inputList[0], firstnameVerified);
        firstnameVerified = !firstnameVerified;
    }

     /**
     * It allows valiate lastname field
     */
    if (lastname.value == "") {
        showErrorMessage(errorMessage[1], inputList[1], !lastnameVerified);
    } else {
        showErrorMessage(errorMessage[1], inputList[1], lastnameVerified);
        lastnameVerified = !lastnameVerified;
    }

    /**
     * It allows valiate email field
     */
    if (email.value == "") {
        showErrorMessage(errorMessage[2], inputList[2], !emailVerified);
    } else {
        if (emailRegexp.test(email) === false) {
            showErrorMessage(errorMessage[2], inputList[2], emailVerified);
            emailVerified = !emailVerified;
        } else {
            showErrorMessage(errorMessage[2], inputList[2], !emailVerified);
        }
    }

    /**
     * It allows valiate phone number field
     */
    if (phoneNumber.value == "") {
        showErrorMessage(errorMessage[3], inputList[3], !phonNumberVerified);
    } else {
        if (phoneNumberRegexp.test(email) === false) {
            showErrorMessage(errorMessage[3], inputList[3], phonNumberVerified);
            phonNumberVerified = !phonNumberVerified;
        } else {
            showErrorMessage(errorMessage[3], inputList[3], !phonNumberVerified);
        }
    }

    /**
     * It allows valiate message field
     */
    if (message.value == "") {
        showErrorMessage(errorMessage[4], textarea[0], !messageVerified);
    } else {
        showErrorMessage(errorMessage[4], textarea[0], messageVerified);
        messageVerified = !messageVerified;
    }

     /**
     * It allows valiate message field
     */
    if (!acceptTerms.checked) {
        checkboxField.classList.add('input--error');
    } else {
        checkboxField.classList.remove('input--error');
    }

    /**
     * It allows to show dialog content if the form has been filled
     */
    if ((firstnameVerified && lastnameVerified && emailVerified && phonNumberVerified && messageVerified && acceptTerms.checked) === false) {
        return false;
    } else {
        const form = {
            firstname  : firstname.value,
            lastname   : lastname.value,
            email      : email.value,
            phoneNumber: phoneNumber.value,
            message    : message.value,
            acceptTerms: acceptTerms.checked
        };

        dialogContent.innerHTML = "<pre> Firstname: " + form.firstname + "\n Lastname: " + form.lastname + "\n Email: " + form.email + "\n Phone number: " + form.phoneNumber + "\n Message: " + form.message + "\n send newsletter: " + form.acceptTerms + "</pre>"
        dialog.style.display    = "block";
        return false;
    }
};

 /**
 * It allows show error message on the inputs
 */
const showErrorMessage = (error, element, validate) => {
    if (validate) {
        element.classList.add('input--error');
        error.classList.add('error__message--show');
    } else {
        element.classList.remove('input--error');
        error.classList.remove('error__message--show');
    }
}

/**
 * It allows clear form
 */
function clearForm() {
    firstname.value     = "";
    lastname.value      = "";
    email.value         = "";
    phoneNumber.value   = "";
    message.value       = "";
    acceptTerms.checked = false;
    firstnameVerified  = false,
    lastnameVerified   = false,
    emailVerified      = false,
    phonNumberVerified = false,
    messageVerified    = false;
}