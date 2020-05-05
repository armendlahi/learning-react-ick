import React from 'react';

import Authentication from './Authentication';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false})
        }, 1500);
    }

    render() {
        return (
            <div>
                <h1>Header</h1>
                <hr />
                {this.state.loading ? 'Loading...' : <Authentication username="MyUsername" />}
                <hr />
                <h1>Footer</h1>
            </div>
        )
    }
}

export default App;