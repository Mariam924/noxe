import React from "react";
import MyVideo from "../img/Disney's Mulan - Official Teaser.mp4";

class MyVideoComponent extends React.Component {
    render() {
        return (
            /* autoPlay="autoplay" */

            <>
                <div className="position-relative">

                   {/*  <video id="myVideo" className="w-100" loop="true" controls autoPlay="autoplay">
                        <source src={MyVideo} type="video/mp4" autoPlay="autoplay" />
                    </video> */}

                    {/* <video id="myVideo" className="w-100" loop={true} controls autoPlay="autoplay">
                        <source src={MyVideo} type="video/mp4" autoPlay="autoplay" />
                    </video>

                    <div className="video-layer"></div> */}

                </div>



            </>



        );
    }
}

export default MyVideoComponent