import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import Counter from './Counter';

const style = {
    fontSize: 40,
    width: 500,
    margin: '0 auto',
    textAlign: 'center'
};

const App = () => {
    const max = 4;
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#000');

    // useState approach with objects
    // const obj = { asd: 'asd' };
    // const [myObject, setMyObject] = useState(obj);
    // obj.app = 'adsad';
    // setMyObject({ ...obj });
    

    const changeCount = action => {
        setCount(prevState => action === 'increment' ? prevState + 1 : prevState - 1);
    }

    // componentDidMount
    useEffect(() => {
        console.log('Component did mount.');
    }, []);

    // componentDidUpdate
    useEffect(() => {
        setColor(randomColor());
    }, [count]);

    return (
        <div style={style}>
            <h1 style={{ color }}>{count}</h1>
            <button onClick={() => changeCount('increment')}>Increment</button>
            <button onClick={() => changeCount('decrement')}>Decrement</button>
            {count < 4 && (
                <Counter max={4} />
            )}
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