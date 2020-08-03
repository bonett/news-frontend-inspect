import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'emerald-ui/lib/TextField';

import './style.scss';

const TextFieldComponent = (props) => {

    const {
        id,
        label,
        errorMessage,
        handleInputControl,
        value,
    } = props;

    const getInputData = (value, id) => {
        handleInputControl(value, id);
    }

    return (
        <TextField
            id={id}
            label={label}
            value={value}
            onChange={(event) => getInputData(event.target.value, event.target.id)}
            errorMessage={errorMessage}
        />
    );
};

TextFieldComponent.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    handleInputControl: PropTypes.func,
    value: PropTypes.any,
};

export default TextFieldComponent;
