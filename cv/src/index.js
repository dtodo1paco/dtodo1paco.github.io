import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import AppWrapper from './containers/App/AppWrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
