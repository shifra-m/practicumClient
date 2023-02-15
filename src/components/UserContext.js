import React,{createContext, useState} from "react";
export const userContext=createContext();
export default function UserContext(props){
    const[firstName,setFirstName]=useState('')
    const[firstNamec,setFirstNamec]=useState('')

    const[lastName,setLastName]=useState('')
    const[identity,setIdentity]=useState('')
    const[tz,setTz]=useState('')
    const[tzc,setTzc]=useState('')
    const[birthday,setBirthday]=useState('')
    const[birthdayc,setBirthdayc]=useState('')

    const[HMO,setHMO]=useState('')
    const[gender,setgender]=useState('')
    const[numOfChildren,setNumOfChildren]=useState(0)
    const[ChildForm,setChildForm]=useState([])
    const [child, setChild] = useState();
    //  var childArr=[{name:'',birth:'',id:''}]
    return(
        <userContext.Provider value={{
            firstName,setFirstName,
            firstNamec,setFirstNamec,

            lastName,setLastName,
            identity,setIdentity,
            tz,setTz, 
            tzc,setTzc, 

            birthday,setBirthday, 
            birthdayc,setBirthdayc, 

            HMO,setHMO,
            gender,setgender,
            numOfChildren,setNumOfChildren,
            ChildForm,setChildForm,
           child,setChild
        }}>
           {props.children}
        </userContext.Provider>
    )
}
