import React from 'react';

import Person from './components/Person';
import persons from './providers/persons';

const App = () => {
    const myCompany = 'X Company';

    const components = persons.map(person => <Person data={person} />);

    return (
        <div className="container">
            <h1>HR App - {myCompany}</h1>
            {components}
        </div>
    );
}

export default App;