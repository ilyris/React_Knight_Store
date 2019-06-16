import React from 'react';

const heroSection = () => {
    return(
        <section id="landingCard">
            <div id="landingTextWrapper">
                <div className="welcomeTextContainer ">
                    <h1 className="knight-watches-title animated fadeInRight">Knight Watches</h1>
                    <p className="card-1-text-container-paragraph animated fadeInRight">The sleekest, cleanest, meanest
                        design for a
                        time piece you
                        can find.</p>
                    <div className="shop-now-button  animated fadeIn">
                        <a className="shop-now" href="#watches">Shop Now
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default heroSection;