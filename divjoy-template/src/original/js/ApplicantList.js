import "../css/ApplicantList.css";
import Table from './Table';
import { useState } from "react";
import FilterPopup from "./FilterPopup";
import ManagePopup from "./ManagePopup";
import ExportPopup from "./ExportPopup";


const ApplicantList = ({ applicants, column }) => {


  

  // Contains information to show the Filter Columns Popup
  const [filterOpen, setFilterOpen] = useState(false);
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  }

  // Contains information to show the Manage Columns Popup
  const [manageOpen, setManageOpen] = useState(false);
  const toggleManage = () => {
    setManageOpen(!manageOpen);
  }

  // Contains information to show the Export Columns Popup
  const [exportOpen, setExportOpen] = useState(false);
  const toggleExport = () => {
    setExportOpen(!exportOpen);
  }


  return (
    <div className="applicant-list">
      <div className="above">
        <div className="tableButtons">
          <button className="filter" onClick={toggleFilter}>
            Filter Columns
          </button>
          <button className="manage" onClick={toggleManage}>
            Manage Columns
          </button>
        </div>
        <button className="export" onClick={toggleExport}>
            Export Files
        </button>
      </div>
      <Table data={applicants} column={column} />
      {/* Holds the popups */}
      {filterOpen && <FilterPopup handleClose={toggleFilter} column={column} applicants={applicants}/>}
      {manageOpen && <ManagePopup handleClose={toggleManage} data={column}/>}
      {exportOpen && <ExportPopup handleClose={toggleExport} column={column} applicants={applicants}/>}
    </div>
  );
}
 
export default ApplicantList;