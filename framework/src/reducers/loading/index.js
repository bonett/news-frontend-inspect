import { SHOW_LOADER } from '../../constants';

const INITIAL_STATE = false;

export const LoadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return true;
        default:
            return state;
    }
}