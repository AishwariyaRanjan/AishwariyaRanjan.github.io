import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import "./Projects.css";
import "../styles.css";
import "./commonStyles.css";

export default function Projects() {
    return(
        <section id="projects">
            <div className="section-container">
                <div className="intro">
                    <CodeIcon className="code-icon" />
                    <h1 className="intro-heading">
                        Projects I've Worked On
                    </h1>
                    <p className="intro-text">
                        I am constantly trying to develop my skills and gain experience using technologies by building projects outside my coursework.
                    </p>
                </div>
                <div className="content-container">
                    {projects.map((project)=>(
                        <a href ={project.link} key={project.image} className="proj-links">
                            <div className="projs">
                                <img alt="gallery" src={project.image} className="proj-img"/>
                                <div className="proj-text">
                                    <h2 className="proj-subtitle">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="proj-title">
                                        {project.title}
                                    </h1>
                                    <p className="proj-description">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>

                    ))}
                </div>
                {/* <p className="img-attribution">
                <a className="attri-link" href='https://www.freepik.com/vectors/online-work'>Online work vector created by svstudioart - www.freepik.com</a>
                    <a className="attri-link" href="https://www.freepik.com/vectors/development">Development vector created by storyset - www.freepik.com</a>
                </p> */}
            </div>
        </section>
    );
}

