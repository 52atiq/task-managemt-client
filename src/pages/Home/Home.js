import React, { useEffect, useState } from 'react';
import AddTask from '../AddTask/AddTask';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    // const [allTask, setAllTask] = useState([]);

    useEffect( () => {
        fetch('https://thawing-island-05654.herokuapp.com/task')
        .then(res => res.json())
        .then(data => setTasks(data));
        // .then(data => setAllTask(data))
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
  const handleCompleted = (id) => {
    fetch(`https://thawing-island-05654.herokuapp.com/completed/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Task Done");
        }
      });
  };

    return (
        <div >
            <AddTask></AddTask>
          <div className='mb-20 '>
            <h1 className='text-center font-bold mb-3'> All Added Task: </h1>
            {
                tasks.map(task => 
                   
                  <div className='grid justify-center  '>
                    <div className='grid grid-cols-4 place-content-center w-[800px] border p-2   '>
                     {/* <FontAwesomeIcon className='bg-yellow-500 text-white text-2xl rounded-full' icon={faCheck}> </FontAwesomeIcon> */}
                     <input className='text-xl h-4'
                      onClick={() => handleCompleted(task._id)}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p className=''>{task.name}</p>
                   {/* <Link to={`/update/${task._id}`}>  <button className='bg-green-500 rounded-lg text-white h-7 w-20 text-center'>Update</button></Link> */}
                   <Link to={`/update/${task._id}`}>    <AiOutlineEdit className='text-2xl text-green-500' /> </Link>
                    <button onClick={() => handleTaskDelete(task._id)} className=' text-red-500  text-2xl '>  <AiFillDelete /></button>
                  

                 </div>
                    </div>

                )
            }
          </div>
        </div>


// <div className="mb-10">
//       {/* <Calendar /> */}
//       <AddTask></AddTask>
//       <h1 className="text-center text-2xl font-bold">All Task</h1>
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th>Completed atiq</th>
//               {/* <th>Date</th> */}
//               <th>Task</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => {
//               // const { _id, date, task } = tasks;
//               return (
//                 <tr key={task._id}>
//                   <th>
//                     <input
//                       onClick={() => handleCompleted(task._id)}
//                       type="checkbox"
//                       name=""
//                       id=""
//                     />
//                   </th>
                
//                   <td>{task.name}</td>
//                    {/* <td> */}
//                   <Link to={`/update/${task._id}`} > </Link>
                   
//                     <AiOutlineEdit />
//                    {/* </td> */}

//                    <td
//                    onClick={() => handleTaskDelete(task._id)}
//                    > 
//                     <AiFillDelete />
//                    </td>
            
               
                   
              
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       {/* <Footer></Footer> */}
//     </div>






    );
};

export default Home;