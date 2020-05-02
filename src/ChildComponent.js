import React from 'react';

function ChildComponent(props) {
    return (
        <h2 style={{ color: 'red' }}>State inside child component: {props.counter}</h2>
    );
}

export default ChildComponent;