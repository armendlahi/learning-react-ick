import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Jon Doe'
        };
    }

    render() {
        return (
            <h1>{this.state.firstName}</h1>
        )
    }
}

export default App;