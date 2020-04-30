import React from 'react';

import Person from './components/Person';
import persons from './providers/persons';

const App = () => {
    const myCompany = 'X Company';
    const numbers = [1, 3, 4, 5, 6, 9];
    const multiplied = [];

    for (let i = 0; i < numbers.length; i++) {
        multiplied.push(numbers[i] * 3);
    }

    console.log(numbers);
    console.log(multiplied);

    const multipliedMap = numbers.map(e => e * 3);

    console.log(multipliedMap);

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const filtered = words.filter(e => e.startsWith('e'));
    console.log(filtered);

    
    return (
        <div className="container">
            <h1>HR App - {myCompany}</h1>
            <Person
                data={{
                    name: "Richard Green",
                    dateOfBirth: "July 4, 1978",
                    email: "carlosprichardson@teleworm.us",
                    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }}
            />
            <Person
                data={{
                    name: "Cynthia H. Eaton",
                    dateOfBirth: "April 29, 1985",
                    email: "cynthiaheaton@rhyta.com",
                    avatar: "https://image.shutterstock.com/image-photo/beautiful-african-american-woman-smiling-260nw-402466177.jpg"
                }}
            />
            <Person
                data={{
                    name: "Lelia R. McClelland",
                    dateOfBirth: "July 7, 1992",
                    email: "cynthiaheaton@rhyta.com",
                    avatar: "https://previews.123rf.com/images/racorn/racorn1308/racorn130805649/21341221-profile-portrait-of-a-charming-young-business-woman-being-happy-and-smiling-in-an-office-setting-.jpg"
                }}
            />
        </div>
    );
}

export default App;