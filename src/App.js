import React from 'react';

import ChildComponent from './ChildComponent';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    handleIncrement() {
        this.setState(prevState => {
            return {
                number: prevState.number + 1
            };
        });
    }

    handleDecrement() {
        this.setState(prevState => {
            return {
                number: prevState.number - 1
            };
        });
    }

    handleDouble() {
        this.setState(prevState => {
            return {
                number: prevState.number * 2
            };
        });
    }

    render() {
        return (
            <div className="counter">
                <h1>{this.state.number}</h1>
                <button onClick={this.handleIncrement.bind(this)}>Increment</button>
                <button onClick={this.handleDecrement.bind(this)}>Increment</button>
                <button onClick={this.handleDouble.bind(this)}>Double</button>
            </div>
        )
    }
}

export default App;