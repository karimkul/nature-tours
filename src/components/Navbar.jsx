import "../styles/navbar.css";

import { Link } from "react-router-dom";

function Navbar({ user, setShowLogin, setShowSignup, handleLogout }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">🌍 Natours</Link>
            </div>

            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tours">Tours</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

            <div className="navbar-auth">
                {user ? (
                    <div>
                        <span>Welcome, {user.name}</span>
                        <button className="btn logout" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            className="btn login"
                            onClick={() => setShowLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className="btn signup"
                            onClick={() => setShowSignup(true)} // Show sign-up modal when clicked
                        >
                            Sign Up
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
