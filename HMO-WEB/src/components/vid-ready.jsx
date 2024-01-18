import React from "react";
export default function VideoReady(){
    return(
        <div className="vid-rdy">
            <h1>Your video is ready!</h1>
            
            <div className="rename">
                <p>Name</p>
                <div className="edit">
                <p>Untitled_Video_20232509 </p>
                <button><img src="/edit.png" alt="" /></button>
                </div>
            </div>

            <div className="send">
                <input type="email" placeholder="enter email of receiver" name="email" id="email" />
                <button>send</button>
            </div>

            <div className="url">
                <p>Video Url</p>
                <div className="copy">
                    <p>jjjjjjjjjjjjj</p>
                    <button> <img src="/copy.png" alt="copy"/> copy</button>
                </div>
            </div>


            <div className="share">
                <p>Share your video</p>
                <button><img src="/facebook.png" alt="facebook" />Facebook</button>
                <button><img src="/whatsap.png" alt="whatsapp" /> WhatsApp</button>
                <button> <img src="/telegram.png" alt="telegram" />Telegram</button>
            </div>

        </div>
    )

}