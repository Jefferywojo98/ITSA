import React from 'react';
import "./Resume.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeImg from "../../../Images/jeffresumeinage.png"
export default function Resume() {
  return (
    <div>
        <div className='text-center'>
      <h4 className='text-center'>Resume</h4>
      <img src={ResumeImg}className="ResumeImg"></img>
      <p className='text-center'> Download
      <a className='button ResumeDownload' href='https://docs.google.com/document/d/1BIwEQmJ5b4Sk5JctPF_VuxOr08975jvafZlhGlX19f0/edit?usp=sharing'> My Resume</a></p>

        
      </div>
  </div>

  )}