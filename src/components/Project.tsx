import React from "react";
import mock1 from '../assets/images/netflx_sg_mrt.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.therakyatpost.com/fun/2024/12/20/come-and-play-ddakji-squid-game-takes-over-mrt-ampang-park/" target="_blank" rel="noreferrer"><img src={mock1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.therakyatpost.com/fun/2024/12/20/come-and-play-ddakji-squid-game-takes-over-mrt-ampang-park/" target="_blank" rel="noreferrer"><h2>Netflix's Squid Game 2 Poll System</h2></a>
                <p>Built the Netflix's Squid Game 2 interactive poll system as featured in the series using Python as part of Netflix's promotion of the series at MRT Station Ampang Park, KL, Malaysia.</p>
                <p>The poll system is triggered when a player chooses to continue the game or withdraw. “X” indicates that the player chose not to continue, while “O” indicates continuation. When a player clicks the colored button, blue represents “O” (continue) and red represents “X” (withdraw).</p>
            </div>
        </div>
    </div>
    );
}

export default Project;