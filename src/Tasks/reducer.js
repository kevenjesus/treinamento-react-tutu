import {
    SHOW_TASKS,
    DELETE_TASK
} from '../consts';

const INITIAL_STATE = {
    items: []
};

const TaskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SHOW_TASKS:
            return {...state, items: action.payload};
        case DELETE_TASK:
            const index = state.items.map(t => t.id).indexOf(action.payload.id);
            const newListTasks = state.items.splice(0, index);
            return {...state, items: newListTasks}
        default:
            return state;
    }
};

export default TaskReducer;
