// GrandchildComponent.js
import React, { useState } from 'react';
import GrandSubChildComponent from './GrandSubChildComponent';

const GrandchildComponent = ({ updateValue }) => {
    const [GrandSubChild, SetGrandSubChild] = useState(null);

    const handleClick = () => {
        const newValue = "Value form Grand Child "
        updateValue(newValue);
    }
    const handleDisableClick = () => {
        updateValue(false);
    }
    const UpdateGrandSubChild = (newValue) => {
        SetGrandSubChild(newValue)
    }

    return (
        <div>
            <h3>Grand Child Component</h3>
            <button onClick={handleClick}>Again Update Value</button>
            <button onClick={handleDisableClick}>disable</button>
            {/* <GrandSubChildComponent updateValue={updateValue} /> */}
            <p>{GrandSubChild}</p> 
            <GrandSubChildComponent updateValue={UpdateGrandSubChild} />
        </div>
    );
};

export default GrandchildComponent;
