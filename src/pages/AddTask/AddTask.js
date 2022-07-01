import React from 'react';
import { toast } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
    const handleAddTask =(event) =>{
        event.preventDefault()
        const name = event.target.name.value;
       

        const task = {name};
   
     //send data to the server
     fetch('https://thawing-island-05654.herokuapp.com/task', {
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(task)
     })
     .then(res => res.json())
     .then(data =>{
        console.log('success', data)
        toast('Task added successfully');
        event.target.reset();
      
        
    })
   
    }
    return (
        <div>
            <form onSubmit={handleAddTask} className='text-center my-12 gap-5 '>
            <input type="text" placeholder="Type Task" required name='name' class="input input-bordered input-sm w-full max-w-xs" />
            <button type='submit' class="btn btn-sm px-5 h-2 ml-2"> Add Task</button>
        </form>
        </div>
    );
};

export default AddTask;