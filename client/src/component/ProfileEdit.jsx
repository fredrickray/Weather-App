// import axios from 'axios';
// import axios from 'axios';
import React, {useState} from 'react';
import { GrMenu }from "react-icons/gr"
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import axios from 'axios';
// import Loading from './Loading';


function Edit() {

    const edit = () => {
        window.location.href = "/edit"
    }
     
    // const firstname = localStorage.firstname
    // const lastname = localStorage.lastname
    
    
    const firstName = localStorage.fName
    const lastName = localStorage.lName

  const regFirstName = localStorage.firstname
  const regLastName = localStorage.lastname
    const [open, setOpen] = useState(false);

    function logout() {
        localStorage.clear();
        window.location.href = '/';
        }

    return(
        
        <div>
            {/* <Loading /> */}
            <div>
            <div className="menu-bar" onClick={() => setOpen(true)}>
            <GrMenu width={40} height={40} className="bar" />    
        </div>
        <div className={`sidenav ${open && "increaseWidth"}`}>
          <p className="close" onClick={() => setOpen(false)}>
            <FaTimes />
          </p>
          <ul id="navbar">
                <li><Link className="active" to="/weather">Home</Link></li>
                <li><Link className="active" to="/profile">Profile</Link></li>
                <li><Link className="active" to="/history">History</Link></li>
            <div className='button'>
               <button onClick={logout} type="" className='logout-btn'>Log Out</button>
            </div>
                
          </ul>     
        </div>
        {open && <div className="opaque" onClick={() => setOpen(false)}></div>}
        
        <div className="card">
        <div className="img8">
            {/* <img src="file:///C:/Users/pc/Documents/Animated%20Profile%20Card/nicolette%20langley.jpg" alt=""> */}
        </div>
        <div className="content">
            <div className="details">
                <h2> <br /><span></span></h2>
                <div className="data">
                    <h3>{firstName || regFirstName}<br /><span>First Name</span></h3>
                    <h3><br /><span></span></h3>
                    <h3>{lastName || regLastName} <br /><span>Last Name</span></h3>
                </div>
                <div className="actionBtn">
                    <button onClick={edit}>View</button>
                </div>
            </div>
        </div>
      </div>
      </div>
        </div>
        
    )
}

export default Edit;