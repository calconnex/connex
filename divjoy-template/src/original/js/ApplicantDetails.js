import { useParams } from "react-router-dom";
import React from "react";
import Pdf from "./PDF";
import "../css/ApplicantDetails.css";
import Navbar from "./Navbar";
import { useOneApplicant, createItem } from "../../util/db";
import { useAuth } from "../../util/auth";
import NotFound from "./NotFound";

const ApplicantDetails = () => {
  const { id } = useParams();
  const applicant = useOneApplicant(id);
  console.log(applicant);
  const appData = applicant.data[0]
  const photo = appData.photo[0]
  const photoURL = photo.downloadURL
  const auth = useAuth();

  return (
    auth.user ? (<div className="overall">
      <Navbar/>
      { appData && (
        <article>
          <div className="left">
            <div className="resume">
              <Pdf id={parseInt(id)}/>
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
              <h4>What does diversity mean to you? Why is DEI important and how does it affect you on a day-to-day basis at Berkeley? (100 words max)</h4>
              <br></br>
                <div className="middle">
                  { appData.essay1 }
                </div>
              </div>
              <div className="Essay2Group">
              <h4>Tell us anything else you would like! (Optional)</h4>
              <br></br>
                <div className="bottom">
                  { appData.essay2 }
                </div>
              </div>
              <div class = "AcceptorNah"> 
                <button onClick={() => createItem(appData) && alert("Candidate Accepted")}> Accept</button>
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