import React from "react";
import "./Home.css"
import Me from "../../../Images/me.jpg"

export default function About() {
    return ( 
        <div class="HomePg">
            <div class="aboutMe" id="aboutMe">
            <h1 class ="ab-text" id="ab-text">About me</h1>
            <img src={Me} alt="Me"width='500' id='Me' height='500'></img>
            <p>My name is Jeffery Wojciechowski. 
                I am a Full Stack Web Developer. 
                I'm the last of 7. 
                In Grayslake, Illinois.  
                Some of the hobbyI love to do is card games, DND, and coding.</p> 
            </div>
            
        </div>
        
     );
     
}
 
