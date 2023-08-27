import { Link } from "react-router-dom";
import connex from "../icons/logo.png";
import setting from "../icons/setting.png"
import home from "../icons/home.png"
import compare from "../icons/compare.png"
import { useAuth } from "../../util/auth";
import valley from "../icons/valley_logo.png";
import full from "../icons/full_logo.png";
import plain from "../icons/plainwhite.png";

import styles from '../css/partners.module.css';

const GeneralClickablePartner = ({clubName, categoryOne, categoryTwo, numMembers}) => (
  <div className={styles['ClubFrame']}>
          <img
            src = {valley}
            alt="Net Impact Logo"
            className={styles['ClubLogo']}
          />
          <div className={styles['MainClubGroup']}>
            <div className={styles['ClubHeadingFrame']}>
                <span>{clubName}</span>
                <div className={styles['FirstTag']}>
                  <span className={styles['TagText']}>
                    <span>{categoryOne}</span>
                  </span>
                </div>
                <div className={styles['SecondTag']}>
                  <span className={styles['TagText']}>
                    <span>{categoryTwo}</span>
                  </span>
              </div>
              <span className={styles['text067']}>
                <span>Number of Members: ~{numMembers}</span>
              </span>
              <button className={styles['buttons01']}>
                <span className={styles['text069']}>
                  <span>Application Link</span>
                </span>
              </button>
            </div>
          </div>
        </div>
);

const ClickablePartner = (
  <div className={styles['ClubFrame']}>
          <img
            src = {valley}
            alt="Net Impact Logo"
            className={styles['ClubLogo']}
          />
          <div className={styles['MainClubGroup']}>
            <div className={styles['ClubHeadingFrame']}>
                <span>Net Impact, Berkeley</span>
                <div className={styles['FirstTag']}>
                  <span className={styles['TagText']}>
                    <span>Social Impact</span>
                  </span>
                </div>
                <div className={styles['SecondTag']}>
                  <span className={styles['TagText']}>
                    <span>Consulting</span>
                  </span>
              </div>
              <span className={styles['text067']}>
                <span>Number of Members: ~30</span>
              </span>
              <button className={styles['buttons01']}>
                <span className={styles['text069']}>
                  <span>Application Link</span>
                </span>
              </button>
            </div>
          </div>
        </div>
);

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Three columns in a row
  gap: '10px', // Gap between images
};

const CoffeeChatsApplicant6 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['coffee-chats-applicant6']}>
     
        <div className={styles['MainBanner']}>
          <img src = {full} alt="connex logo" className={styles['TopLogoStyle']}/>
          <img src = {plain} className={styles['BannerRectangle']}/>
          
          <button className={styles['buttons']}>
            <span className={styles['text']}>
              <span>Application Link</span>
            </span>
          </button>
        </div>

        <span className={styles['AllPartners']}>
          <span>All Partners</span>
        </span>

      <div style={gridStyle}>
        <GeneralClickablePartner clubName="Valley Consulting" categoryOne="Technology" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="CMG Strategy Consulting" categoryOne="FILL IN INFO" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="Codeology" categoryOne="Technology" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="Launchpad" categoryOne="FILL IN INFO" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="Blockchain at Berkeley" categoryOne="Technology" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="Web Development at Berkeley" categoryOne="FILL IN INFO" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="Blueprint, Technology for Nonprofits" categoryOne="Technology" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="Voyager Consulting" categoryOne="FILL IN INFO" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="Berkeley Business Society" categoryOne="Technology" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="Net Impact" categoryOne="Social Impact" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner clubName="Machine Learning at Berkeley" categoryOne="Technology" categoryTwo="Consulting" numMembers={30}/>
      </div>


        </div>
      </div>
  )
}

export default CoffeeChatsApplicant6;
