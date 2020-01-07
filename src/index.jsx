import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={configureStore()}>
        <App history={history} />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();