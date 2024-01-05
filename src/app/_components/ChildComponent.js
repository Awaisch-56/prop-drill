// ChildComponent.js
import React, { useState } from 'react';
import GrandchildComponent from './GrandChildComponent';

const ChildComponent = ({ updateValue }) => {
    const [valueFromGrandChild, SetValueFromGrandChild] = useState(null);

    const handleClick = () => {
        const newValue = "Value from Child";
        updateValue(newValue);
    };

    const handleDisableClick = () => {
        updateValue(false);
    }

    const UpdateFromGrandChild = (newValue) => {
        SetValueFromGrandChild(newValue);
    }

    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={handleClick}>Update Value</button>
            <button onClick={handleDisableClick}>disable</button>
            {/* <GrandchildComponent updateValue={updateValue} /> */}
            <p>{valueFromGrandChild}</p> 
            <GrandchildComponent updateValue={UpdateFromGrandChild} />

        </div>
    );
};

export default ChildComponent;
