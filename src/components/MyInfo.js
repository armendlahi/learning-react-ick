import React from 'react';

const MyInfo = () => {
    const firstName = 'Entor'; 
    const lastName = 'Arifi'; 

    const date = new Date(2020, 4, 28, 4, 20);
    const hour = date.getHours();

    let time;
    // Objects declared as constants can have their properties mutated but they cannot be reasigned.
    const style = {
        fontSize: 50,
        borderBottom: '2px solid orange',
        display: 'inline',
        color: 'black'
    };

    if (hour >= 0 && hour < 12 ) {
        time = 'morning';
        style.color = 'blue';
    } else if (hour >= 12 && hour <= 17) {
        time = 'afternoon';
        style.color = 'green';
    } else {
        time = 'night';
        style.color = 'red';
    }

    return <h1 style={style}>Good {time}.</h1>;
}

export default MyInfo;