import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";
import Pdf from "./PDF";
import "../css/ApplicantDetails.css";
import Navbar from "./Navbar";
import { useOneApplicant } from "../../util/db";


const ApplicantDetails = () => {
  const { id } = useParams();
  const applicant = useOneApplicant(parseInt(id));
  const appData = applicant.data[0]

  return (
    <div className="overall">
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
                <div className="ProfilePic">              
                <img
                    style={{ maxWidth: 250 }}
                    src="https://media.istockphoto.com/id/1262964438/photo/success-happens-the-moment-you-believe-it-will.jpg?s=612x612&w=0&k=20&c=tpjbR4aaaiB43sneEWgatyFIQOmN3E-3nB5CBE5Idyg="
                    alt="Headshot"
                  />
                </div>
                <div className="ContactInfo">
                  Contact Information
                </div>
                <div className="ContactInfo">
                  Name: {appData.name}
                  <br />
                  Major: {appData.major}
                  <br />
                  Year: {appData.year}
                </div>
              </div>
              <div className="OtherGroup">
                <div className="ReferralGroup">
                  <div className="ReferralTitle">
                    Referrals:
                  </div>
                  <div className="ReferralBody">
                    referral text
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
            </div>
          </div>
        </article>
        
        )}   
        </div>  
  );
}
 
export default ApplicantDetails;