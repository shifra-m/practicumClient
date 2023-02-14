import React,{createContext, useState} from "react";
export const userContext=createContext();
export default function UserContext(props){
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[identity,setIdentity]=useState('')
    const[tz,setTz]=useState('')
    const[birthday,setBirthday]=useState('')
    const[HMO,setHMO]=useState('')
    const[gender,setgender]=useState('')
    const[numOfChildren,setNumOfChildren]=useState(0)
    const[ChildForm,setChildForm]=useState([])
    // const[ChildArr,setChildArr]=useState([])

    return(
        <userContext.Provider value={{
            firstName,setFirstName,
            lastName,setLastName,
            identity,setIdentity,
            tz,setTz, 
            birthday,setBirthday, 
            HMO,setHMO,
            gender,setgender,
            numOfChildren,setNumOfChildren,
            ChildForm,setChildForm,
            // ChildArr,setChildArr
        }}>
           {props.children}
        </userContext.Provider>
    )
}