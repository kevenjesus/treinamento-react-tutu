import { combineReducers, createStore } from 'redux';
import TaskReducer from './Tasks/reducer';

const store = combineReducers({
    tasks: TaskReducer
});

export default createStore(store);
