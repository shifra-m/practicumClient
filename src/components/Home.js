import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./UserContext";

export default function Home() {
    const navigate = useNavigate()
    const useCtx = useContext(userContext)
    return (
        <div>
            <h1>דף הנחיות לטופס</h1>
            <h2>שלום {useCtx.firstName} {useCtx.lastName} </h2>
            <p> !!כל השדות הינם חובה*</p>
            <p>בלחיצה על כפתור חזרה לוטפס תוחזרו למילוי הטופס</p>
            <p>בהצלחה!</p>
            <button onClick={() => { navigate(`/`) }}>back to form</button>
        </div>
    )
}