import React, { useState } from 'react';

const App = () => {
    const [name] = useState('Other Name');
    console.log(name);

    return <h1>Hello, {name}</h1>
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