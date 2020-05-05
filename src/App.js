import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Entor',
            lastName: 'Arifi',
            email: 'arifientor@gmail.com'
        }
    }
    
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h1>My Form</h1>
                <form>
                    <div>
                        <label>First Name: </label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                    </div>
                    <h2>{this.state.firstName} {this.state.lastName} {this.state.email}</h2>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;