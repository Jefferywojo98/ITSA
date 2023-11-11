import React from "react";
import "./Portfolio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import project1 from "../../../Images/Gas-Buddy.png";
import project2 from "../../../Images/views.png"
import project3 from "../../../Images/password.png"
import project4 from "../../../Images/NoteTaker.png"
import project5 from "../../../Images/Dayplanner.png"
import project6 from "../../../Images/Backend-Shopping.png"
const Portfolio = () => {
    return ( 
        <div class="projectcontainer" className="text-center">
            <div class="project" id="project">
                <h1 className="text-center">Projects</h1>
                <div class="float-center">
                    <p class ="projectTitle" className="text-center">Gas Buddy</p>
                    <img class="project1" src={project1}></img>
                    <p className="text-center"> GitHub Repository:{" "}
                        <a target="blank"href="https://github.com/Jefferywojo98/Find-my-gas-price">Open here!</a>
                    </p>
                     <p className="text-center">
                    Deploy App:{" "}<a target="blank" href="https://jefferywojo98.github.io/Find-my-gas-price/">Open here!</a>
                    </p>

                    <p class ="projectTitle" className="text-center">Password Generator</p>
                    <img class="project3" src={project3}></img>
                    <p className="text-center"> GitHub Repository:{" "}
                        <a target="blank"href="https://github.com/Jefferywojo98/Password_Generator">Open here!</a>
                    </p>
                     <p className="text-center">
                    Deploy App:{" "}<a target="blank" href="https://jefferywojo98.github.io/Password_Generator/">Open here!</a>
                    </p>

                    <p class ="projectTitle" className="text-center">Note Taker</p>
                    <img class="project4" src={project4}></img>
                    <p className="text-center"> GitHub Repository:{" "}
                        <a target="blank"href="https://github.com/Jefferywojo98/Note-Taking">Open here!</a>
                    </p>
                     <p className="text-center">
                    Deploy App:{" "}<a target="blank" href="https://jeffery-note-maker.herokuapp.com/">Open here!</a>
                    </p>

                    <p class ="projectTitle" className="text-center">v.i.e.w.s</p>
                    <img class="project2" src={project2}></img>
                    <p className="text-center"> GitHub Repository:{" "}
                        <a target="blank"href="https://github.com/jcapadocia3/v.i.e.w.s.">Open here!</a>
                    </p>
                     <p className="text-center">
                    Deploy App:{" "}<a target="blank" href="https://peaked-project.herokuapp.com/">Open here!</a>
                    </p>

                    <p class ="projectTitle" className="text-center">Backend Shopping</p>
                    <img class="project6" src={project6}></img>
                    <p className="text-center"> GitHub Repository:{" "}
                        <a target="blank"href="https://github.com/jcapadocia3/v.i.e.w.s.">Open here!</a>
                    </p>
                     <p className="text-center">
                    Deploy App:{" "}<a target="blank" href="https://peaked-project.herokuapp.com/">Open here!</a>
                    </p>

                    <p class ="projectTitle" className="text-center">Work Day Scheduler</p>
                    <img class="project5" src={project5}></img>
                    <p className="text-center"> GitHub Repository:{" "}
                        <a target="blank"href="https://github.com/Jefferywojo98/Day_Planner">Open here!</a>
                    </p>
                     <p className="text-center">
                    Deploy App:{" "}<a target="blank" href="https://jefferywojo98.github.io/Day_Planner">Open here!</a>
                    </p>
                </div>

            </div>
        </div>
     );
}
 
export default Portfolio;
<div>
    <p> Test</p>
</div>