import React from 'react';
import ReactDOM from 'react-dom';

function MyList() {
    return (
        <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Other</li>
        </ul>
    );
}

// JSX
ReactDOM.render(
    <MyList />,
    document.getElementById('root')
);

// var h1 = document.createElement('h1');
// h1.innerText = 'Hello';
// document.getElementById('root').appendChild(h1)