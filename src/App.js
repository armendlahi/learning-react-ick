import React from 'react';
import randomColor from 'randomcolor';

import ChildComponent from './ChildComponent';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            color: 'red'
        }
    }

    handleClick() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        });
    }

    componentDidMount() {
        // This lifefycle method is used for initializing component data and/or API calls (fetching data from other sources)
        console.log('Component did mount.');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log('Should component udate.');
        // return nextState.counter % 2 === 0;
        return true; // default value
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
        if (prevState.counter !== this.state.counter) {
            this.setState({
                color: randomColor()
            });
        }
    }

    render() {
        console.log('Render');

        return (
            <div>
                <h1 style={{ color: this.state.color }}>{this.state.counter}</h1>
                <button onClick={this.handleClick.bind(this)}>Change counter</button>
                {this.state.counter < 2 && (
                    <ChildComponent counter={this.state.counter} />
                )}
            </div>
        )
    }
}

export default App;