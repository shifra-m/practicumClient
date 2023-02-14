import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./UserContext";

export default function Home(){
 const navigate=useNavigate()
 const useCtx=useContext(userContext)
    return(
        <div>
         
            <h1>דף הנחיות לטופס</h1>
           {useCtx.firstName&&useCtx.lastName}? <h2>Hello {useCtx.firstName} {useCtx.lastName} </h2>:<h2>Hello</h2>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <p>gfhgjkl;kjhgvcbhjhgfdghjhgfdfghjhgfd</p>
            <button onClick={()=>{navigate(`/`)}}>back to form</button>


        </div>
    )
}