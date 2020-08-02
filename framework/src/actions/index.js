/* import axios from "axios";
;

const fetchedArticles = (articles) => {
    return { type: FETCHED_ARTICLES, articles }
}

const loadingArticles = () => {
    return { type: LOADING_ARTICLES }
}

const fetchingArticles = () => {
    return dispatch => {
        dispatch(loadingArticles());
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                console.log(res)
                res.data;
            })
            .then(data => {
                dispatch(fetchedArticles(data))
            })
    };
}
export { fetchingArticles }; */

import axios from "axios";
import { API_URL, GET_ARTICLES_FAILURE, GET_ARTICLES_SUCCESS } from '../constants';

export const getArticles = () => {
    return (dispatch) => {
        // Return promise with success and failure actions
        return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(
            res  => res.data,
            data => dispatch({ type: GET_ARTICLES_SUCCESS, data }),
            err  => dispatch({ type: GET_ARTICLES_FAILURE, err })
        );
    };
};