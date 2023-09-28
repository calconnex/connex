import "../css/SignIn.css";
import connex from "../icons/connex.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from '../css/partners.module.css';


const SignIn = () => {

    return (  
        <div className="signIn">
            <div className="everything">
                <img src = {connex} alt="connex logo" className={styles['landingLogo']}/>
                <div className="forms">
                    <h2>Sign In</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                // Add any necessary input attributes or event handlers here
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                // Add any necessary input attributes or event handlers here
                            />
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignIn;