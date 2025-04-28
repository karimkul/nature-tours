import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-brand">🌍 Natours</div>

            <div className="footer-links">
                <div className="footer-explore">
                    <h4>Explore</h4>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Tours</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-connect">
                    <h4>Connect</h4>
                    <ul>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-services">
                    <h4>Services</h4>
                    <ul>
                        <li>
                            <a href="#">Guided Tours</a>
                        </li>
                        <li>
                            <a href="#">Travel Insurance</a>
                        </li>
                        <li>
                            <a href="#">Group Bookings</a>
                        </li>
                        <li>
                            <a href="#">Travel Blog</a>
                        </li>
                    </ul>
                </div>
            </div>

            <p className="footer-copy">© 2025 Natours. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
