function customInputValidation() {

    var validateElements = document.getElementsByClassName("validate");

    console.log(validateElements)

    var inputs = Array.prototype.filter.call(validateElements,
        (element) => {
            return element.nodeName === 'INPUT';
        });

    for (index = 0; index < inputs.length; index++) {

        var input = inputs[index];

        if (input.value.length < 1 && input.id === 'email') {
            input.placeholder = "Enter value email";
            input.classList.add("input--error");
        }

        if (input.value.length < 1 && input.id === 'pnumber') {
            input.placeholder = "Enter a valid phone number";
            input.classList.add("input--error");
        }
    }
}