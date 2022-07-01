import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        fetch('https://thawing-island-05654.herokuapp.com/task')
        .then(res => res.json())
        .then(data => setTasks(data));
    }, [])

  const handleTaskDelete = id =>{
    const proceed =window.confirm ('Are you sure you want to delete?');
    if(proceed){
        console.log('deleting task with id', id);
        const url = `https://thawing-island-05654.herokuapp.com/task/${id}`;
        fetch(url, {
            method: 'DELETE'
        })    
        .then(res =>res.json())
        .then(data => {
           if(data.deletedCount > 0){
            console.log('deleted')
            const remaining = tasks.filter(user => user._id !== id);
            setTasks(remaining)
            toast(' Task Deleted successfully ')
           }
        })
    }
  }

    return (
        <div className='m-10' >
        
          <div className='mt-20 '>
          <h1 className='text-center mb-3 font-bold text-xl'> All TO-DO List: </h1>
            {
                tasks.map(task => 
                   
                  <div className='grid justify-center  '>
                    <div className='grid grid-cols-4 place-content-center w-[800px] border p-2   '>
                     <FontAwesomeIcon className='bg-yellow-500 text-white text-2xl rounded-full' icon={faCheck}> </FontAwesomeIcon>
                    <p className=''>{task.name}</p>
                   <Link to={`/update/${task._id}`}>  <button className='bg-green-500 rounded-lg text-white h-7 w-20 text-center'>update</button></Link>
                    <button onClick={() => handleTaskDelete(task._id)} className='bg-red-500 rounded-lg text-white h-7 w-20 text-center'>Delete</button>
                  

                 </div>
                    </div>

                )
            }
          </div>
        </div>
    );
};

export default ToDo;