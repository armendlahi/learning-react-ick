import React from 'react';

class Person extends React.Component {
    render() {
        const style = {
            width: 150,
            height: 150
        };

        return (
            <div className="person">
                <img src={this.props.data.avatar} alt={this.props.data.name} style={style} />
                <h3>{this.props.data.name}</h3>
                <h4>{this.props.data.dateOfBirth}</h4>
                <h4><a href={`mailto:${this.props.data.email}`}>{this.props.data.email}</a></h4>
                <hr />
            </div>
        );
    }
};

export default Person;