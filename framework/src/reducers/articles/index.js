import { API_URL, GET_ARTICLES_FAILURE, GET_ARTICLES_SUCCESS } from '../../constants';

const INITIAL_STATE = []

export const ArticlesReducer = (state = INITIAL_STATE, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: state.concat(action.payload)
            }
        default:
            return state;
    }
}