import axios from 'axios';
import _ from 'lodash';
import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
    FETCH_LOAD_MORE,
    LOAD_MORE_ENABLED
} from '../../types';

import { BASE_URL, API_KEY } from '../../data/constants';

export const fetchArticlesRequest = () => {
    return {
        type: FETCH_ARTICLES_REQUEST
    };
};

export const loadMoreEnabled = (status) => {
  return {
      type: LOAD_MORE_ENABLED,
      payload: status
  };
};

export const fetchArticlesSuccess = articles => {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        payload: articles,
    };
};

export const fetchLoadMoreArticles = newArticles => {
  return {
      type: FETCH_LOAD_MORE,
      payload: newArticles,
  };
};

export const fetchArticlesFailure = error => {
    return {
        type: FETCH_ARTICLES_FAILURE,
        payload: error,
    };
};

export const fetchArticles = (init, limit) => {
    return dispatch => {
        axios
            .get(`${BASE_URL}?query=%7B%22%24query%22%3A%7B%22lang%22%3A%22eng%22%7D%7D&dataType=news&resultType=articles&articlesSortBy=date&articlesPage=1&articlesCount=50&articleBodyLen=-1&apiKey=${API_KEY}`)
            .then(response => {
                if(response) {
                  const result   = response && response.data,
                        dataList = result && result.articles,
                        articles = dataList && dataList.results;
                        
                  dispatch(loadMoreEnabled(false));
                  dispatch(fetchArticlesSuccess(articles));
                }
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(FETCH_ARTICLES_FAILURE(errorMessage));
            });
    };
};

export const fetchMoreArticles = (data, init, limit) => {
  return dispatch => {

    dispatch(fetchArticlesRequest());

    if (data.length - limit < 4) {
     setTimeout(() => {
      dispatch(fetchLoadMoreArticles(_.slice(data, init, data.length)));
      dispatch(loadMoreEnabled(true)); 
     }, 1000);
    } else {
      setTimeout(() => {
        dispatch(fetchLoadMoreArticles(_.slice(data, init, limit)));
      }, 1000);
    }
  };
};
