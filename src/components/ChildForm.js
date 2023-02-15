import * as React from "react";
import { useForm } from "react-hook-form";
import { userContext } from "./UserContext";
import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';

export default function ChildForm(props) {
  // const[childArr,setChildArr]=useState('');
  const userCtx = useContext(userContext)


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
      name: '',
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
        <Form.Control name="name" required minLength={2} {...register("name", { required: true })} placeholder="First name" onChange={(e) => (addChildren('name', e.target.value, props.index), userCtx.setFirstNamec(e.target.value))} defaultValue={userCtx.firstNamec}/>
        {errors.firstName && <p>required</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>TZ</Form.Label>
        <Form.Control type="text" name="tz" required minLength={2} {...register("tz", { required: true, minLength: 2 })} placeholder="TZ" onChange={(e) => (addChildren('tz', e.target.value, props.index), userCtx.setTzc(e.target.value))} defaultValue={userCtx.tzc } 
             />
        {errors.tz}
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>DATE OF BIRTH</Form.Label>
        <Form.Control {...register("dateOfBirth", { required: true })} required type="date" placeholder="date of bitrh" onChange={(e) => (addChildren('birthday', e.target.value, props.index), userCtx.setBirthdayc(e.target.value))} defaultValue={userCtx.birthdayc} />
      </Form.Group>


 {/* <button onClick={saveChild}>save child</button> */}

    </div>
  );
}