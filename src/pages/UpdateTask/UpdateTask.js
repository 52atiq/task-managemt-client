import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTask = () => {
    const {id} = useParams();
    const [task, setTask] = useState({})
    useEffect( () => {
        const url = `http://localhost:8000/task/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTask(data))
    }, [])

    const handleUpdateTask =(event) =>{
        event.preventDefault()
        const name = event.target.name.value;
      

        const UpdatedTask = {name};
   
     //send data to the server
     const url = `http://localhost:8000/task/${id}`
     fetch(url, {
        method:"PUT",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(UpdatedTask)
     })
     .then(res => res.json())
     .then(data =>{
        console.log('success', data)
        toast('Task Updated  successfully');
        event.target.reset();
      
        
    })
    // <ToastContainer />
    }
    return (
        <div className=' text-center py-20'>
            <h1 className='font-bold  mb-3'> Update Your Task: </h1>
             <form onSubmit={handleUpdateTask}>
            {/* <input type='text' name='name' placeholder='Name' required></input> */}
           
            {/* <button type='submit' value='Update Task'></button>    */}
            <input type="text" placeholder="Type Task" name='name' required class="input input-bordered input-sm w-full max-w-xs" />
            <button type='submit' class="btn btn-sm px-5 h-2 ml-2"> Update Task</button>
        </form>
        </div>
    );
};

export default UpdateTask;