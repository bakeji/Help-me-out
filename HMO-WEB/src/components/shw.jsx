import React from "react";

export default function Show(){
    return(
        <div className="show">
            <div className="show-text">
                <h1>Show Them Don't Just Tell</h1>
                <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                <button>Install HelpMeOut <img src="/arrow-right.png" alt="" /></button>
            </div>

            <div className="imgs">
                <div className="img1">
                    <img src="/img1.png" alt="" />
                    <img src="/img2.png" alt="" />
                </div>

                <div className="img2">
                    <img src="/img3.png" alt="" />
                </div>
            </div>
        </div>
    )
}