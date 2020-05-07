import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Entor',
            lastName: 'Arifi',
            email: 'arifientor@gmail.com',
            comment: 'This is my comment',
            newsletter: false,
            subscription: 'Platnium',
            gender: 'female'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const { type, name, value, checked } = event.target;

        this.setState({
                [name]: type === 'checkbox' ? checked : value
            });
        }

        handleSubmit(event) {
            event.preventDefault();
            console.log('asdasd');

            if (this.state.firstName.length < 5) {
                alert('First name length should be greater than 4.');
            }

            console.log(this.state);
        }

        render() {
            return (
                <div>
                    <h1>My Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>First Name: </label>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Comment: </label>
                            <textarea name="comment" value={this.state.comment} onChange={this.handleChange}></textarea>
                        </div>
                        <div>
                            <label>Newsletter: </label>
                            <input type="checkbox" name="newsletter" checked={this.state.newsletter} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Subscription: </label>
                            <select name="subscription" value={this.state.subscription} onChange={this.handleChange}>
                                <option>Silver</option>
                                <option>Gold</option>
                                <option>Platnium</option>
                            </select>
                        </div>
                        <div>
                            <label>Gender: </label>
                            <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={this.state.gender === 'female'} /> Female
                            <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={this.state.gender === 'male'} /> Male
                        </div>
                        <h2>{this.state.firstName} {this.state.lastName} {this.state.email}</h2>
                        <h2>{this.state.comment} {this.state.newsletter ? 'checked' : 'unchecked'} {this.state.subscription} {this.state.gender}</h2>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )
        }
    }

    export default App;