import React from "react";

export default function VidTranscript(){
    return(
        <div className="vid-transc">
            <div className="vid">
                <div> <video src=""></video></div>
                <div className="controls">
                    <p className="duration">0.30//3:00</p>
                    <div className="ctrls">
                        <button><img src="/play.png" alt="play" /></button>
                        <button> <img src="/volume.png" alt="volume" /></button>
                        <button><img src="/settings.png" alt="settings" /></button>

                    </div>
                </div>
            </div>

            <div className="trasc">
                <select name="language" id="lang">
                    <option value="English">English</option>
                    <option value="french">French</option>
                    <option value="yoruba">Yoruba</option>
                </select>

                <div>
                    <p>transcript not available yet...</p>
                </div>
            </div>

        </div>
    )
}