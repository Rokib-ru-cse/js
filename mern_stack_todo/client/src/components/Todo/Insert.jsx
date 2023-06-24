import Axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../../index.css'

const  Insert = () =>{

    const history = useHistory();

   let [inputdata,setinputdata] =  useState({
       title:'',
       description:''
   })

    const inputhandler = (e)=>{
        const {name,value} = e.target;
        setinputdata((pre)=>{
            return{
                ...pre,
                [name]:value
            }
        })
    }   

    // inputdata  = JSON.stringify(inputdata);

    const formsubmit = (e)=>{
        e.preventDefault();
        Axios.post(`http://localhost:8000/todos`,inputdata,{ headers: {
            'Access-Control-Allow-Origin': true,
          }})
        .then((result)=>{
            // alert('task inserted successfully');
            history.push('/');
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return (
        <div className='center'>
                <h1>Please Add Your Task Here</h1>
                <form onSubmit={formsubmit}>
                    <div className='form-group'>
                        <label htmlFor="">name</label>
                        <input className='form-control' name='title' value={inputdata.title} type="text" onChange={inputhandler}/>
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor="">description</label>
                        <input className='form-control' name='description' value={inputdata.description} type="text" onChange={inputhandler}/>
                    </div>
                    <div className="text-center">
                        <input className='btn btn-success' type="submit" value='Add'/>
                    </div>
                    
                </form>
        </div>
    )
}


export default withRouter(Insert);