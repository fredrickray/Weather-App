import axios from "axios";
import React, {useState} from "react";
// import axios from 'axios';
import { GrMail } from "react-icons/gr";

function Reset() {
     
    const [email, setEmail] = useState("")


     const password = () =>{
        axios.post("http://localhost:5050/password-forgot", 
        {email: email})
        .then((response) => {
          if(response) {
            window.location.href = "/save"
                alert(response.data.message)
          } else{
            alert("Email not found")
          }
                
       }).catch((err) => {
            alert("Email not found")
            console.log(err)
        })
     }


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
                  Email Address <GrMail />
                </label>
                <input type="email" placeholder="Email Address..." onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input_wrap">
                <button onClick={password} type="button" className="submit_btn">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
