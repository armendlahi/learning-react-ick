import React from 'react';

const Person = props => {
    const style = {
        width: 150,
        height: 150
    };

    return (
        <div className="person">
            <img src={props.data.avatar} alt={props.data.name} style={style} />
            <h3>{props.data.name}</h3>
            <h4>{props.data.dateOfBirth}</h4>
            <h4><a href={`mailto:${props.data.email}`}>{props.data.email}</a></h4>
            <hr />
        </div>
    );
};

export default Person;