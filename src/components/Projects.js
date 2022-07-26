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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
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
            </div>
        </section>
    );
}

