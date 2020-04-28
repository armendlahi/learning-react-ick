import React from 'react';

const Person = props => {
    const style = {
        width: 150,
        height: 150
    };

    return (
        <div className="person">
            <img src={props.avatar} alt={props.name} style={style} />
            <h3>{props.name}</h3>
            <h4>{props.dateOfBirth}</h4>
            <h4><a href="mailto:{props.email}">{props.email}</a></h4>
            <hr />
        </div>
    );
};

export default Person;