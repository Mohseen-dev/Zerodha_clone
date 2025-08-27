import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container ">
    <Link to='/' class="navbar-brand" href="#"><img src="media/images/logo.svg" style={{width:"200px"}}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse w-fit" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 gap-2 mb-lg-0" style={{marginLeft:"700px"}}>
        <li class="nav-item">
          <Link to='/signup' class="nav-link active fw-medium text-muted" aria-current="page" href="#">Signup</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link active fw-medium text-muted" href="#">About</Link>
        </li>
        <li class="nav-item">
          <Link to="/products" class="nav-link active fw-medium text-muted" href="#">Products</Link>
        </li>
        <li class="nav-item">
          <Link to="/pricing" class="nav-link active fw-medium text-muted" href="#">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link to="/support" class="nav-link active fw-medium text-muted" href="#">Support</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
  );
}

export default NavBar;

        