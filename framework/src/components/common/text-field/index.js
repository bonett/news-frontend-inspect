import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'emerald-ui/lib/TextField';

import './style.scss';

const TextFieldComponent = (props) => {

    const { label, errorMessage, className } = props;

    return (
        <TextField
            id={label}
            label={label}
            ariaLabel={label}
            role="textbox"
            className={className}
            errorMessage={errorMessage}/>
    );
}

TextFieldComponent.propTypes = {
    label       : PropTypes.string.isRequired,
    className   : PropTypes.string,
    errorMessage: PropTypes.string
}

export default TextFieldComponent;
