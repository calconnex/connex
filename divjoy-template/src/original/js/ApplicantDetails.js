import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Pdf from "./PDF";
import "../css/ApplicantDetails.css";
import Navbar from "./Navbar";
import { useOneApplicant, createItem, dontAccept} from "../../util/db";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from 'react-router-dom';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { connectFirestoreEmulator } from "firebase/firestore";
import { useAuth } from "../../util/auth";
import NotFound from "./NotFound";

const ApplicantDetails = () => {
  const { id } = useParams();
  const applicant = useOneApplicant(id);
  console.log(applicant);
  const appData = applicant.data[0]
  const photo = appData.photo[0]
  const photoURL = photo.downloadURL
  const auth = useAuth()
  const [accepted, setAccepted] = useState(false)
  const [rejected, setRejected] = useState(false)


  
  const handleClose = () => {
    setAccepted(false);
  }

  return (
    auth.user ? (<div className="overall">
      <Navbar/>
      { appData && (
        <article>
          <div className="left">
            <div className="resume"> 
              {/* <Pdf id={parseInt(id)}/> */}
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="ProfileGroup">
                <img
                  src={photoURL}
                  alt="Headshot"
                  className="photo"
                />
              </div>
              <div className="EssayGroup">
                <div className="Essay1Group">
                    <h1>{appData.name} ({appData.pronouns})</h1>
                    <div>Year: {appData.year} </div>
                    <div>Major: {appData.major} </div>
                    <div>GPA: {appData.gpa} </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div>Demographics: {appData.demographic} </div>
                    <div>LGBTQ+: {appData.lgbtq} </div>
                    <div>Junior Transfer: {appData.transfer} </div>
                    <div>First Generation: {appData.firstGen} </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <h4>Contact Information</h4>
                    <div>Phone: {appData.phone}</div>
                    <div>Email: {appData.email}</div>
                  </div>
              </div>
            </div>

            <div className="EssayGroup">
              <div className="Essay1Group">
                      Essay 1 Prompt:
                <div className="middle">
                  { appData.essay1 }
                </div>
              </div>
              <div className="Essay2Group">
                Essay 2 Prompt:
                <div className="bottom">
                  { appData.essay2 }
                </div>
              </div>
              <div class = "AcceptorNah"> 
                <Button variant = "outlined" onClick={() => {setAccepted(true); setRejected(false);}} style={{backgroundColor: accepted? "gray" : "white"}}> Accept</Button>
                <Dialog open = {accepted}  aria-labelledby="ApplicantAccepted" >
                <DialogTitle id = "ApplicantAccepted">Your Decision</DialogTitle>
                <DialogContent>
                <DialogContentText>Applicant Has Been Accepted</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Link to = '/home'>
                  <Button onClick={handleClose}> Close</Button>
                  </Link>
                </DialogActions>
                </Dialog>
                <Button variant = "outlined" onClick = {() => {setRejected(true); setAccepted(false);}} style={{ backgroundColor: rejected!==accepted ? "white" : "gray" }}>Reject</Button>
                <Dialog open = {rejected}  aria-labelledby="ApplicantAccepted" >
                <DialogTitle id = "ApplicantAccepted">Your Decision</DialogTitle>
                <DialogContent>
                <DialogContentText>Applicant Has Been Rejected</DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Link to = '/home'>
                  <Button onClick={handleClose} > Close</Button>
                  </Link>
                </DialogActions>
                </Dialog>
              </div>

            </div>
          </div>
        </article>
        
        )}   
        </div>  
    ) : (<NotFound/>)
  );
}
 
export default ApplicantDetails;