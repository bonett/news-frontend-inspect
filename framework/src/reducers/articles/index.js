import _ from 'lodash';
import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
    FETCH_LOAD_MORE,
    LOAD_MORE_ENABLED
} from '../../types';

const initialState = {
    loading   : false,
    list      : [],
    onload    : [],
    error     : '',
    isDisabled: true,
};

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
        return {
            ...state,
            loading: true,
        };
    case LOAD_MORE_ENABLED:
        return {
            ...state,
            isDisabled: action.payload,
        };
    case FETCH_LOAD_MORE:
        return {
            ...state,
            loading: false,
            onload : state.onload.concat(action.payload)
        };
    case FETCH_ARTICLES_SUCCESS:
        return {
            ...state,
            loading: false,
            list   : action.payload,
            onload : _.slice(action.payload, 0, 4),
            error  : ''
        };
    case FETCH_ARTICLES_FAILURE:
        return {
            loading: false,
            list: [],
            error: 'Error'
        };
    default:
        return state;
    }
};
