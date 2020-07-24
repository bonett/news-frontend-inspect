function customInputValidation() {

    var validateElements = document.getElementsByClassName("validate");
    var isChecked = termsConditionsChecked();
    var inputs = Array.prototype.filter.call(validateElements,
        (element) => {
            return element.nodeName === 'INPUT';
        });

    for (index = 0; index < inputs.length; index++) {

        var input = inputs[index];

        if (input.value.length < 1 && input.id === 'email') {
            input.placeholder = "Enter a valid email";
            input.classList.add("input--error");
        }

        if (input.value.length < 1 && input.id === 'pnumber') {
            input.placeholder = "Enter a valid phone number";
            input.classList.add("input--error");
        }
    }

    if (isChecked) {
        alert('sent');
    }
}

function termsConditionsChecked(input) {
    return document.getElementById('accept-terms').checked;
}