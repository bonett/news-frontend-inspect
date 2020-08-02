import { 
    ALERT_MSG_HIDDEN,
    ALERT_MSG_SHOW
} from '../types';

export const alertMsgShow = (opt) => {
    return {
        type: ALERT_MSG_SHOW,
        payload: opt
    }
}

export const alertMsgHidden = (opt) => {
    return {
        type   : ALERT_MSG_HIDDEN,
        payload: opt
    }
}

export const handlerHiddenMsg = (opt) => {
    return (dispatch) => {
        dispatch(alertMsgHidden(opt))
    };
};