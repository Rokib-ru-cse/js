import Axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../index.css'

export default function Update({match}) {

    const todoid = match.params.id;
    // console.log(todoid);
    const history = useHistory();
    // const [tododata,settododata] = useState([]);
    const [newdata,setnewdata] = useState({
        title:'',
        description:''
    })

    const inputhandler = (e)=>{
        const {name,value} = e.target;
        setnewdata((pre)=>{
            return{
                ...pre,
                [name]:value
            }
        })
    }

    const formsubmit = async (e)=>{
        e.preventDefault();
        await Axios.put(`http://localhost:8000/todos/${todoid}`,newdata)
        .then((result)=>{
            // alert('task inserted successfully');
            history.push('/');
        })
        .catch((err)=>{
            alert(err);
        })
    }


     

    useEffect(()=>{
        Axios.get(`http://localhost:8000/todos/${todoid}`)
        .then((res)=>{
            setnewdata(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
    },[])

    return (
        <div className='center'>
            <h1>Please Update Your Task Here</h1>
            <form onSubmit={formsubmit}>
                <div className="form-group">
                    <label htmlFor="">name</label>
                    <input className='form-control' onChange={inputhandler} name="title" value={newdata.title} type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">description</label>
                    <input className='form-control' onChange={inputhandler} name="description" value={newdata.description} type="text"/>
                </div>
                <div className="text-center">
                    <input className='btn btn-warning' type="submit" value="Update"/>
                </div>
                
            </form>
        </div>
    )
}
