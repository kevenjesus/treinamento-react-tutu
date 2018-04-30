import {
    SHOW_TASKS,
    DELETE_TASK
} from '../consts';

export const deletaTask = task => ({
    type: DELETE_TASK,
    payload: task 
});

export const showTasks = tasks => ({
    type: SHOW_TASKS,
    payload: tasks
})