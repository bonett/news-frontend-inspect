import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'emerald-ui/lib/Alert';
import ButtonComponent from '../button';

import './style.scss';

const AlertComponent = (props) => {

    const { message, closable, color } = props;

    return (
        <Alert className="alert__content" color={color}>
            <div className="alert__content__message">
                {message}
          </div>
            <div className="alert__content__button btn-toolbar">
                <ButtonComponent closable={closable} />
            </div>
        </Alert>
    );
}

AlertComponent.propTypes = {
    color: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    closable: PropTypes.bool.isRequired,
}

export default AlertComponent;
