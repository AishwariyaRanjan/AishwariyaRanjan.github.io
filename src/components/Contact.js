import React from "react";
import "./Projects.css";
import "../styles.css";
import "./Contact.css";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data){
        console.log("data:",data);
        return Object.keys(data)
            .map(
                key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])                
            )
            .join("&");            
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contact", name, email, message})
        })
            .then(() => alert("Message sent!") )
            .catch((error) => alert(error));
    }

    return(
        <section id="contact">
            <div className="contact-container">
                <div className="map-div">
                    <iframe 
                        width="100%"
                        
                        height="100%"
                        title="Map"
                        className="map"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{filter: "opacity(0.7)"}}
                        src ="https://www.google.com/maps/embed/v1/place?q=Arizona+State+University&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="over-map-screen">
                        <div className="address">
                            <h2>
                                ADDRESS
                            </h2>
                            <p className="address-p">
                                975 S. Myrtle Ave <br />
                                Tempe, AZ 85281
                            </p>                            
                        </div>
                        <div className="email-phone-div">
                            <h2>
                                EMAIL
                            </h2>
                            <a className="email-link">
                                ranjanaishwariya107@gmail.com
                            </a>
                            <h2>
                                PHONE
                            </h2>
                            <p className="phone-p">520-510-5202</p>
                        </div>
                    </div>
                </div>
                <form
                    netlify
                    name="contact"
                    className="contact-form"
                    onSubmit = {handleSubmit}
                >
                    <h2 className="form-heading">
                        Work with Me
                    </h2>
                    <p className="form-p">
                        I look forward to opportunities where I get to learn, grow and make a difference. Please don't hesitate to reach out!
                    </p>
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="contact-input-container">
                        <label htmlFor="name" className="label-style">
                            Name
                        </label>
                        <input type="text" id="name" name="name" className="input-box" onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="contact-input-container">
                        <label htmlFor="email" className="label-style">
                            Email
                        </label>
                        <input type="email" id="email" name="email" className="input-box" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="contact-input-container">
                        <label htmlFor="message" className="label-style">
                            Message
                        </label>
                        <textarea id="message" name="message" className="input-box" onChange={(e) => setMessage(e.target.value)}/>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </section>

    );
}

