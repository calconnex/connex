import React from "react";
import "../css/FilterPopup.css";
import Dropdown from "./Dropdown";


const FilterPopup = ({handleClose, column, applicants}) => {
    const filter = [{heading: "A to Z", reverse: false}, {heading: "Z to A", reverse: true}];
    Array.prototype.alphaSort = function (sortParameter) {
        function compare(a, b) {
            function isNumeric(num){
                return !isNaN(num)
            }

            // convert string to numbers if necessary:
            // http://stackoverflow.com/questions/175739/is-there-a-built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
            var left = (isNumeric(a[sortParameter])) ? +a[sortParameter] : a[sortParameter];
            var right = (isNumeric(b[sortParameter])) ? +b[sortParameter] : b[sortParameter];

            if (left < right)
                return -1;
            if (left > right) 
                return 1;
            return 0;
        }
        this.sort(compare);
    }

    // This will update the data based on the selected dropdwon
    function updateData(handleClose, column, applicants) {
        const col = document.getElementById("Column").value;
        const fil = document.getElementById("Filter").value;
        const varCol = column.find(c => c.heading === col);
        applicants.alphaSort(varCol.value);
        if (filter.find(f => f.heading === fil).reverse) {
            applicants.reverse();
        }
        handleClose();
    }

    return (
        <div className="popup-box">
            <div className="box">
                <div className="title">Filter Columns</div>
                <span className="close-icon" onClick={handleClose}>x</span>
                    <Dropdown column={column} id="Column" label="Column"/>
                    <Dropdown column={filter} id="Filter" label="Filter Type"/>
                <button className="save" onClick={() => updateData(handleClose, column, applicants)}>
                    Save Changes
                </button>
            </div>
        </div>
    );
}
 
export default FilterPopup;