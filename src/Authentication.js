import React from 'react';

class Authentication extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
    }

    handleClick() {
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        });
    }

    render() {
        const headerText = this.state.loggedIn ? `Welcome back, ${this.props.username}` : 'You are logged out';
        const buttonText = this.state.loggedIn ? 'Log out' : 'Log in';

        return (
            <div>
                <h1>{headerText}</h1>
                <button onClick={this.handleClick.bind(this)}>{buttonText}</button>
            </div>
        )
    }
}

export default Authentication;