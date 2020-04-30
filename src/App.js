import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'John Doe'
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        )
    }
}

export default App;