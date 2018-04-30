import { 
    USER_LOGGIN,
    USER_LOGOUT
} from '../consts';


export const login = values => {
    console.log('values', values);
    const userFetch = {
        name: 'Keven Jesus',
        avatar: '//via.placeholder.com/300x300'
    }

    return {
        type: USER_LOGGIN,
        payload: userFetch
    }
};

export const logout = () => {
    return {
        type: USER_LOGOUT
    }
}