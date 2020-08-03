import { ALERT_MSG_HIDDEN, ALERT_MSG_SHOW } from '../../types';

const initialState = {
    isOpen: true,
};

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
    case ALERT_MSG_SHOW:
        return {
            ...state,
            isOpen: action.payload,
        };
    case ALERT_MSG_HIDDEN:
        return {
            ...state,
            isOpen: action.payload,
        };
    default:
        return state;
    }
};
