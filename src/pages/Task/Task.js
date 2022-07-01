// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { toast } from 'react-toastify';
// const Task = ({task}) => {
//     console.log(task.name)
//     const [tasks, setTasks] = useState([]);

//     useEffect( () => {
//         fetch('https://thawing-island-05654.herokuapp.com/task')
//         .then(res => res.json())
//         .then(data => setTasks(data));
//     }, [])

//     const handleUserDelete = id =>{
//         const proceed =window.confirm ('Are you sure you want to delete?');
//         if(proceed){
//             console.log('deleting task with id', id);
//             const url = `http://localhost:5000/task/${id}`;
//             fetch(url, {
//                 method: 'DELETE'
//             })    
//             .then(res =>res.json())
//             .then(data => {
//                if(data.deletedCount > 0){
//                 console.log('deleted')
//                 const remaining = tasks.filter(user => user._id !== id);
//                 setTasks(remaining)
//                 toast(' Task Deleted successfully ')
//                }
//             })
//         }
//       }
    
//     return (
//         <div>
//             {task.name}
//             <FontAwesomeIcon icon={faCheck}> </FontAwesomeIcon>
//         </div>
//     );
// };

// export default Task;