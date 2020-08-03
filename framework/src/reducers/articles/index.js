import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
} from '../../types';

const initialState = {
    loading: false,
    list: [],
    error: '',
};

export const articleReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
        return {
            loading: true,
        };
    case FETCH_ARTICLES_SUCCESS:
        return {
            loading: false,
            list: action.payload,
            error: '',
        };
    case FETCH_ARTICLES_FAILURE:
        return {
            loading: false,
            list: [],
            error: '',
        };
    default:
        return state;
    }
};
