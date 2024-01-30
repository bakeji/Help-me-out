import React from "react";

export default function VidTranscript(){
    return(
        <div className="vid-transc">
            <div className="vid">
                <div className="vid-fil"> <video src=""></video></div>
                <div className="controls">
                    <p className="duration">0.30/3:00</p>
                    <div className="ctrls">
                        <button><img src="/play.png" alt="play" /> play</button>
                        <button> <img src="/volume-high.png" alt="volume" />volume</button>
                        <button><img src="/setting.png" alt="settings" /> Settings</button>

                    </div>
                </div>
            </div>

            <div className="trasc">
                <h3>Transcript</h3>
                <select name="language" id="lang">
                    <option value="English">English</option>
                    <option value="french">French</option>
                    <option value="yoruba">Yoruba</option>
                </select>

                <div className="transc-wrds">
                    <p>Transcript not available yet...</p>
                </div>
            </div>

        </div>
    )
}