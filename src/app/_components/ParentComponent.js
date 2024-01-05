// ParentComponent.js
"use client";
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [valueFromChild, setValueFromChild] = useState(null);

    const updateValueFromChild = (newValue) => {
        setValueFromChild(newValue);
    };


    return (
        <div>
            <h1>Parent Component</h1>
            <p>{valueFromChild}</p>
            <ChildComponent updateValue={updateValueFromChild} />
        </div>
    );
};

export default ParentComponent;
