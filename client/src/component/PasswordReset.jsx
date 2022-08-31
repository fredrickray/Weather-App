import axios from "axios";
import React, {useState} from "react";
import { FaLock } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FiEyeOff } from "react-icons/fi"
import { FiEye } from   "react-icons/fi"

function SavePassword() {

     const [password, setPassword] = useState("")
     const [email, setEmail] = useState("")
    //  const [secondPassword, setSecondPassword] = useState("")

 const reset = () => {    axios.post("http://localhost:5050/password-update", 
    {password: password, email: email}).then((response)=> {
         console.log(response)
         if(response.data.status === "success") {
          alert("Email found and password Updated")
          window.location.href = "/login"
         } else{
          alert("Password was not updated")
         }

         
    })
  }
    // const reset = () => {
    //   if(response) {
    //       alert("passowrd has been changed successfuly")
    //       window.location.href = "/login"
    //   } else{
    //     alert("Password does not match, try again")
    //   }
    // }
    
    const [isRevealPwd, setIsRevealPwd] = useState(false); 

  return (
    <div className="input">
      <div className="wrapper">
        <div className="registration_form">
          <div className="title">Password Resest</div>

          <form>
            <div className="form_wrap">
              <div className="input_grp" />
              <div className="input_wrap">
                <label>
                  Email <GrMail />
                </label>
                <input type="email" placeholder="Email Address..."  onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="input_wrap">
                <label>
                  New Password <FaLock />
                </label>
                <input type={isRevealPwd ? "text" : "password"} placeholder="Email Address..." onChange={(e) => setPassword(e.target.value)} /><span onClick={() => setIsRevealPwd(prevState => !prevState)}>{isRevealPwd ? <FiEye /> :<FiEyeOff />}</span>
              </div>
              <div className="input_wrap">
                <button onClick={reset} type="button" className="submit_btn">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SavePassword;
