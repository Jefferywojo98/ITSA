import React, { useState } from "react";
import NavBars from "./NavBar";
import Home from "./Sections/Home/Home";
import Leadership from "./Sections/Leadership/Leadership";
import Contact from "./Sections/Contact/Contact";
import "./Direction.css"


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Leadership") {
      return <Leadership />;
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