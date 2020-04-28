import React from 'react';

import Person from './components/Person';

const App = () => {
    return (
        <div className="container">
            <h1>HR App - Company Name</h1>
            <Person
                name="Richard Green"
                dateOfBirth="July 4, 1978"
                email="carlosprichardson@teleworm.us"
                avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Person
                name="Cynthia H. Eaton"
                dateOfBirth="April 29, 1985"
                email="cynthiaheaton@rhyta.com"
                avatar="https://image.shutterstock.com/image-photo/beautiful-african-american-woman-smiling-260nw-402466177.jpg"
            />
            <Person
                name="Lelia R. McClelland"
                dateOfBirth=""
                email="cynthiaheaton@rhyta.com"
                avatar="https://previews.123rf.com/images/racorn/racorn1308/racorn130805649/21341221-profile-portrait-of-a-charming-young-business-woman-being-happy-and-smiling-in-an-office-setting-.jpg"
            />
        </div>
    );
}

export default App;