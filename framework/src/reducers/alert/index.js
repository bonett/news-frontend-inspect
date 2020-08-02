import { SHOW_ALERT_MSG } from '../../types';

const initialState = {
    isOpen: true
};

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT_MSG: 
            return {
                ...state,
                isOpen: false
            }
        default: 
            return state;
    }
}