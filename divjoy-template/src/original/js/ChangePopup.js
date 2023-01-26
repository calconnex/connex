import React from "react";
import "../css/ChangePopup.css";

const ChangePopup = ({handleClose, data, toggleCurrApplicants}) => {

    function updateApplicants(handleClose, toggleCurrApplicants) {
        const oneName = document.getElementById("appOne").value;
        const twoName = document.getElementById("appTwo").value;
        const threeName = document.getElementById("appThree").value;
        const one = data.find(item => item.name === oneName);
        const two = data.find(item => item.name === twoName);
        const three = data.find(item => item.name === threeName);
        toggleCurrApplicants([one, two, three]);
        handleClose();
    }
 
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                <div className="title">Change Candidates</div>
                <div className="dropdown">
                    <div className="title">
                        Applicant One
                    </div>
                    <select name="selectList" id="appOne">
                        <option value="none">--select one--</option>
                        {data.map((item) => <option value={item.name}>{item.name}</option>)}
                    </select>
                </div>
                <div className="dropdown">
                    <div className="title">
                        Applicant Two
                    </div>
                    <select name="selectList" id="appTwo">
                        <option value="none">--select one--</option>
                        {data.map((item) => <option value={item.name}>{item.name}</option>)}
                    </select>
                </div>
                <div className="dropdown">
                    <div className="title">
                        Applicant Three
                    </div>
                    <select name="selectList" id="appThree">
                        <option value="none">--select one--</option>
                        {data.map((item) => <option value={item.name}>{item.name}</option>)}
                    </select>
                </div>
                <button className="save" onClick={() => updateApplicants(handleClose, toggleCurrApplicants)}>
                    Save Changes
                </button>
            </div>
        </div>
    );
}
 
export default ChangePopup;
