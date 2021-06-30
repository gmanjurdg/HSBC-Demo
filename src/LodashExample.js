import React from 'react'

export default function LodashExample() {
    // Requiring lodash library
    const load = require('lodash');

    // Calling once() method with its parameter
    var hold = load.once(function (trap) {
        console.log(trap + '!');
    });

    // Calling hold multiple times
    hold('Logged in to the console');
    hold('GfG');
    hold('CS');

    return (
        <div>
            {/* <p>This output will be displaying in Console</p> */}
        </div>
    )
}
