import React, { useState } from "react";
import NavBars from "./NavBar";
import Home from "./Sections/Home/Home";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Resume from "./Sections/Resume/Resume";
import Contact from "./Sections/Contact/Contact";
import "./Direction.css"


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBars currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}