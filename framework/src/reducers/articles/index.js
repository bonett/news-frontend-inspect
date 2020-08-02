import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
} from '../../types'

const initialState = {
    loading: false,
    articles: [],
    error: ''
};

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLES_REQUEST:
            return {
                loading: true
            }
        case FETCH_ARTICLES_SUCCESS:
            return {
                loading: false,
                list: action.payload,
                error: ''
            }
        case FETCH_ARTICLES_FAILURE:
            return {
                loading: false,
                list: [],
                error: action.payload
            }
        default: 
            return state;
    }
}