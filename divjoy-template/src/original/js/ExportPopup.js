import React from 'react';
import "../css/ManagePopup.css";
import { useAllApplicants, useAllColumns } from "../../util/db";


  
const ExportPopup = (props) => {

    const newData = useAllApplicants();
    const column = useAllColumns();
    console.log(newData.data, column.data)    
   function createCSV(){
    let data = newData.data;
    let col = column.data;
    let csvContent = "ID,"
    col.forEach(element =>{
        let rowH = element.heading
        csvContent += rowH + ","; })
    csvContent += "Essay 1, Essay 2\n"
    data.forEach(element => {
        let row = element.id + "," + element.name + "," + element.major + "," + element.year  + "," + element.essay1.toString().replaceAll(/[\r\n]/gm, "").replaceAll(/,/gm,"")  + "," + element.essay2.toString().toString().replaceAll(/[\r\n]/gm, "").replaceAll(/,/gm,"")+ "\n"
        csvContent += row;
    });
    console.log(csvContent)
    var saveThis = new Blob([csvContent], {type: 'text/csv'});
    saveFile(saveThis, "ConnexData.csv")
   }


   function saveFile(blob, fileName){
       const url = window.URL.createObjectURL(blob);
       const a = document.createElement('a');
       a.href = url;
       a.download = fileName;
       a.click();
       setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
       }, 10)
   }
   

   


   return ( 
   <div className="popup-box">
    <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="title">Export Data</div>
        <form>
            <button onClick={(e) => createCSV()}> Click to Downlaod Data</button>
        </form>
    </div>
</div>
    );
}

 
export default ExportPopup;
