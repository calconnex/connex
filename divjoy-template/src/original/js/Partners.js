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

  '@media (max-width: 768px)': {
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
          
          <button className={styles['buttons']}>
            <span className={styles['text']}>
              <span>Application Link</span>
            </span>
          </button>
        </div>

        <span className={styles['AllPartners']}>
          <span>All Partners</span>
        </span>

      <div style={gridStyle_3}>
        <GeneralClickablePartner logo={valley}clubName="Valley Consulting" categoryOne="Technology" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner logo={launchpad} clubName="Launchpad" categoryOne="Technology" categoryTwo="FILL IN INFO" numMembers={40} applicationLink='https://launchpad.berkeley.edu/login'/>
        <GeneralClickablePartner logo={voyager} clubName="Voyager Consulting" categoryOne="FILL IN INFO" categoryTwo="Consulting" numMembers={40}/>
        <GeneralClickablePartner logo={blockchain} clubName="Blockchain at Berkeley" categoryOne="Technology" categoryTwo="Consulting" numMembers={30} applicationLink='https://airtable.com/shrPKaQsjldBWa4h2'/>
        <GeneralClickablePartner logo={webdev_logo} clubName="Web Development at Berkeley" categoryOne="Technology" categoryTwo="Consulting" numMembers={55} applicationLink='https://airtable.com/shrxn0L0lPosFnAZl'/>
        <GeneralClickablePartner logo={cmg_logo} clubName="CMG Strategy Consulting" categoryOne="FILL IN INFO" categoryTwo="Consulting" numMembers={30}/>
        <GeneralClickablePartner logo={blueprint_logo} clubName="Blueprint, Technology for Nonprofits" categoryOne="Technology" categoryTwo="Consulting" numMembers={30} applicationLink='https://calblueprint.org/apply/students/new'/>
        <GeneralClickablePartner logo={netimpact} clubName="Net Impact" categoryOne="Social Impact" categoryTwo="Consulting" numMembers={35}/>
        <GeneralClickablePartner logo={bbs_logo} clubName="Berkeley Business Society" categoryOne="Business" categoryTwo="Consulting" numMembers={45}/>
        <GeneralClickablePartner logo={mlab_logo}clubName="Machine Learning at Berkeley" categoryOne="Technology" categoryTwo="FILL IN INFO" numMembers={60} applicationLink='https://airtable.com/shrM46VkYPCfOTwIS'/>
        <GeneralClickablePartner logo={codeology_logo} clubName="Codeology" categoryOne="Technology" categoryTwo="FILL IN INFO" numMembers={30} applicationLink='https://airtable.com/shrn4obnK5NGilFgU'/>
      </div>


        </div>
      </div>
  )
}

export default CoffeeChatsApplicant6;
