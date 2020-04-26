import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
    return (
        <div>
            <h1>Entor Arifi</h1>
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

ReactDOM.render(<MyInfo />, document.getElementById('root'));