import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [name, setName]= useState('');
    const [number, setNumber]= useState('');
    const [email, setEmail]= useState('');

    const handleSubmit  = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/data', {name,number, email})
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
            <input  type="text" value={name}   onChange={(e)=> setName(e.target.value)}  placeholder='Enter Name' />
        </div>
        <div>
            <label>Number: </label>
            <input  type="number" value={number}  onChange={(e)=> setNumber(e.target.value)} placeholder='Enter Number' />
        </div>
        <div>
            <label>Email: </label>
            <input  type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email' />
        </div>
        <button type='submit' > Submit</button>
      </form>
    </div>
  )
}

export default Form
