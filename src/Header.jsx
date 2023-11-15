import React from "react";

export default function Header(){
    return (
        <div className="Header">
            <img src="./logo192.png" alt="logo"/>
            <ul>
                <li href="#"  >Home</li>
                <li href="#"  >About</li>
                <li href="#"  >Portfolio</li>
                <li href="#"  >Service</li>
                <li href="#"  >Skills</li>
                <li href="#"  >Contact</li>
            </ul>
            <button class="button-1">Login</button>
        </div>
    )
}