import React, {useState, useEffect} from "react";

function ShowHidePassword(){
    const [password, setPassword] = useState("");
    const [inputType, setInputType] = useState("password")
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const toggleType = () => {
        setInputType((prevType) => (prevType === "password" ? "text" : "password"));
    }

    return(
        <>
            <div>
                <input type={inputType} placeholder="Enter password" value={password} onChange={changePassword} />
                <button onClick={toggleType} >{inputType === "password" ? "SHOW" : "HIDE"}</button>
            </div>
        </>
    )
}

export default ShowHidePassword;

