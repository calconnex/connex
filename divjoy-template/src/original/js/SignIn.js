import "../css/SignIn.css";
import connex from "../icons/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";


const SignIn = ({toggleSignedIn}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "admin" && password === "password") {
            toggleSignedIn()
        }
    }


    return (  
        <div className="signIn">
            <div className="everything">
                <div className="header">
                    <img src={connex} alt="connex logo" className="logo"/>
                    Connex
                </div>
                <div className="forms">
                    <form className="signingIn" onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} id="email"/>
                        <label>Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id="password"/>
                        <button>Sign In</button>
                    </form>
                    <div className="signUp">
                        Don't have an account?
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SignIn;