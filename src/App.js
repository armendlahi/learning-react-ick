import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            loading: false
        }
    }

    componentDidMount() {
        // Fetching data from external sources should be performed inside componentDidMount method
        this.setState({ loading: true });
        axios
            .get('https://jsonplaceholder.typicode.com/users/3')
            .then(result => {
                console.log(result);
                this.setState({
                    name: result.data.name,
                    email: result.data.email,
                    loading: false
                });
            });
    }

    render() {
        return this.state.loading ? <p>Loading...</p> : <h1>Hello, {this.state.name} {this.state.email}</h1>;
    }
}

export default App;