import React from 'react';

function GrandSubChildComponent({ updateValue }) {

    const handleClick = () => {
        const newValue = "Value from Grand Sub Child";
        updateValue(newValue);
    }
    const handleDisableClick = () => {
        updateValue(false);
    }
        return (
        <div>
            <h4>Grand Sub Child Component</h4>
            <button onClick={handleClick}>Again Again Update Value</button>
            <button onClick={handleDisableClick}>disable</button>
        </div>
    );
}

export default GrandSubChildComponent;
