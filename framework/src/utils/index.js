const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneNumberRegexp = /^([0-9]{10})$/;
    
const validateTextField = (field, id) => {
        
    let result;

    if (id === 'firstname') {
        if (field !== '') {
            if (field.length > 0) {
                result = {
                    value: field,
                    verified: true,
                    message: '',
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Firstname is required',
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Firstname is required',
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
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Lastname is required',
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Lastname is required',
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
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Message is required',
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Message is required',
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
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Email is required',
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Email is required',
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
                };
            } else {
                result = {
                    value: field,
                    verified: false,
                    message: 'Phone number is required (10 digits)',
                };
            }
        } else {
            result = {
                value: field,
                verified: false,
                message: 'Phone number is required (10 digits)',
            };
        }
    }

    return result;
};

export default validateTextField;