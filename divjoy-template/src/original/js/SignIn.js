import "../css/SignIn.css";
import connex from "../icons/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";


const SignIn = () => {

    return (  
        <div className="signIn">
            <div className="everything">
                <div className="header">
                    <img src={connex} alt="connex logo" className="logo"/>
                    Connex
                </div>
                <div className="forms">
                    Welcome to Connex! To use our platform please click the button below.
                    <button className="go">
                        <Link to="/auth/signin">Sign up</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default SignIn;