import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            kaKaluarProvimin: false
        }
    }

    render () {
        // let header;

        // if (this.state.kaKaluarProvimin) {
        //     header = <h1>Ju keni kaluar provmin</h1>;
        // } else {
        //     header = <h1>Ju nuk keni kaluar provmin</h1>;
        // }

        return <h1>{`Ju ${this.state.kaKaluarProvimin ? '' : 'nuk'} keni kaluar provimin`}</h1>;
        // return this.state.kaKaluarProvimin ? <h1>Ju keni kaluar provmin</h1> : <h1>Ju nuk keni kaluar provimin</h1>;
    }
}

export default App;