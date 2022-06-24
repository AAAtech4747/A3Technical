
import React, { useState } from "react";


 const Contact =() => {

  const [data , setdata] = useState({           // usestate hooks data= currrent data 
       fullname:"",
       number:"",
       email:"",
       message:""
  });
    const InputEvent = (event) => {
      const {name , value} = event.target     // Array destucturing
    
      setdata ((PreVal) => {
      return {
        ...PreVal,             // to fetch previous value entered in input
        [name]:value,
        

      } } ) }
    const Submit=(e) => {
        e.preventDefault();    // to prevent refresh on click event
        alert( ` Name = ${data.fullname} Number=${data.number} Email =${data.email} Message =${data.message}`);
        setdata(()=>{
        return{
          fullname:"",
       number:"",
       email:"",
       message:""
        }});
      };
    
    return(<>
      <h1 className=" my-5 text-center">Contact Us</h1>
      <div className="row">
         <div className="col-md-4 offset-md-4 col-10 mx-auto">
    <form  >
   
    <div class="mb-3">
     <label for="exampleFormControlInput1" 
     class="form-label">
       Full Name
       </label>
         <input 
            type="text"
            class="form-control" 
            id="exampleFormControlInput1" 
            name="fullname"
            value={data.fullname}
            onChange={InputEvent}
            placeholder="Enter Your Full Name"/>
    </div>

    <div class="mb-3">
     <label for="exampleFormControlInput1" 
     class="form-label">
       Mobile Number
       </label>
         <input 
            type="number"
            class="form-control" 
            id="exampleFormControlInput1" 
            name="number"
            value={data.number}
            onChange={InputEvent}
            placeholder="Enter your Number"/>
    </div>

    <div class="mb-3">
     <label for="exampleFormControlInput1" 
     class="form-label">
       Email address
       </label>
         <input 
            type="email"
            class="form-control" 
            id="exampleFormControlInput1" 
            name="email"
            value={data.email}
            onChange={InputEvent}
            placeholder="name@example.com"/>
    </div>

    <div class="mb-3">
     <label for="exampleFormControlTextarea1" 
            class="form-label"> Message  </label>
            <textarea class="form-control"
            id="exampleFormControlTextarea1" 
            name="message"
            value={data.message}
            onChange={InputEvent}
            rows="3"></textarea>
      </div>
          <button onClick={Submit} type="button" class="btn btn-primary btn-lg">Submit Form </button>
    </form>

  </div>
</div>
        
</>
);
};
export default Contact;