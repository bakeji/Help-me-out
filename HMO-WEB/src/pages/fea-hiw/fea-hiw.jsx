import React from "react";
import Header from "../../components/header";
import Features from "../../components/features";
import HowItWork from "../../components/hiw";
import Footer from "../../components/footer";
import Show from "../../components/shw";
import "./fea-hiw.css";

export default function FeaHiw(){
    return(
        <div className="fea-hiw">
            <Header />
           <div className="main">
                <Show />
                <Features />
                <HowItWork />
           </div>
           <Footer />
        </div>
    )
}