import { combineReducers, createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { reducer as formReducer } from 'redux-form'
import TaskReducer from './Tasks/reducer';
import authReducer from './Auth/reducer';


const store = combineReducers({
    tasks: TaskReducer,
    form: formReducer,
    auth: authReducer
});

export default applyMiddleware(promise)(createStore)(store);
