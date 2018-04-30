import React from 'react';

export const PureComponents = props => {
    console.log(props);
    const text = 'tratamentos';
    return (
        <h1>{props.title}</h1>
    )
}

export const PureComponents2 = function(props) {
    return (
        <h1>Componente puro2</h1>
    )
}