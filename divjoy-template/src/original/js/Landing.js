import chong from '../icons/jchong.png';
import React, { useState } from 'react';
import styles from '../css/partners.module.css';
import { Link } from "react-router-dom";
import connex from "../icons/connex.png";
import setting from "../icons/setting.png";
import SignIn from './SignIn';
import home from "../icons/home.png";
import compare from "../icons/compare.png"
import { useAuth } from "../../util/auth";
import full from "../icons/full_logo.png";
import plain from "../icons/plainwhite.png";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import necessary components



const Chong = (props) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className={styles['container']}>
            <div className={styles['sectionA']}>
                {/** 
                <div className={styles['dropdownMenuBanner']}>
                </div>
                */}
                <img src = {connex} alt="connex logo" className={styles['landingLogo']}/>
                {/**
                <div className={styles['line']}>
                    <hr />
                </div>
                */}
                <p className={styles['header']}> 
                    Recruitment made hella easy
                </p>
                <h2 className={styles['sub_header']}>    
                    We connect you to talent from top universities & companies. 
                    You pick who to refer!
                </h2>
                <img src = {chong} alt="chong logo" className={styles['chong']}/>

                <div className={styles['talentButton']}>
                    I'm looking for talent
                </div>
                <div className={styles['globalOpportunitiesTab']}>
                    <Link to="/signin">Global Opportunities</Link>
                </div>
                <div className={styles['landingLogin']}>
                    <Link to="/signin">Log In</Link>
                </div>
                <div className={styles['landingSignup']}>
                    <Link to="/signin">Sign Up</Link>
                </div>
            </div>
        </div>
        
    )

}

// connex #2c80ff
// grey eeeeee

export default Chong;
