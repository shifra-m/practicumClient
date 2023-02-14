import React, { useEffect } from "react";
import { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from "./UserContext";
import ChildForm from "./ChildForm";
import { Await, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function MyForm() {
  const [isComplete,setIsComplete]=useState();
  const addChild = (count) => {
    const childrenArr = [];
    for (let index = 1; index <= count; index++) {
      childrenArr.push(
        <div>
          <p>child number{index}</p>
          <p></p>
          <ChildForm key={index}></ChildForm>
          <p></p>
        </div>)
    }
   userCtx.setChild([childrenArr])
  }
  const navigate = useNavigate()
  const userCtx = useContext(userContext)

  const { register, handleSubmit, formState: { errors } } = useForm()
  useEffect(() => {
    if (userCtx)
      console.log(userCtx.firstName)
  }, [])
  const addUser = () => {

    let id = 0;
    let objUser = {
      Tz: userCtx.tz,
      FirstName: userCtx.firstName,
      LastName: userCtx.lastName,
      DateOfBirth: userCtx.birthday,

      Gender: Number(userCtx.gender),
      HMO: Number(userCtx.HMO)
    }
    console.log(objUser)
    axios.post("https://localhost:44381/api/User", objUser).then(res => {
      console.log(res.data);
      setIsComplete(true)
    }
    ).catch(e => {
      console.log(e)
    })
    axios.get("https://localhost:44381/api/User").then(
      (res) => {
        id = res.data[res.data.length - 1].id;
        console.log(res)
      })
      userCtx.child.map((child, key) => {
         axios.post("https://localhost:44381/api/Child").then(res=>
          console.log(res.data))
       }
      )
      .catch((e) => { console.log('eroer', e) })
  }
  return (
    <>
      {/* console.log({userCtx}) */}

      {userCtx && <form className="form-group" onSubmit={handleSubmit(console.log)}>
        <Form.Group className="form-group" controlId="formBasicPassword">
          <Form.Label>FIRST NAME</Form.Label>
          <Form.Control name="firstName" required minLength={2} {...register("firstName", { required: true })} placeholder="First name" onInput={(e) => { userCtx.setFirstName(e.target.value) }} defaultValue={userCtx.firstName} />
          {errors.firstName && <p>required</p>}
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label>LAST NAME</Form.Label>
          <Form.Control name="lastName" required minLength={2} {...register("lastName", { required: true, minLength: 2 })} placeholder="Last name" onInput={(e) => userCtx.setLastName(e.target.value)} defaultValue={userCtx.lastName} />
          {errors.lastName}
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>TZ</Form.Label>
          <Form.Control type="text" name="tz" required minLength="9" maxLength="9" {...register("tz", { required: true, minLength: 9 })} placeholder="TZ" onInput={(e) => userCtx.setIdentity(e.target.value)} defaultValue={userCtx.identity} />
          {errors.tz}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>DATE OF BIRTH</Form.Label>
          <Form.Control {...register("dateOfBirth", { required: true })} required type="date" placeholder="date of bitrh" onInput={(e) => userCtx.setBirthday(e.target.value)} defaultValue={userCtx.birthday} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>HMO</Form.Label>
          <Form.Select >
            ...register("HMO") onInput={(e) => userCtx.setHMO(e.target.value)} defaultValue={userCtx.HMO}
            <option value="A"></option>
            <option value="1">Clalit</option>
            <option value="2">Macabi</option>
            <option value="3">Meuhedet</option>
            <option value="4">Leumit</option>
            <option value="5">Private</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>GENDER</Form.Label>
          <Form.Select >
            <option value="A"></option>
            <option value="1">male</option>
            <option value="2">female</option>
          </Form.Select>
        </Form.Group>

        <div>
          <label> NUM OF CHILDREN:</label>
          <input name="numOfChildren" {...register("numOfChildren", { required: true })} type="number" placeholder="num of childern"
            onChange={(e) => { addChild(e.target.value)
            userCtx.setNumOfChildren(e.target.value) }} defaultValue={userCtx.numOfChildren}/>
          {userCtx.child}
          {/* , userCtx.setNumOfChildren(e.target.value)}} defaultValue={userCtx.numOfChildren} */}
        </div>
        {isComplete&&navigate(`/DwonLoadExcel`)}
        <Button variant="primary" type="submit" onClick={addUser} >
          Submit
        </Button>
        <button onClick={() => { navigate(`/Home`) }}>HOME</button>
       

      </form>}
     < button onClick={()=>{navigate(`/Send`)}}>duonloadToExcel</button>
    </>
  );
}
