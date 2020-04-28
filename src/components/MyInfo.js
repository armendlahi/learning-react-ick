import React from 'react';

const MyInfo = () => {
    const firstName = 'Entor'; 
    const lastName = 'Arifi'; 

    const myStyle = {
        color: 'green',
        backgroundColor: 'orange',
        fontSize: 45,
        border: '10px dotted black'
    };

    return (
        <div>
            <h1 style={myStyle}>{`${firstName} ${lastName}`}</h1>
            <p>I am Entor Arifi and I enjoy writing react applications.</p>

            <h4>My favorite languages</h4>
            <ul>
                <li>JavaScript</li>
                <li>Golang</li>
                <li>Java</li>
            </ul>
        </div>
    )
}

export default MyInfo;