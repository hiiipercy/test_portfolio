import React from "react";

export default function Contact(){
    return(
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="contact_body">
                <div className="left_contact">
                    <form className="contact_form">
                        <input className="name" type="text" placeholder="Enter Your Name"/>
                        <input className="mail" type="email" placeholder="Enter Email Address"/>
                        <textarea className="message" type="text" placeholder="Enter Your Message"/>
                    </form>
                    <button class="send_message">Send Message</button>
                </div>
                <div className="contact_info">
                    <h3>Contact Info</h3>
                    <div>
                        <img alt=""/>
                        <p>Kanchan, Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <img alt=""/>
                        <p>+8801568476837</p>
                    </div>
                    <div>
                        <img alt=""/>
                        <p>ishaqmiah@yahoo.com</p>
                    </div>
                </div>
                </div>
        </div>
    )
}