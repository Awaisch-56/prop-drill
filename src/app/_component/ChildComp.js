import React from 'react';

const ChildComp = ({ childData, updateChildData }) => {
    const handleButtonClick = (newData) => {
        updateChildData(newData);
    };

    return (
        <div>
            <h2>Child Component</h2>
            <p>Data from Parent: {childData}</p>
            <button onClick={handleButtonClick}>Update Child Data</button>

        </div>
    );
};

export default ChildComp;