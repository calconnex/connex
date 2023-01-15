import React from "react";
import "../css/ChangePopup.css";

const ChangePopup = ({handleClose}) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                <div className="title">Change Candidates</div>
                contains code for changing candidates
            </div>
        </div>
    );
}
 
export default ChangePopup;