const HeroSection = () => {
    return (
        <section className="hero">
            <video autoPlay muted loop className="hero-video">
                <source src="/path-to-your-video.mp4" type="video/mp4" />
            </video>
            <div className="hero-content">
                <h1>Adventure Awaits</h1>
                <p>Explore the world’s most amazing destinations.</p>
                <a href="#tours" className="cta-btn">
                    Start Your Journey
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
