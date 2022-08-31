import React, {useState, useEffect} from 'react';
import { GrMenu }from "react-icons/gr"
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';

function Card() {


   
   
    useEffect(() => {
        // console.log(localStorage.email)
        axios.post("http://localhost:5050/weather-retrieve",
        { email: localStorage.email }).then((response) => {
            let data = response.data.data
            
            
            localStorage.setItem("weather-data", JSON.stringify(data))
            // console.log(data)
        }
          
    )});
   

     
  
    const [open, setOpen] = useState(false);
    const info =  JSON.parse(localStorage.getItem("weather-data")) 
    // console.log("info",info)

    function logout() {
        localStorage.clear();
        window.location.href = '/login';
        }

     function submitDeleteForm(e) {

          e.preventDefault();
    
          let id = e.target.id.value
           console.log(id) 
           axios.post("http://localhost:5050/weather-delete", 
           {id: id}).then((response) => {
               console.log(response)
               alert(response.data.message)
           })
      }

    return(
     <div>
        
             
        
      <div className='card-body'>
        <div className='con'>   
        {info?.map((result, index) => (
           <div className="card"
           key={index}>
           <div className="img8x">
           <img src={`http://openweathermap.org/img/wn/${result.icon}@2x.png`} alt="" />
           </div>
           <div className="content">
               <div className="details">
                   <h2>{result.name} <br /><span>City</span></h2>
                   <div className="data">
                       <h3>{result.temperature}°C<br /><span>Temp</span></h3>
                       <h3>{result.weather}<br /><span>Condition</span></h3>
                       <h3>{result.wind} MPH<br /><span>Wind-Speed</span></h3>
                       <h3>{result.humidity} %<br /><span>Humidity</span></h3>
                   </div>
                   <div className="actionBtn">
                    <form onSubmit={submitDeleteForm}>
                    <input type="" name="id" value={result.id} style={{display: "none"}}/>
                    <button type="submit" >Delete</button>  
                    </form>              
                      
                   </div>
               </div>
           </div>
         </div>

        ))}  
    </div>
      </div>

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
    </div>
    )
}

export default Card