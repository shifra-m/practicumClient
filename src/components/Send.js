import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "./UserContext";

export default function Approval() {
    const navigateExcel = useNavigate();
    const userCtx = useContext(userContext);


    return (
        <div >
            <h1 className="p-3">תודה {userCtx.firstName} {userCtx.lastName} </h1>
            <h2 className="p-3">הפרטים נשמרו בהצלחה</h2>
            <button className="btn btn-success"
                onClick={() => {
                    navigateExcel(`/DwonLoadExcel`)
                }}>להורדת קובץ אקסל עם הנתונים</button>
        </div>
    )
}