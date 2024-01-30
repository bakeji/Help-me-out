import React from "react";

export default function HowItWork(){
    return(
    <div className="hiw">
        <h1>How it works</h1>

        <div className="hiw-text">

            <div className="hiw1">
                <span><p>1</p></span>
                <h3>Record Screen</h3>
                <p className="hiw-p">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                <img src="/Vector.png" alt="" />
            </div>

            <div className="hiw1">
                <span><p>2</p></span>
                <h3>Share Your Recording</h3>
                <p  className="hiw-p">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                <img src="/Vector.png" alt="" />
            </div>

            <div className="hiw1">
                <span><p>3</p></span>
                <h3>Learn Effortlessly</h3>
                <p  className="hiw-p">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                <img src="/Vector.png" alt="" />
            </div>

        </div>
    </div>
    )
}