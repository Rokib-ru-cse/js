import React from 'react';
import { NavLink } from 'react-router-dom';
function Card(props) {
  return (
    <>
        
        <div className="col-md-4 col-10 mx-auto">
            <div className="card" style={{width: '18rem',height:'380px'}}>
                <img src={props.imgsrc} className="card-img-top" alt="..." style={{height:'200px'}}/>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.data}</p>
                    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    </>
  );
}

export default Card;
