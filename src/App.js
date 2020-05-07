import React, { useState } from 'react';

const style = {
    fontSize: 40,
    width: 100,
    margin: '0 auto',
    textAlign: 'center'
};

const App = () => {
    // const state = useState(1);
    // const count = state[0];
    // const setCount = state[1];
    const [count, setCount] = useState(1);

    // console.log(myFunc(5));

    const changeCount = action => {
        setCount(prevState => action === 'increment' ? prevState + 1 : prevState - 1);

        // action === 'increment'
        // if (action === 'increment') {
        //     setCount(prevCount => prevCount + 1);
        // } else if (action === 'decrement') {
        //     setCount(prevCount => prevCount - 1);
        // } else {
        //     throw new Error('Invalid parameter');
        // }
    }
    // function increment() {
    //     setCount(prevCount => prevCount + 1);
    // }

    return (
        <div style={style}>
            <h1>{count}</h1>
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