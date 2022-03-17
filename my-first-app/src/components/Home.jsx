import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <section id="1" className="homeContainer">

                <div className="homeVideoContainer">
                    <video id="homeVideo" className="homeVideo" muted loop autoPlay playsInline poster="/video/load-video-min">
                    <source src="/video/Sphere-5.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div className="homeText">
                    <h2 className="homeTitle">Miqueas Moreno</h2>
                    <p className="homeDescription">Web Developer | Content Creator | Artist</p>
                    <button>Resume CV</button>
                    <button>Slide down</button>
                </div>
                
            </section>
        )
    }
}

export default Home;