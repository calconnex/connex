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
        {ClickablePartner}
        {ClickablePartner}
        {ClickablePartner}
        {ClickablePartner}
        {ClickablePartner}
        {ClickablePartner}
        {ClickablePartner}
        {ClickablePartner}
        {ClickablePartner}
        {ClickablePartner}
        {ClickablePartner}
      </div>


        </div>
      </div>
  )
}

export default CoffeeChatsApplicant6;
