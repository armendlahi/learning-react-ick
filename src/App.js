import React from 'react';

import ChildComponent from './ChildComponent';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                number: prevState.number + 1
            };
        });
    }

    render() {
        return (
            <div className="counter">
                <h1>{this.state.number}</h1>
                <button onClick={this.handleClick}>Increment</button>
                <ChildComponent counter={this.state.number} />
            </div>
        )
    }
}

export default App;