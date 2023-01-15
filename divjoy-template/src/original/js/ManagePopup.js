import React from "react";
import "../css/ManagePopup.css";
import Toggle from "./Toggle";
import { useLayoutEffect } from "react";

const ManagePopup = ({handleClose, data}) => {

    // This will update the data when the correct toggles are selected
    function updateData(handleClose, data) {
        const titles = data.map(col => col.heading);
        for (var i=0; i<titles.length; i++) {
            const title = titles[i];
            const pageCol = document.getElementById(title);
            const varCol = data.find(element => element.heading === title);
            if (pageCol.checked === varCol.display) {
                varCol.display = !varCol.display;
            }
        }
        handleClose();
    }

    // The function that sets the toggle buttons to the correct states
    function manageToggle() {
        const titles = data.map(col => col.heading);
        for (var i=0; i<titles.length; i++) {
            const title = titles[i];
            const pageCol = document.getElementById(title);
            const varCol = data.find(element => element.heading === title);
            if (varCol.display === false) {
                pageCol.click();
            }
        }
    }

    // This finds if a toggle button was checked previously and sets it to the correct state
    useLayoutEffect (() => {
        manageToggle()
    })

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                <div className="title">Manage Columns</div>
                <div>
                    {data.map((item) => <Toggle label={item.heading} key={item.key}/>)}
                </div>
                <button className="save" onClick={() => updateData(handleClose, data)}>
                    Save Changes
                </button>
            </div>
        </div>
    );
}
 
export default ManagePopup;