import React, { useState } from 'react';

function Contact() {
 
    const [data,setData] = useState({
        fullname : '',
        phone : '',
        email : '',
        message : ''
    });

    const InputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        // alert(`your name is ${data.fullname}. your phone is ${data.phone}. Your Email is ${data.email}. Your Message is ${data.message}`);
        alert('Please contact us with this email : rokibahmed.ru.cse@gmail.com');
    }



  return (
    <>
      <div className="my-5">
          <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div my-5">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                  <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label className="form-label">FullName</label>
                            <input required name="fullname" value={data.fullname} onChange={InputEvent} type="text" className="form-control" placeholder="Enter Your Full Name Here"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input required name="phone" value={data.phone} onChange={InputEvent} type="number" className="form-control" placeholder="Enter Your Mobile Number"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input required name="email" value={data.email} onChange={InputEvent} type="email" className="form-control" placeholder="Enter Your Email Here"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your Message</label>
                            <textarea required name="message" value={data.message} onChange={InputEvent} className="form-control" rows="3"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-outline-primary">
                                Submit Forms
                            </button>
                        </div>
                  </form>
              </div>
          </div>
      </div>
    </>
  );
}

export default Contact;
