import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'emerald-ui/lib/IconButton';
import Button from 'emerald-ui/lib/Button';

import './style.scss';

const ButtonComponent = ({
    title,
    color,
    shape,
    className,
    handleClickButton,
    isDisabled
}) => {
    return (
        <Button
            color={color}
            className={className}
            disabled={isDisabled}
            onClick={() => handleClickButton()}
            shape={shape}
        >
            {title}
        </Button>
    );
};

ButtonComponent.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    shape: PropTypes.string,
    handleClickButton: PropTypes.func,
    isDisabled: PropTypes.bool,
};

export default ButtonComponent;
