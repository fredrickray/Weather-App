import React from 'react';
import ReactDOM from 'react-dom/client';
// import Test from './Test';
import App from './App';
// import Register from "./component/Register";
import Login from "./component/Login";
import Weather from "./component/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./component/Profile";
import Edit from './component/ProfileEdit';
// import New from "./component/New";
import History from './component/History';
import Reset from './component/NewPassword';
import SavePassword from './component/PasswordReset';
import PageNotFound from './component/PageNotFound';


// ReactDOM.Render(<App/>, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/weather" element={<Weather />} />
      <Route exact path='/edit' element={<Profile />} />
      <Route exact path='/history' element={<History />} />
      <Route exact path='/profile' element={<Edit />} />
      <Route exact path='/reset' element={<Reset />} />
      <Route exact path='/save' element={<SavePassword />} />
      <Route exact path="*" element={<PageNotFound />} />
      {/* <Route exact path="/new" element={<New />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

