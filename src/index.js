import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tasks from './Tasks';
import Auth from './Auth';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';


import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
<Provider store={store}>
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/tasks' component={Tasks} />
            <Route path='/login' component={Auth} />
        </div>
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
