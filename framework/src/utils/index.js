/*eslint-disable */
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneNumberRegexp = /^([0-9]{10})$/;

/*eslint-enable */    
const validateTextField = (field, id) => {
        
    let result;

    if (id === 'firstname') {
        if (field !== '') {
            if (field.length > 0) {
                result = {
                    value: field,
                    verified: true,
                    message: '',
                    customized: false
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Firstname is required',
                    customized: false
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Firstname is required',
                customized: false
            };
        }
    }

    if (id === 'lastname') {
        if (field !== '') {
            if (field.length > 0) {
                result = {
                    value: field,
                    verified: true,
                    message: '',
                    customized: false
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Lastname is required',
                    customized: false
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Lastname is required',
                customized: false
            };
        }
    }

    if (id === 'message') {
        if (field !== '') {
            if (field.length > 0) {
                result = {
                    value: field,
                    verified: true,
                    message: '',
                    customized: false
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Message is required',
                    customized: true
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Message is required',
                customized: true
            };
        }
    }

    if (id === 'email') {
        if (field !== '') {
            if (field.length > 0 && emailRegexp.test(field)) {
                result = {
                    value: field,
                    verified: true,
                    message: '',
                    customized: false
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Email is required',
                    customized: false
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Email is required',
                customized: false
            };
        }
    }

    if (id === 'phonenumber') {
        if (field !== '') {
            if (field.length > 0 && phoneNumberRegexp.test(field)) {
                result = {
                    value: field,
                    verified: true,
                    message: '',
                    customized: false
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Phone number is required (10 digits)',
                    customized: false
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Phone number is required (10 digits)',
                customized: false
            };
        }
    }

    return result;
};

export default validateTextField;