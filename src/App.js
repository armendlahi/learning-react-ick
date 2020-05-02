import React from 'react';

function doSomething() {
    console.log('asdasd');
}

function App() {
    return (
        <div>
            <h1 onClick={() => console.log('header')}>My header</h1>
            <p onClick={() => console.log('onClick paragraph')} onMouseOver={() => console.log('paragraph')}>Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any. </p>
        </div>
    )
}

export default App;