import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';

const style = {
    fontSize: 40,
    width: 100,
    margin: '0 auto',
    textAlign: 'center'
};

const App = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#000');

    const changeCount = action => {
        setCount(prevState => action === 'increment' ? prevState + 1 : prevState - 1);
    }

    useEffect(() => {
        setColor(randomColor());
    }, [count]);

    return (
        <div style={style}>
            <h1 style={{ color }}>{count}</h1>
            <button onClick={() => changeCount('increment')}>Increment</button>
            <button onClick={() => changeCount('decrement')}>Decrement</button>
        </div>
    )
};

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: 'John Smith'
//         };
//     }

//     render() {
//         return <h1>Hello, {this.state.name}</h1>
//     }
// }

export default App;