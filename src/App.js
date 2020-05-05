import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Entor'
        }
    }
    
    handleChange(event) {
        this.setState({
            firstName: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>My Form</h1>
                <form>
                    <div>
                        <label>First Name: </label>
                        <input type="text" value={this.state.firstName} onChange={this.handleChange.bind(this)} />
                    </div>
                    <h2>{this.state.firstName}</h2>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;