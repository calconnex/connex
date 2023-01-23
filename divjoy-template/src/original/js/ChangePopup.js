import React from "react";
import "../css/ChangePopup.css";
import Dropdown from "./Dropdown";


const ChangePopup = ({handleClose, data}) => {

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                <div className="title">Change Candidates</div>
                <br></br>
                <hr></hr>
                <br></br>

                <label>
                    <br></br>
                    <h4>Applicant 1:</h4>
                    <br></br>
                    <select>
                    {data.map((item) => 
                    <option value={item.id}>{item.name}</option>
                    )}
                    </select>
                </label>
                <br></br>
                <label>
                    <br></br>
                    <h4>Applicant 2:</h4>
                    <br></br>
                    <select>
                    {data.map((item) => 
                    <option value={item.id}>{item.name}</option>
                    )}
                    </select>
                </label>
                <br></br>
                <label>
                    <br></br>
                    <h4>Applicant 3:</h4>
                    <br></br>
                    <select>
                    {data.map((item) => 
                    <option value={item.id}>{item.name}</option>
                    )}
                    </select>
                </label>
            </div>
        </div>
    );
}
 
export default ChangePopup;