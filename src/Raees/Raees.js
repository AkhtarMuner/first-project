import React from 'react'

import './Raees.css'

export default function Raees() {
    return (
        <header>
            <div className="main">
                <div className="logo">
                    <img src="../images/logoimage.jpg" alt="logo" />
                </div>
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Gallery</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact us</a></li>
                </ul>
            </div>
            <div className="title">
                <h1>PAKISTAN AIR FORCE.</h1>
            </div>
            <div className="button">
                <a href="/" className="btn"> WATCH VIDEOS</a>
                <a href="/" className="btn"> LEARN MORE</a>
            </div>
        </header>
    )
}
