import { SHOW_ALERT } from '../../constants';

const INITIAL_STATE = true;

export const AlertPreviewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return false;
        default:
            return state;
    }
}