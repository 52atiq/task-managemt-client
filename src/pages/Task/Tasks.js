import React from 'react';

const Tasks = ({task}) => {
    return (
        <div>
            <p> {task.name}</p>
        </div>
    );
};

export default Tasks;