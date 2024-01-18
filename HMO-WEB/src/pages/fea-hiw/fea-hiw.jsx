import React from "react";
import Header from "../../components/header";
import Features from "../../components/features";
import HowItWork from "../../components/hiw";
import Footer from "../../components/footer";

export default function FeaHiw(){
    return(
        <div className="fea-hiw">
            <Header />
            <Features />
            <HowItWork />
            <Footer />
        </div>
    )
}