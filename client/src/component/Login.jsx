import React, { useState } from 'react';
import Axios from "axios";
import './index.css';
import { Link } from 'react-router-dom'
import { FaLock } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FiEyeOff } from "react-icons/fi"
import { FiEye } from   "react-icons/fi"

// import { FiEye } from   "react-icons/fi"
// import axios from 'axios';
// import axios from 'axios';
// FaLock GrMail


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // email = localStorage.getItem(email)
    // const [isPending, setIsPending] = useState(true);
    
    const login = () => {
        console.log("login")
        Axios.post("http://localhost:5050/login",
            { email: email, password: password }).then((response) => {
                console.log({ response })

                // axios.get("http://localhost:5050/login") 

                const { firstname, lastname, email } = response.data.data
                localStorage.setItem("fName", firstname)
                localStorage.setItem("lName", lastname)
                localStorage.setItem("email", email)
                  window.location.href = "/weather"
                  alert(`Welcome Back ${firstname} ${lastname}`)

            }).catch(err => {
                console.log(err)
                alert(err.response.data.message)
            })

    };
    
    const [isRevealPwd, setIsRevealPwd] = useState(false); 

    return (
        <div className='input'>
            <div className="wrapper">
                <div className="registration_form">
                    <div className="title">
                        Sign-In
                    </div>

                    <form>
                        <div className="form_wrap">
                            <div className="input_grp">

                            </div>
                            <div className="input_wrap">
                                <label >Email Address <GrMail /></label>
                                <input type="email" placeholder='Email Address...' onChange={(e) => { setEmail(e.target.value) }} />
                            </div>

                            <div className="input_wrap">
                                <label >Password  <FaLock /></label>

                                <input type={isRevealPwd ? "text" : "password"} placeholder='Password...' onChange={(e) => { setPassword(e.target.value) }}/><span className="eye-open" onClick={() => setIsRevealPwd(prevState => !prevState)}>{isRevealPwd ? <FiEye /> :<FiEyeOff />}</span>

                            </div>


                            <div className="input_wrap">
                                <button onClick={login} type="button" className="submit_btn">Sign In</button>
                            </div>
                        </div>
                    </form>
                    <div className='forgot-passord'>
                        <Link to="/reset">Forgot Password?</Link>
                    </div>
                    <div className="signin">Don't have a Reel account?
                        <Link to="/">Sign-up</Link>
                        {/* <div><p>{loginStatus}</p></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;
