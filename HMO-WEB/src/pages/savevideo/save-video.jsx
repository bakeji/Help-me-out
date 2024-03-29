import React from "react";
import Header from "../../components/header";
import VideoReady from "../../components/vid-ready";
import VidTranscript from "../../components/vid-transcript";
import Save from "../../components/save";
import Footer from "../../components/footer";
import "./save-video.css";


export default function SaveVideo(){
    return(
        <div>
            <Header />

            <div className="flx">
                <VideoReady />
                <hr className="hr" />
                <VidTranscript />
            </div>
            <Save />
            <Footer />
        </div>
    )
}