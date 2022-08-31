import React, { useState } from "react";
// import  Axios from "axios";
import "./Form.css";
import "./index.css";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Axios from "axios";

function Profile() {
  var [firstName, setFirstname] = useState("");
  var [lastName, setLastname] = useState("");
  const [open, setOpen] = useState(false);

  firstName = localStorage.fName;
  lastName = localStorage.lName;
  const email = localStorage.email;

  const regFirstName = localStorage.firstname
  const regLastName = localStorage.lastname
  const regEmail = localStorage.regEmail


  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  const change = () => {
    // console.log("working")
    Axios.post(
      "http://localhost:5050/profile",

      { firstname: firstName, lastname: lastName }
    ).then((response) => {
      if (response.data.status === "success") {
        alert("Changes saved");
      }
      console.log("Response is not successful");
    });
  };

  return (
    <div>
      <div className="menu-bar" onClick={() => setOpen(true)}>
        <FiMenu width={40} height={40} className="bar" color="white" />
      </div>
      <div className={`sidenav ${open && "increaseWidth"}`}>
        <p className="close" onClick={() => setOpen(false)}>
          <FaTimes />
        </p>
        <ul id="navbar">
          <li>
            <Link className="active" to="/weather">
              Home
            </Link>
          </li>
          <li>
            <Link className="active" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="active" to="/history">
              History
            </Link>
          </li>
          <div className="button">
            <button onClick={logout} type="" className="logout-btn">
              Log Out
            </button>
          </div>
        </ul>
        {/* <button type="" className="my_btn" onClick={click}>Profile</button> */}
      </div>
      {open && <div className="opaque" onClick={() => setOpen(false)}></div>}

      <div className="input">
        <div className="wrapper">
          <div className="registration_form">
            <div className="title">profile</div>

            <form>
              <div className="form_wrap">
                <div className="input_wrap">
                  <label>First Name </label>
                  <input
                    type="text"
                    placeholder="First Name . . ."
                    value={firstName || regFirstName}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="input_wrap">
                  <label>Last Name </label>
                  <input
                    type="text"
                    placeholder="Email Address . . ."
                    value={lastName || regLastName}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="input_wrap">
                  <label>Email </label>
                  <input
                    type="text"
                    placeholder="Email Address . . ."
                    value={email || regEmail}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>

                <div className="input_wrap">
                  <button type="button" className="submit_btn" onClick={change}>
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
