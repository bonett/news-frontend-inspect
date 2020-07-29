
const emailRegexp       = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]{4,})+\.)+([a-zA-Z0-9]{2,})((\.+([a-zA-Z0-9]{2,}))?)+$/,
      phoneNumberRegexp = /^([0-9]{10})$/,
      firstname         = document.getElementById("fname"),
      lastname          = document.getElementById("lname"),
      email             = document.getElementById("email"),
      phoneNumber       = document.getElementById("pnumber"),
      message           = document.getElementById("message"),
      acceptTerms       = document.getElementById("accept-terms")

let inputList          = document.querySelectorAll('input'),
    textarea           = document.querySelectorAll('textarea'),
    dialog             = document.getElementById("myDialog"),
    dialogContent      = document.getElementById('response'),
    dialogClose        = document.getElementsByClassName("dialog--button")[0],
    errorMessage       = document.getElementsByClassName("error__message")
    firstnameVerified  = false,
    lastnameVerified   = false,
    emailVerified      = false,
    phonNumberVerified = false,
    messageVerified    = false;

/**
 * Shold be close dialog and clear form
 */
dialogClose.onclick = () => {
    dialog.style.display = "none";
    clearForm();
}

/**
 * Shold be close dialog and clear form when the click is ourside dialog content
 */
const hiddenDialog = () => {
    dialog.style.display = "none";
    clearForm();
    document.querySelector("body").removeEventListener("click", hiddenDialog);
}

/**
 * get inputs validation by ID
 */
const formValidations = (event) => {

    let field = document.getElementById(event.target.id);

    switch (field.id) {
        case "email": 
            checkEmail(field);
            break;
        case "pnumber": 
            checkPhoneNumber(field);
            break;
        default: 
            checkField(field);
            break;
    }
};

/**
 * It allows valiate email field
 */
const checkEmail = (field) => {

    let index = getFormElementError(field.id);

    if (field.value != "") {
        if (field.value.length > 0 && emailRegexp.test(field.value)) {
            emailVerified = true;
            removeErrorMessage(errorMessage[index], inputList[index]);
        } else {
            emailVerified = false;
            showErrorMessage(errorMessage[index], inputList[index]);
        }
    } else {
        emailVerified = false;
        showErrorMessage(errorMessage[index], inputList[index]);
    }
}

/**
 * It allows valiate email field
 */
const checkPhoneNumber = (field) => {

    let index = getFormElementError(field.id);

    if (field.value != "") {
        if (field.value.length > 0 && phoneNumberRegexp.test(field.value)) {
            phonNumberVerified = true;
            removeErrorMessage(errorMessage[index], inputList[index]);
        } else {
            phonNumberVerified = false;
            showErrorMessage(errorMessage[index], inputList[index]);
        }
    } else {
        phonNumberVerified = false;
        showErrorMessage(errorMessage[index], inputList[index]);
    }
}

/**
 * It allows valiate text field
 */
const checkField = (field) => {

    let index = getFormElementError(field.id);

    if (field.id === "fname") {
        if (field.value != "") {
            if (field.value.length > 0) {
                firstnameVerified = true;
                removeErrorMessage(errorMessage[index], inputList[index]);
            } else {
                firstnameVerified = false;
                showErrorMessage(errorMessage[index], inputList[index]);
            }
        } else {
            firstnameVerified = false;
            showErrorMessage(errorMessage[index], inputList[index]);
        }
    }

    if (field.id === "lname") {
        if (field.value != "") {
            if (field.value.length > 0) {
                lastnameVerified = true;
                removeErrorMessage(errorMessage[index], inputList[index]);
            } else {
                lastnameVerified = false;
                showErrorMessage(errorMessage[index], inputList[index]);
            }
        } else {
            lastnameVerified = false;
            showErrorMessage(errorMessage[index], inputList[index]);
        }
    }

    if (field.id === "message") {
        if (field.value != "") {
            if (field.value.length > 0) {
                messageVerified = true;
                removeErrorMessage(errorMessage[4], textarea[index]);
            } else {
                messageVerified = false;
                showErrorMessage(errorMessage[4], textarea[index]);
            }
        } else {
            messageVerified = false;
            showErrorMessage(errorMessage[4], textarea[index]);
        }
    }
}

/**
 * get index to show error by element position
 */
const getFormElementError = (element) => {

    let index;

    switch (element) {
        case "fname": 
            index = 0;
            break;
        case "lname": 
            index = 1;
            break;
        case "email": 
            index = 2;
            break;
        case "pnumber": 
            index = 3;
            break;
        default: 
            index = 0;
            break;
    }

    return index
}

/**
* It allows remove error message
*/
const removeErrorMessage = (error, input) => {
    input.classList.remove('input--error');
    error.classList.remove('error__message--show');
}

/**
* It allows show error message on the inputs
*/
const showErrorMessage = (error, input) => {
    input.classList.add('input--error');
    error.classList.add('error__message--show');
}

/**
 * It allows to show dialog content if the form has been filled
 */
const submitForm = () => {
    if ((firstnameVerified && lastnameVerified && emailVerified && phonNumberVerified && messageVerified) === false) {
        return false;
    } else {

        document.body.style.overflowY = "hidden";

        const form        = {
                firstname  : firstname.value,
                lastname   : lastname.value,
                email      : email.value,
                phoneNumber: phoneNumber.value,
                message    : message.value,
                acceptTerms: acceptTerms.checked
            };

        dialogContent.innerHTML = "<pre> Firstname: " + form.firstname + "\n Lastname: " + form.lastname + "\n Email: " + form.email + "\n Phone number: " + form.phoneNumber + "\n Message: " + form.message + "\n send newsletter: " + form.acceptTerms + "</pre>"
        openDialog();
        return false;
    }
}

/**
 * It allows open dialog
 */
const openDialog = () => {
    dialog.style.display    = "block";
    document.querySelector("body").addEventListener("click", hiddenDialog);
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
    firstnameVerified   = false,
    lastnameVerified    = false,
    emailVerified       = false,
    phonNumberVerified  = false,
    messageVerified     = false;

    document.body.style.overflowY = "scroll";
}