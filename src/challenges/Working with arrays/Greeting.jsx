import React from 'react';
let greeting = "Hello"
const Greeting = () => {
    return (
        <div>
            <h1>{greeting}</h1>
            <p>The date is  {Date()}</p>
        </div>
    );
};

export default Greeting;