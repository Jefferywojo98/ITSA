import React from 'react';
import "./Direction.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div class="Navbar text-center">
    <h1 class='mainTitle'>Jeffery Portfolio</h1>
      <li className="nav-item text-center">
        <a href="#home"onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}> Home</a>
      </li>
      <li className="nav-item text-center">
        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}> Portfolio</a>
      </li>
      <li className="nav-item text-center">
        <a href="#resume"onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
      </li>
      <li className="nav-item text-center">
        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact
        </a>
      </li>
    </div>
  );
}

export default NavBar;