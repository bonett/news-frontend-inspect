import axios from "axios";
import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
} from '../types';

export const fetchArticlesRequest = () => {
    return {
        type: FETCH_ARTICLES_REQUEST
    }
}

export const fetchArticlesSuccess = articles => {
    return {
        type   : FETCH_ARTICLES_SUCCESS,
        payload: articles
    }
}

export const fetchArticlesFailure = error => {
    return {
        type   : FETCH_ARTICLES_FAILURE,
        payload: error
    }
}

export const fetchArticles = () => {
    return (dispatch) => {
        dispatch(fetchArticlesRequest)
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                const articles = response.data;
                dispatch(fetchArticlesSuccess(articles));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(FETCH_ARTICLES_FAILURE(errorMessage));
            })
    };
};