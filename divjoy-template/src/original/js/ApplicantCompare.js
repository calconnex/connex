import "../css/ApplicantList.css";
import TableRotated from './TableRotated';
import { useState } from "react";
import ChangePopup from "./ChangePopup"
import ManagePopup from "./ManagePopup";
import ExportPopup from "./ExportPopup";

const ApplicantList = ({ applicants }) => {

  // maps the name to its values
  const [row, setRow] = useState([
    { heading: 'Name', value: 'name', display: true, key: 1},
    { heading: 'Major', value: 'major', display: true, key: 2},
    { heading: 'Year', value: 'year', display: true, key: 3}
  ])

  // Contains information to show the Manage Applicants Popup
  const [manageApplicants, setManageApplicants] = useState(false);
  const toggleApplicants = () => {
    setManageApplicants(!manageApplicants);
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
          <button className="manageApplicants" onClick={toggleApplicants}>
            Change Applicants
          </button>
          <button className="manage" onClick={toggleManage}>
            Manage Rows
          </button>
        </div>
        <button className="export" onClick={toggleExport}>
            Export Files
        </button>
      </div>
      <TableRotated data={applicants} column={row} />
      {/* Holds the popups */}
      {manageApplicants && <ChangePopup handleClose={toggleApplicants}/>}
      {manageOpen && <ManagePopup handleClose={toggleManage} data={row}/>}
      {exportOpen && <ExportPopup handleClose={toggleExport} applicants={applicants}/>}
    </div>
  );
}
 
export default ApplicantList;