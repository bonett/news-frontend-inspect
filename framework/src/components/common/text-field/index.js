import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'emerald-ui/lib/TextField';

import './style.scss';

const TextFieldComponent = ({ id, label, errorMessage, handleInputControl, value }) => {
    return (
        <TextField
            id={id}
            label={label}
            defaultValue={value}
            onChange={(event) => { handleInputControl(event.target) }}
            errorMessage={errorMessage} />
    );
}

TextFieldComponent.propTypes = {
    id                : PropTypes.string.isRequired,
    label             : PropTypes.string.isRequired,
    errorMessage      : PropTypes.string.isRequired,
    handleInputControl: PropTypes.func,
    value             : PropTypes.any,
}

export default TextFieldComponent;
