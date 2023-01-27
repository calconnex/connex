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
                <div className="ContactInfo">
                  <div className="contactTitle">Contact Information</div>
                  <div>Name: {appData.name}</div>
                  <div>Major: {appData.majors}</div>
                  <div>Year: {appData.year}</div>
                </div>
              </div>
              <div className="bibliography">
                <div className="ReferralGroup">
                  <div className="ReferralTitle">
                    Demographic Info
                  </div>
                  <div className="ReferralBody">
                    DEI Info
                  </div>
                </div>
                <div className="AttachmentGroup">
                  <div className="AttachmentTitle">
                      Attachments:
                  </div>
                  <div className="AttachmentBody">
                    attachment text
                  </div>
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