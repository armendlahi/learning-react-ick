import React from 'react';

class ChildComponent extends React.Component{
    componentWillReceiveProps(prevProps) {
        console.log('Component will receive props.')
        // if (prevProps.counter !== this.props.counter) {
        //     console.log('Props changed');
        // } else {
        //     console.log('Props have not changed');
        // }
    }

    componentWillUnmount() {
        console.log('Component will unmount.');
    }

    render() {
        return (
            <h2 style={{ color: 'red' }}>{this.props.counter}</h2>
        );
    }
}

export default ChildComponent;