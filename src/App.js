import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: false
        }
    }

    componentDidMount() {
        // Fetching data from external sources should be performed inside componentDidMount method
        this.setState({ loading: true });
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(result => {
                console.log(result);
                this.setState({
                    users: result.data,
                    loading: false
                });
            });
    }

    render() {
        const users = this.state.users.map(user => <li>{user.id} - {user.name} {user.phone}</li>)

        return (
            <div>
                {this.state.loading ? <p>Loading...</p> : <ul>{users}</ul>}
            </div>
        )
    }
}

export default App;