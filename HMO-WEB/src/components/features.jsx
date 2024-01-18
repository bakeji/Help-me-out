import React from "react";

export default function Features(){
    return(
        <div className="features">
            <div className="heatures-heading">
            <h1> Features</h1>
            <p>Key Highlights of Our Extension</p>
            </div>

            <div className="feat-flex">
                <div className="feat-flex1">
                    <div className="simple">
                        <img src="/simple.png" alt="" />
                        <div className="simple-text">
                            <p>Simple Screen Recording</p>
                            <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                        </div>
                    </div>

                    <div className="simple">
                        <img src="/share.png" alt="" />
                        <div className="simple-text">
                            <p>Easy-to-Share URL</p>
                            <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                        </div>
                    </div>

                    <div className="simple">
                        <img src="/revisit.png" alt="" />
                        <div className="simple-text">
                            <p>Revisit Recordings</p>
                            <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                        </div>
                    </div>


                </div>

                <div className="flex-2">
                    <img src="/vidrepository.png" alt="" />
                </div>
            </div>
        </div>
    )
}