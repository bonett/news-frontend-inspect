import { combineReducers } from 'redux';

import { alertReducer } from './alert';
import { articleReducer } from './articles';


const rootReducer = combineReducers({
    articles : articleReducer,
    alertMsg: alertReducer
})

export default rootReducer;