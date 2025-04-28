import "../styles/aboutPage.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-container">
            <section className="about-hero" data-aos="fade-up">
                <div className="hero-content">
                    <h1>Explore the World’s Most Beautiful Destinations</h1>
                    <p>
                        Join us on a journey to experience nature like never
                        before.
                    </p>
                    <button>Start Your Adventure</button>
                </div>
            </section>

            <section className="about-story" data-aos="fade-left">
                <div className="content">
                    <h2>Our Journey</h2>
                    <p>
                        Founded with a passion for nature and adventure, Nature
                        Tours offers travelers unique experiences in some of the
                        world's most pristine environments. We aim to provide
                        unforgettable memories while supporting sustainable
                        tourism practices.
                    </p>
                </div>
            </section>

            <section className="about-mission" data-aos="fade-right">
                <div className="content">
                    <h2>Our Mission</h2>
                    <p>
                        We are committed to responsible travel, ensuring that
                        every tour is both enriching for our customers and
                        respectful to nature. Our goal is to connect travelers
                        to the environment in a meaningful and sustainable way.
                    </p>
                    <div className="mission-icons">
                        <div className="icon">
                            <p>Sustainability</p>
                        </div>
                        <div className="icon">
                            <p>Adventure</p>
                        </div>
                        <div className="icon">
                            <p>Community</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-team" data-aos="zoom-in-up">
                <div className="content">
                    <h2>Meet the Team</h2>
                    <p>
                        Our passionate team brings a wealth of experience and a
                        love for nature to every tour.
                    </p>
                    <div className="team-cards">
                        <div className="team-card">
                            <h3>John Doe</h3>
                            <p>Tour Guide</p>
                        </div>
                        <div className="team-card">
                            <h3>Jane Smith</h3>
                            <p>Operations Manager</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-cta" data-aos="fade-up">
                <div className="cta-content">
                    <h2>Ready to Explore?</h2>
                    <p>
                        Join us for a life-changing adventure into the wild.
                        Book your tour today!
                    </p>
                    <button>Book Your Tour</button>
                </div>
            </section>
        </div>
    );
};

export default About;
