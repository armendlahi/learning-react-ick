import React from 'react';

const Person = ({ data: { name, avatar, dateOfBirth, email }}) => {
    const style = {
        width: 150,
        height: 150
    };

    return (
        <div className="person">
            <img src={avatar} alt={name} style={style} />
            <h3>{name}</h3>
            <h4>{dateOfBirth}</h4>
            <h4><a href={`mailto:${email}`}>{email}</a></h4>
            <hr />
        </div>
    );
};

export default Person;