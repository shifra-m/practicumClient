import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "./UserContext";

export default function Send() {
    const navigate = useNavigate();
    const userCtx = useContext(userContext);


    return (
        <div >
            <h1 >להתראות {userCtx.firstName} {userCtx.lastName} </h1>
            <button className="btn btn-success"
                onClick={() => {
                     navigate(`/DwonLoadExcel`)
                }}>להורדת קובץ אקסל עם הנתונים</button>
        </div>
    )
}