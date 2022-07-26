import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import "./Projects.css";
import "./Skills.css";
import "../styles.css";
import "./commonStyles.css";

export default function Skills() {
    return(
        <section id="skills">
            <div className="section-container">
                <div className="intro">
                    <ChipIcon className="chip-icon"/>
                    <h1 className="intro-heading">
                        Skills &amp; Technologies
                    </h1>
                    <p className="intro-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                        ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                        possimus est.
                    </p>
                </div>
                <div className="skill-container">
                    {skills.map((skill) => (
                        <div key={skill} className="skill-boxes">
                            <div className="skill-box-style">
                                <BadgeCheckIcon className="badgeIcon"/>
                                <span className="skill-text">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
