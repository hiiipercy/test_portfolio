import React from "react";

export default function About(){
    return(
        <about className="about">
            <div className="bio_left">
                <img src="./port.jpg" alt="" />
            </div>
            <div className="bio_right">
                <h1>About Me</h1>
                <p>Writing a short professional bio is a great way to build your online presence. Your profile has the potential to help you make positive impressions that enhance your professional development and success. If you're interested in learning to write an effective biographical statement, it's important to know what to include and what a good example looks like. In this article, we discuss the purpose and format of a shor</p>
                        <div class="container">
                <div class="skill-box">
                    <span class="title">HTML</span>
                    <div class="skill-bar">
                        <span class="skill-per html">
                            <span class="tooltip">96%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">CSS</span>
                    <div class="skill-bar">
                        <span class="skill-per css">
                            <span class="tooltip">93%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">JavaScript</span>
                    <div class="skill-bar">
                        <span class="skill-per javascript">
                            <span class="tooltip">70%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">React JS</span>
                    <div class="skill-bar">
                        <span class="skill-per nodejs">
                            <span class="tooltip">80%</span>
                        </span>
                    </div>
                </div>
            </div>  
                <div>
                    <button class="hire">HIRE ME</button>
                    <button class="download">DOWNLOAD CV</button>
                </div>

            </div>
        </about>
    )
}