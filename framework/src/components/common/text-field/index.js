import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'emerald-ui/lib/TextField';

import './style.scss';

const TextFieldComponent = (props) => {

    const { id, label, errorMessage } = props;

    return (
        <TextField
            id={id}
            label={label}
            ariaLabel={id}
            role="textbox"
            errorMessage={errorMessage} />
    );
}

TextFieldComponent.propTypes = {
    id          : PropTypes.string.isRequired,
    label       : PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
}

export default TextFieldComponent;
