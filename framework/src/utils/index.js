/*eslint-disable */
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneNumberRegexp = /^([0-9]{10})$/;

/*eslint-enable */    
const validateTextField = (field, id) => {
        
    let result;

    if (id === 'firstname') {
        if (field !== '') {
            if (field.length > 0) {
                result = defaultResponse(field, true, '', false);
            } else {
                result = defaultResponse(field, false, 'Firstname is required', false);
            }
        } else {
            result = defaultResponse(field, false, 'Firstname is required', false);
        }
    }

    if (id === 'lastname') {
        if (field !== '') {
            if (field.length > 0) {
                result = defaultResponse(field, true, '', false);
            } else {
                result = defaultResponse(field, false, 'Lastname is required', false);
            }
        } else {
            result = defaultResponse(field, false, 'Lastname is required', false);
        }
    }

    if (id === 'message') {
        if (field !== '') {
            if (field.length > 0) {
                result = defaultResponse(field, true, '', false);
            } else {
                result = defaultResponse(field, false, 'Message is required', true);
            }
        } else {
            result = defaultResponse(field, false, 'Message is required', true);
        }
    }

    if (id === 'email') {
        if (field !== '') {
            if (field.length > 0 && emailRegexp.test(field)) {
                result = defaultResponse(field, true, '', false);
            } else {
                result = defaultResponse(field, false, 'Email is required', false);
            }
        } else {
            result = defaultResponse(field, false, 'Email is required', false);
        }
    }

    if (id === 'phonenumber') {
        if (field !== '') {
            if (field.length > 0 && phoneNumberRegexp.test(field)) {
                result = defaultResponse(field, true, '', false);
            } else {
                result = defaultResponse(field, false, 'Phone number is required (10 digits)', false);
            }
        } else {
            result = defaultResponse(field, false, 'Phone number is required (10 digits)', false);
        }
    }

    return result;
};

const defaultResponse = (field, verified, message, customized) => {
    return {
        value: field,
        verified: verified,
        message: message,
        customized: customized
    }
}

export default validateTextField;