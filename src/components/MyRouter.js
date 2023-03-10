import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import ChildForm from "./ChildForm";
import UserContext from "./UserContext";
import Home from "./Home";
import MyForm from "./MyForm";
import DwonLoadExcel from "./DwonLoadExcel";
import Send from "./Send"


export default function MyRouter(){
    return(
        <div>
            <Routes>
            <Route path='' element={<UserContext><MyForm /></UserContext>} />
            <Route path='/Home' element={<UserContext><Home /></UserContext>} />
            <Route path="/Send" element={<UserContext><Send /></UserContext>}></Route>
                <Route path="/DwonLoadExcel" element={<UserContext><DwonLoadExcel/></UserContext>}></Route>
            </Routes>
            
        </div>
    )
}