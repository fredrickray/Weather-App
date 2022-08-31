import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import { FiMenu } from 'react-icons/fi';
import { FaTimes,  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import 'antd/dist/antd.css';
// import { Button } from 'antd';
// import { FaHistory } from "react-icons/fa";
// import { FaSearchLocation } from "react-icons/fa"
// import { AiFillHome } from "react-icons/ai"
// import { ImUser } from "react-icons/im"

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [open, setOpen] = useState(false);
  
    
 
//  const firstname  = localStorage.fName
//  const lastname = localStorage.lName
 const email = localStorage.email

  //  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=65b4507ff178b693eac955a556c53f7e`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=65b4507ff178b693eac955a556c53f7e`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then(response => {
        const data = (response.data)
        setData(data);

        const save = (payload) => {
          axios.post('http://localhost:5050/weather', payload).then(response => {
              if (response.status === 'success') {
                alert('success');                
                               
              }   
            }).catch((err) => {
              alert(err.response.data.message)
            })
        };
        save({ name: data.name, temperature: data.main.temp.toFixed(), icon: data.weather[0].icon, humidity: data.main.humidity, wind_speed: data.wind.speed.toFixed(), weather: data.weather[0].main, email: email})
        console.log(response.data);
        console.log(response)
      });
      setLocation('');
    }
  };

   function logout() {
    localStorage.clear();
    window.location.href = '/login';
    }
  //  const getHistory = () => {
  //   componentDidMount(){
  //     axios.get("http://localhost:5050/weather", 
  //     {city: data.name, temp: data.main.temp.toFixed(), weather: data.weather[0].main, wind_speed: data.wind.speed.toFixed()})
  //    };
  //  }

  // const click = () => {
  //   window.location.href = "/profile"
  // }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />        
      </div>
          <div className="menu-bar" onClick={() => setOpen(true)}>
            <FiMenu width={40} height={40} className="bar" color='white'/>  
          </div>
              
      <div className={`sidenav ${open && 'increaseWidth'}`}>
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
        {/* <button type="" className="my_btn" onClick={click}>Profile</button> */}
      </div>
      {open && <div className="opaque" onClick={() => setOpen(false)} />}

      <div className="container">
        {data.name !== undefined &&
          <div className="top">
            <div className="top-style">
              <div className="location">
                <p className="bold">{data.name} </p>
                {/* <p>{data.sys.country}</p> */}
              </div>
              <div className="temp">
                {/* <p className="name">Currently</p> */}
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              </div>
              <div className="descripton">
                {data.weather
                  ? <p className="bold">{data.weather[0].main} </p>
                  : null}
                {data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> : null}            
              </div>
              <div className="few-Description">
                {data.weather
                  ? <p className="bold">{data.weather[0].description}</p>
                  : null}
              </div>
            </div>
          </div>}

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main
                ? <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main
                ? <p className="bold">{data.main.humidity}% </p>
                : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind
                ? <p className="bold">{data.wind.speed.toFixed()}MPH</p>
                : null}
              <p>Wind Speed</p>
            </div>
          </div>}

        {/* {data.name !== undefined && 
       <div className="second-bottom">
       <div className="feels">
         {data.main ? <p className="bold">{data.main.pressure}</p> : null}
         <p></p>
       </div>
       <div className="humidity">           
         {data.main ? <p className="bold">{data.main.temp_min}°C</p> : null}
         <p>Temp-Min</p>
       </div>
       <div className="wind">
       {data.wind ? <p className="bold">{data.main.temp_max}°C</p> : null}
         <p>Temp-Max</p>
       </div>
     </div> 
}       */}

      </div>
    </div>
  );
}

export default Weather;
