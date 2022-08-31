import React, { useState } from "react";
import  Axios from "axios";
import './Form.css';
import "./index.css"
import { Link } from "react-router-dom";
import { FaLock} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
// import Loading from "./Loading";
import { FiEyeOff } from "react-icons/fi"
import { FiEye } from   "react-icons/fi"
import { TiWeatherWindyCloudy } from "react-icons/ti";




function Register() {
    const [firstnameReg, setFirstname] = useState("");
    const [lastnameReg, setLastname] = useState("");
    const [emailReg, setEmail] = useState("");
    const [passwordReg, setPassword] = useState("");
    // const [emailError, setEmailError] = useState("")
    // const [passwordError, setPasswordError] = useState("")
    // const [successMsg, setSuccessMsg] = useState("")
    // const [ispending, setIsPending] = useState(true)
    
     
 const register = () => {
    // if(!firstnameReg || lastnameReg || emailReg || passwordReg) {
    //    console.log({Error: Error})
    // } else {
        
  Axios.post("http://localhost:5050/register",
 
  {firstname: firstnameReg, lastname: lastnameReg, email: emailReg, password: passwordReg}).then((response) => {    
    if(response.data.status === "success") {
        localStorage.setItem("firstname", firstnameReg)
        localStorage.setItem("lastname", lastnameReg)
        localStorage.setItem("password", passwordReg)
        localStorage.setItem("regEmail", emailReg)
        console.log("working")
       
       window.location.href = "/weather"  
    //  setIsPending(false)
        
        
    } else{
        console.log("Response is not successful")
        console.log(response)
        console.log(response.data);
    }

    
    console.log(response.data.status)
  }).catch(err => {
    console.log(err)
    alert("Please fill in all the input field")
  })
 };
      
       
        //  setIsPending(false)
      const [isRevealPwd, setIsRevealPwd] = useState(false);             
   return(
    <div>
      {/* {(ispending)? <Loading/> :    */}
    
    <div className="input">
     <div className="wrapper">
        <div className="registration_form">
      
        <div className="title">
            Create Account
            <TiWeatherWindyCloudy />
        </div>
          
        <form>
            <div className="form_wrap">
                <div className="input_grp">
                    <div className="input_wrap">
                        <label>First Name <FaUser /> </label>
                        <input type="text"  placeholder="First Name . . ." required onChange={(e)=> {setFirstname(e.target.value)}}/>
                    </div>
                    <div className="input_wrap">
                        <label >Last Name <FaUser /> </label>
                        <input type="text"  placeholder="Last Name . . ." required onChange={(e)=>  {setLastname(e.target.value)}}/>
                    </div>
                </div>
                <div className="input_wrap">
                    <label >Email Address <GrMail /> </label>
                    <input type="email"  placeholder="Email Address . . ." required  onChange={(e)=> {setEmail(e.target.value)}}/>
                </div>

                <div className="input_wrap">
                    <label >Password <FaLock /> </label>
                    <input id="passord" type={isRevealPwd ? "text" : "password"}  placeholder="password . . ."   required onChange={(e)=> {setPassword(e.target.value)}}/><span className="eye" onClick={() => setIsRevealPwd(prevState => !prevState)}>{isRevealPwd ? <FiEye /> :<FiEyeOff />}</span>
                </div>
               
               
                <div className="input_wrap">
                    <button onClick={register} type="button"  className="submit_btn" >Register Now</button>
                </div>
            </div>
        </form>  
           <div className="signin">Already have a Reel account?
             <Link to="/login">Sign In</Link>
            
            </div> 
           
        </div>
       
      </div>
      </div>
{/* } */}
      </div>  
      
                           
   )
}

export default Register;