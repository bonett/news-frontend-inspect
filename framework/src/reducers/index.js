import { combineReducers } from 'redux';

import { AlertPreviewReducer } from './alert';
import { articleReducer } from './articles';
import { LoadingReducer } from './loading';


const rootReducer = combineReducers({
    articles : articleReducer,
    /* loader   : LoadingReducer,
    showAlert: AlertPreviewReducer */
})

export default rootReducer;