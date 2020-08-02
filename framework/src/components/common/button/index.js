import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'emerald-ui/lib/IconButton';
import Button from 'emerald-ui/lib/Button';

import './style.scss';

const ButtonComponent = ({ title, color, shape, className, closable, handleClickToClose }) => {

    return (
        <>
            {
                !closable ?
                    <Button color={color} className={className} shape={shape}>{title}</Button> :
                    <IconButton ariaLabel="Close" onClick={() => handleClickToClose(false) } icon="close" title="Close" />
            }
        </>
    );
}

ButtonComponent.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    shape: PropTypes.string,
    closable: PropTypes.bool.isRequired,
    handleClickToClose: PropTypes.func,
}

export default ButtonComponent;
