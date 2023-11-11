import React from 'react';
import "./Direction.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div class="Navbar">
      <div>
          <h1 class='mainTitle'>EICC.ITSA Logo</h1>
      </div>
      <div class="text-center">
      <li className="nav-item text-center">
        <a href="#home"onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}> Home</a>
      </li>
      <li className="nav-item text-center">
        <a href="#leadership" onClick={() => handlePageChange('Leadership')}className={currentPage === 'Leadership' ? 'nav-link active' : 'nav-link'}> Leadership</a>
      </li>
      </div>
    </div>
  );
}

export default NavBar;