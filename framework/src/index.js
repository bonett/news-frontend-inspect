import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import store from './store';
import RouterApp from './router';

import 'emerald-ui/lib/styles.css';
import './themes/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
