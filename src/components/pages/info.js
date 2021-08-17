import React from 'react';

export default function () {
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}
        >
            <div className="left-column">
                Blah blah blah info goes here whatever!
            </div>

            <div className="right-column">
                And this is the right side. The left side is psyco!
            </div>
        </div>
    )
}