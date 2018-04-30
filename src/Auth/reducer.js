import {
    USER_LOGGIN,
    USER_LOGOUT
} from '../consts';

const INITIAL_STATE = {
    user: {},
    isAuth: false
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGGIN:
            return {...state, user: action.payload, isAuth: true}
        case USER_LOGOUT:
            return {...state, user: INITIAL_STATE.user, isAuth: INITIAL_STATE.isAuth}
        default:
            return state;
    }
};

export default authReducer;