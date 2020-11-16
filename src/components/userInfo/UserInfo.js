import React from "react";
import "./userInfo.css";

const UserInfo = ({userData}) => {
    const onLogout = () => {
        localStorage.setItem("loggedIn", "");
        window.document.location.reload();
    };
    return(
        <div className="user_info">
            <div className="user_name">Hi, {userData && userData.name}.</div>
            <div className="logout" onClick={onLogout}>
                Logout
            </div>
        </div>
    )
};

export default UserInfo