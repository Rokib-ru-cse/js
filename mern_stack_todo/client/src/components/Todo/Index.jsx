import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

export default function Index() {

    const [todos, settodos] = useState([]);



    const deletetodo = async (taskid)=>{
        await axios.delete(`http://localhost:8000/todos/${taskid}`)
        .then((res)=>{
            // alert(res);
            console.log(res)
        })
        .catch((err)=>{
            // alert(err);
            console.log(err)
        })
        newdata();
    }



    const newdata = ()=>{
        axios.get('http://localhost:8000/todos', { crossdomain: true })
        .then((res)=>{
            settodos(res.data);
            // console.log(todos);
        })
        .catch((err)=>{

        })
    }




    useEffect(() => {
            axios.get('http://localhost:8000/todos', { crossdomain: true })
            .then((res)=>{
                settodos(res.data);
                // console.log(todos);
            })
            .catch((err)=>{

            })
            
        
    },[])

    
    



    return (
        <div className='center'>
            <h1>Rokib-ru-cse</h1>
            <h1>MERN stack todo-list project</h1>
                <div className='text-center py-2'><Link to='/insert' className='btn btn-success'>add task</Link></div>
                
                <table className='table' >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>description</th>
                            <th>update</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            todos.map((todo,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>
                                            {i+1}
                                        </td>
                                        <td>
                                            {todo.title}
                                        </td>
                                        <td>
                                            {todo.description}
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => deletetodo(todo._id)}>delete</button>
                                        </td>
                                        <td>
                                            <Link to={`/update/${todo._id}`}><button className='btn btn-warning'>update</button></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                
        </div>
    )
}
