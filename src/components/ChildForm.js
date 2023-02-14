import * as React from "react";
import { useForm } from "react-hook-form";
import { userContext } from "./UserContext";
import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';

export default function ChildForm(props) {
  // const[childArr,setChildArr]=useState('');
  const userCtx = useContext(userContext)


  //   const addChildren=(target,val,key)=>{
  // ChildCtx.setChildArr([...userCtx.childArr].ma(obj=>{
  // if(obj?.index===key)
  //   return{
  // ...obj,
  // [targrt]:val
  // }
  // }))
  // }
  const addChildren = (tar, val, ind) => {
    userCtx.setChildForm([...userCtx.ChildForm].map(o => {
      if (o?.id === ind) {
        return {
          ...o,
          [tar]: val
        };
      }
      console.log("update child");
      return o;
    }))
  }


  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      tz: '',
      dateOfBirth: '',
      id: props.index
    }
  });


  return (
    // <form onSubmit={handleSubmit(console.log)}>
    <div>
      <Form.Group className="form-group" controlId="formBasicPassword">
        <Form.Label>FIRST NAME</Form.Label>
        <Form.Control name="firstName" required minLength={2} {...register("firstName", { required: true })} placeholder="First name" onChange={(e) => (addChildren('firstName', e.target.value, props.index))} />
        {errors.firstName && <p>required</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>TZ</Form.Label>
        <Form.Control type="text" name="tz" required minLength={2} {...register("tz", { required: true, minLength: 2 })} placeholder="TZ" onInput={(e) => userCtx.setIdentity(e.target.value)} defaultValue={userCtx.identity} />
        {errors.tz}
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>DATE OF BIRTH</Form.Label>
        <Form.Control {...register("dateOfBirth", { required: true })} required type="date" placeholder="date of bitrh" onInput={(e) => userCtx.setBirthday(e.target.value)} defaultValue={userCtx.birthday} />
      </Form.Group>


 {/* <button onClick={saveChild}>save child</button> */}

    </div>
  );
}