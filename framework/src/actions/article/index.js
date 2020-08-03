import axios from 'axios';
import _ from 'lodash';
import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
    FETCH_LOAD_MORE,
    LOAD_MORE_ENABLED
} from '../../types';

const data = [
    {
        id: 0,
        title: 'Atlantci investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 1,
        title:
      'Contintnela investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 2,
        title: 'Argentina investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 3,
        title:
      'Brasil Has been investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 4,
        title:
      'Contintnela investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 5,
        title: 'Argentina investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 6,
        title:
      'Brasil Has been investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 7,
        title:
      'Contintnela investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 8,
        title: 'Argentina investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 9,
        title:
      'Brasil Has been investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 10,
        title:
      'Contintnela investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 11,
        title: 'Argentina investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 12,
        title:
      'Brasil Has been investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 13,
        title:
      'Contintnela investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 14,
        title: 'Argentina investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    },
    {
        id: 15,
        title:
      'Brasil Has been investigate crime syndicate involvement after teens c...',
        description:
      'Cueensland police are investigating whether young women at the centre of the state\'s latest coronavirus controversy were coached by an organised crime syndicate to cover their tracks at the border.',
        image:
      'https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/12506738-3x2-large-2-960x600.jpg',
        url:
      'https://thenewdaily.com.au/news/2020/07/31/queensland-police-brisbane-teens-coronavirus/',
    }
];

export const fetchArticlesRequest = () => {
    return {
        type: FETCH_ARTICLES_REQUEST,
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
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                /* response.result; */
                if(data) {
                  const articles = data;
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
    if (data.length - limit < 4) {
      dispatch(fetchLoadMoreArticles(_.slice(data, init, data.length)));
      dispatch(loadMoreEnabled(true)); 
    } else {
      dispatch(fetchLoadMoreArticles(_.slice(data, init, limit)));
    }
  };
};
