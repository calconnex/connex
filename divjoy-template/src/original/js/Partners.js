import { Link } from "react-router-dom";
import connex from "../icons/logo.png";
import setting from "../icons/setting.png"
import home from "../icons/home.png"
import compare from "../icons/compare.png"
import { useAuth } from "../../util/auth";
import valley from "../icons/valley_logo.png";
import voyager from "../icons/voyager.png";
import launchpad from "../icons/launchpad.png";
import blockchain from "../icons/blockchain.png";
import webdev_logo from "../icons/webdev_logo.png";
import cmg_logo from "../icons/cmg_logo.png";
import blueprint_logo from "../icons/blueprint_logo.png";
import netimpact from "../icons/netimpact.png";
import bbs_logo from "../icons/bbs_logo.png";
import mlab_logo from "../icons/mlab_logo.png";
import codeology_logo from "../icons/codeology_logo.png";
import codebase_logo from "../icons/codebase_logo.png";
import full from "../icons/full_logo.png";
import plain from "../icons/plainwhite.png";
import React, { useState } from 'react';
import styles from '../css/partners.module.css';

const GeneralClickablePartner = ({logo, clubName, categoryOne, categoryTwo, numMembers, applicationLink}) => {


  return (
  <div className={styles['ClubFrame']}>
          <img
            src = {logo}
            alt="Net Impact Logo"
            className={styles['ClubLogo']}
          />
            <div className={styles['ClubHeadingFrame']}>
              <span>{clubName}</span>
              <span className={styles['text067']}>
                <span>Focus Areas: {categoryOne}, {categoryTwo}</span>
              </span>
              <span className={styles['text067']}>
                <span>Number of Members: ~{numMembers}</span>
              </span>
              <a href={applicationLink} className={styles['buttons01']} target="_blank" rel="noopener noreferrer">
                <span className={styles['text069']}>
                  <span>Application Link</span>
                </span>
              </a>
            </div>
        </div>
  );
};

const gridStyle_3 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Three columns in a row
  gap: '10px', // Gap between images

  '@media (max-width: 1000px)': {
    gridTemplateColumns:'repeat(2, 1fr)',
  },

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  
  '@media (max-width: 480px)': {
    gridTemplateColumns: '1fr',
  }
};

const CoffeeChatsApplicant6 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['coffee-chats-applicant6']}>
     
        <div className={styles['MainBanner']}>
          <img src = {full} alt="connex logo" className={styles['TopLogoStyle']}/>
          <img src = {plain} className={styles['BannerRectangle']}/>
          
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSc_wEwFNpLHcStq2gjXm_NCkpcLy-z3__Ep7iT63e0wJ98PwA/viewform' className={styles['buttons']} target="_blank" rel="noopener noreferrer">
            <span className={styles['text']}>
              <span>URM Application Link</span>
            </span>
          </a>
        </div>

        <span className={styles['AllPartners']}>
          <span>Organizations</span>
        </span>

      <div style={gridStyle_3}>
        <GeneralClickablePartner logo={valley}clubName="Valley Consulting" categoryOne="Technology" categoryTwo="Consulting" numMembers={30} applicationLink='https://docs.google.com/forms/d/e/1FAIpQLSesQBVbmKYI4Y-6fMDVnL7w8ii_G-edSPdAWu_XRxbkAQ73Fw/viewform'/>
        <GeneralClickablePartner logo={launchpad} clubName="Launchpad" categoryOne="SWE" categoryTwo="Entrepreneurship" numMembers={40} applicationLink='https://launchpad.berkeley.edu/login'/>
        <GeneralClickablePartner logo={voyager} clubName="Voyager Consulting" categoryOne="Technology" categoryTwo="Consulting" numMembers={40} applicationLink='https://airtable.com/shrQCRV9gSVmCQC0Y'/>
        <GeneralClickablePartner logo={blockchain} clubName="Blockchain @ Berkeley" categoryOne="Crypto" categoryTwo="SWE" numMembers={30} applicationLink='https://airtable.com/shrPKaQsjldBWa4h2'/>
        <GeneralClickablePartner logo={webdev_logo} clubName="WebDev @ Berkeley" categoryOne="Education" categoryTwo="SWE" numMembers={55} applicationLink='https://airtable.com/shrxn0L0lPosFnAZl'/>
        <GeneralClickablePartner logo={cmg_logo} clubName="CMG Strategy Consulting" categoryOne="Strategy" categoryTwo="Consulting" numMembers={30} applicationLink='https://airtable.com/shrNj791lHh4SIMX0'/>
        <GeneralClickablePartner logo={blueprint_logo} clubName="Blueprint, Technology for Nonprofits" categoryOne="SWE" categoryTwo="Social Impact" numMembers={30} applicationLink='https://calblueprint.org/apply/students/new'/>
        <GeneralClickablePartner logo={netimpact} clubName="Net Impact" categoryOne="Social Impact" categoryTwo="Consulting" numMembers={35} applicationLink='https://airtable.com/shrs73X85oN1iDBX2'/>
        <GeneralClickablePartner logo={bbs_logo} clubName="Berkeley Business Society" categoryOne="Business" categoryTwo="Consulting" numMembers={45} applicationLink='http://www.berkeleybusinesssociety.com/application'/>
        <GeneralClickablePartner logo={mlab_logo}clubName="Machine Learning @ Berkeley" categoryOne="Technology" categoryTwo="SWE" numMembers={60} applicationLink='https://airtable.com/shrM46VkYPCfOTwIS'/>
        <GeneralClickablePartner logo={codeology_logo} clubName="Codeology" categoryOne="Technology" categoryTwo="SWE" numMembers={30} applicationLink='https://airtable.com/shrn4obnK5NGilFgU'/>
        <GeneralClickablePartner logo={codebase_logo} clubName="Codebase" categoryOne="Technology" categoryTwo="SWE" numMembers={50} applicationLink='https://airtable.com/appq6g24ASOBIBsiq/shrpBqxVCq8gjM2p0'/>
        </div>


        </div>
      </div>
  )
}

export default CoffeeChatsApplicant6;
