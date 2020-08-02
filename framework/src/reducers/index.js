import { combineReducers } from 'redux';

import { AlertPreviewReducer } from './alert';
import { ArticlesReducer } from './articles';
import { LoadingReducer } from './loading';


const rootReducer = combineReducers({
    articles : ArticlesReducer,
    loader   : LoadingReducer,
    showAlert: AlertPreviewReducer
})

export default rootReducer;