import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { handlerHiddenMsg } from '../../../actions/alert';

import Alert from 'emerald-ui/lib/Alert';
import ButtonComponent from '../button';

import './style.scss';

const AlertComponent = ({ message, closable, color, alertOption, alertMsgHidden }) => {

    const handleOption = (opt) => {
        alertMsgHidden(opt);
    }

    const showAlertMsg = () => {
        return (
            <Alert className="alert__content" color={color}>
                <div className="alert__content__message">
                    {message}
                </div>
                <div className="alert__content__button btn-toolbar">
                    <ButtonComponent closable={closable} handleClickToClose={handleOption} />
                </div>
            </Alert>
        )
    }

    return (
        <> { alertOption.isOpen ? showAlertMsg() : null } </>
    );
}

AlertComponent.propTypes = {
    color   : PropTypes.string.isRequired,
    message : PropTypes.string.isRequired,
    closable: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
    return {
        alertOption: state.alertMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        alertMsgHidden: (opt) => dispatch(handlerHiddenMsg(opt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent);
