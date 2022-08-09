import React from "react";
import "./LandingPage.css";

export default function LandingPage(){

    return(
        <section id="landingpage">
            
            <div className="l-container">
                <div className="landing-text">
                    <h1>Hi, I'm Aishwariya!
                    <br/> I aspire to build amazing apps.</h1>
                    <div className="about-button-div">
                        <a href="#about" className="about-button">About Me</a>                    
                    </div>
                </div>
            </div>
        </section>
    )
}