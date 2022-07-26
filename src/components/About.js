import React from "react";
import "./About.css";

export default function About() {
    return(
        <section id="about">
            <div className="container">
                <div className="intro">
                    <h1>
                        Hi, I'm Aishwariya!
                        <br/> I aspire to build amazing apps.
                    </h1>
                    <p className="intro-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                        Laborum, voluptas natus?
                    </p>
                    <div className="checkout">
                        <a href="#contact" className="contactButton">Work With Me</a>
                        <a href="#projects" className="projectsButton">See My Past Work</a>
                    </div>
                </div>
                <div className="intro-pic">
                    <a href="https://www.vecteezy.com/free-vector/female-developer" className="image-link">
                        <img className="my-pic" alt="that's me" src="./female_dev.jpg"/>
                        Female Developer Vectors by Vecteezy
                    </a>
                </div>
            </div>
         </section>
    );
}

// repeat the same basic structure for all 6 components