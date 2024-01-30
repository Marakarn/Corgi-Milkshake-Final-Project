import React, { useState } from 'react'
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';

const Validateref = () => {
  const initialFormData = { name: "", email: "" }
  const [formData, setFormData] = useState(initialFormData);
  const [msg, setMsg]=useState("");
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    if(id==="password"){
      const isPasswordLength = isLength(formData.password, { min: 3, max: 7 })
      if(isPasswordLength){
        setMsg("Password length is valid " + value.length);
      } else{
        setMsg("Password length is not valid"+ value.length);
      }
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = isEmail(formData.email);
    const isEmptyName = isEmpty(formData.name)
    
    
    if(validEmail && !isEmptyName){
      alert("Valid Data");
      
      // ทำอย่างอื่นต่อ เช่น ส่งข้่อมูลไป Back-end
    } else{
      alert("Invalid Data");
    }
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="">Name: </label>
        <input type="text" id="name" onChange={handleInputChange}/>
      </div>
      <div>
        <label htmlFor="">E-mail: </label>
        <input type="email" id="email" onChange={handleInputChange}/>
      </div>
      <div>
        <label htmlFor="">Password: </label>
        <input type="password" id="password" onChange={handleInputChange}/>
        <span>{msg}</span>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  )
}

export default Validateref