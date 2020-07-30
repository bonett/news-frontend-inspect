import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import RouterApp from './router';

import 'emerald-ui/lib/styles.css';
import './themes/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <RouterApp />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
