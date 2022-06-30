import React from 'react';
import AddTask from '../AddTask/AddTask';

const Home = () => {



    return (
        <div >
            {/* <input type="text" placeholder="Type Task" class="input input-bordered input-sm w-full max-w-xs" /> */}
            {/* <button class="btn btn-sm px-5 h-2 ml-2">Add Task</button> */}
            <AddTask></AddTask>
        </div>
    );
};

export default Home;