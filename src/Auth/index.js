import React from 'react';
import Button from 'material-ui/Button';

import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';
import * as authActions from './actions';
import { authValidate } from './validators';
import Input from '../common/Input';


const Auth = props => {
    const { handleSubmit } = props;
    console.log('auth user', props.auth.user.user);
    return (
    <form onSubmit={handleSubmit(v => props.login(v))}>
        <img src={props.auth.user.avatar} />
        <h1> {props.auth.user.name}  </h1>

        <Field 
            name="username" 
            component={Input}
            label="Login" 
            type="text" />
        
        <Field 
            name="password" 
            component={Input}
            label="Senha" 
            type="text" />
            <Button variant="raised" color="primary" type="submit">Entrar</Button>

    </form>
    );
};
const mapStateToProps = state => ({auth: state.auth});
export default reduxForm({form: 'auth', validate: authValidate})(connect(mapStateToProps, {...authActions})(Auth));