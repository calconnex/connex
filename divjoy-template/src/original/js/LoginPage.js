import React, { useState } from 'react';
import styles from '../css/partners.module.css';
import { Link } from "react-router-dom";
import connex from "../icons/connex.png";
import setting from "../icons/setting.png"
import home from "../icons/home.png"
import compare from "../icons/compare.png"
import { useAuth } from "../../util/auth";
import full from "../icons/full_logo.png";
import plain from "../icons/plainwhite.png";

const LoginPage = (props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['sectionA']}>
                <div className={styles['signInPage']}>
                    <div className="forms">
                        Welcome to Connex! To use our platform please click the button below.
                        <Link to="/auth/signin">Go to Connex</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 * <div className="signIn">
        <div className="everything">
            <div className="header">
                <img src={connex} alt="connex logo" className="logo"/>
                    Connex
            </div>
            <div className="forms">
                Welcome to Connex! To use our platform please click the button below.
                <Link to="/auth/signin">Go to Connex</Link>
            </div>
        </div>
    </div>
 */

export default LoginPage;