import React from 'react';
import { Link } from "react-router-dom";
import "./index.css"
// import "/client/public/fontawesome/css/fontawesome.min.css"
// import "/client/public/fontawesome/css/fontawesome.css"



function New() {
    return(
        <div class="wrapper d-flex align-items-stretch">
        
        <nav id="sidebar" class="active">
            {/* <h1><a href="index.html" class="logo">M.</a></h1> */}
    <ul class="list-unstyled components mb-5">
      <li class="active">
        <Link href="/weather"><span class="fa fa-home"></span> Home</Link>
      </li>
      <li>
          <Link href="#"><span class="fa fa-user"></span> Profile</Link>
      </li>
      <li>
        <Link href="#"><span class="fa fa-sticky-note"></span> Blog</Link>
      </li>
      <li>
        <Link href="#"><span class="fa fa-cogs"></span> Services</Link>
      </li>
      <li>
        <Link href="#"><span class="fa fa-paper-plane"></span> Contacts</Link>
      </li>
    </ul>

    </nav>

    {/* <!-- Page Content  --> */}
  <div id="content" class="p-4 p-md-5">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <button type="button" id="sidebarCollapse" class="btn btn-primary">
          <i class="fa fa-bars"></i>
          <span class="sr-only">Toggle Menu</span>
        </button>
        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
        </button>

        
      </div>
    </nav>

    
    
  </div>
    </div>

    )
}

export default New