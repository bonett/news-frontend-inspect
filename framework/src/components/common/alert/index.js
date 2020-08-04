import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { handlerHiddenMsg } from '../../../actions/alert';

import Alert from 'emerald-ui/lib/Alert';

import './style.scss';

const AlertComponent = ({
    message,
    color,
    alertOption,
    alertMsgHidden,
}) => {
    const handleOption = opt => {
        alertMsgHidden(opt);
    };

    const showAlertMsg = () => {
        return (
            <Alert className="alert__content" color={color} dismissible={true} onDismiss={() => handleOption(false)}>
                <div className="alert__content__message">{message}</div>
            </Alert>
        );
    };

    return <> {alertOption.isOpen ? showAlertMsg() : null} </>;
};

AlertComponent.propTypes = {
    color: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    alertOption: PropTypes.object,
    alertMsgHidden: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        alertOption: state.alertMsg,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        alertMsgHidden: opt => dispatch(handlerHiddenMsg(opt)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent);
