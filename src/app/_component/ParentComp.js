"use client";
import React, { useState } from 'react';
import ChildComp from './ChildComp';

const ParentComp = () => {
    const [parentData, setParentData] = useState(null);

    const updateParentData = () => {
        const newData = "Hello from parent to child!";
        setParentData(newData);
    };
    const handleDisable = () => {
        setParentData(false);
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Data in Parent: {parentData}</p>
            <button onClick={handleDisable}>Disable</button>
            <ChildComp childData={parentData} updateChildData={updateParentData} />
        </div>

    );
};

export default ParentComp;