import React from 'react';
import TextField from 'material-ui/TextField';

const Input = ({
    input,
    label,
    name,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
        <TextField 
          {...input} 
          error={touched && error ? true : false}
          name={name} 
          label={label} 
          placeholder={label} 
          type={type} />
  
    </div>
  );

  export default Input;