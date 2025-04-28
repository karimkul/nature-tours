import "../styles/navbar.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Signup from "./Signup";
// // import Login from "./Login";
// import LoginPage from "../pages/LoginPage";

// function Navbar({ user }) {
//     const [showSignup, setShowSignup] = useState(false);
//     const [showLogin, setShowLogin] = useState(false);

//     // Handle login
//     const handleLogin = (userData) => {
//         // Save user data in localStorage and update state in the parent component
//         localStorage.setItem("user", JSON.stringify(userData));
//         setShowLogin(false); // Close login modal after successful login
//     };

//     // Handle signup
//     const handleSignup = (userData) => {
//         // Save user data in localStorage and update state in the parent component
//         localStorage.setItem("user", JSON.stringify(userData));
//         setShowSignup(false); // Close signup modal after successful signup
//     };

//     // Handle logout
//     const handleLogout = () => {
//         localStorage.removeItem("user"); // Remove user data from localStorage
//         // Additional logic to reset user state in the parent component (optional, if needed)
//         window.location.reload(); // Reload to reset the user in the parent component
//     };

//     return (
//         <>
//             <nav className="navbar">
//                 <div className="navbar-logo">
//                     <Link to="/">🌍 Natours</Link>
//                 </div>

//                 <ul className="navbar-links">
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/tours">Tours</Link>
//                     </li>
//                     <li>
//                         <Link to="/about">About</Link>
//                     </li>
//                 </ul>

//                 <div className="navbar-auth">
//                     {/* Conditionally render based on user login state */}
//                     {user ? (
//                         <div>
//                             <span>Welcome, {user.name}</span>
//                             <button
//                                 className="btn logout"
//                                 onClick={handleLogout}
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     ) : (
//                         <>
//                             <button
//                                 className="btn login"
//                                 onClick={() => setShowLogin(true)}
//                             >
//                                 Login
//                             </button>
//                             <button
//                                 className="btn signup"
//                                 onClick={() => setShowSignup(true)}
//                             >
//                                 Sign Up
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </nav>

//             {/* Conditionally render modals */}
//             {showSignup && (
//                 <Signup
//                     onClose={() => setShowSignup(false)}
//                     onSignup={handleSignup}
//                 />
//             )}
//             {showLogin && (
//                 <LoginPage
//                     onClose={() => setShowLogin(false)}
//                     onLogin={handleLogin}
//                 />
//             )}
//         </>
//     );
// }

// export default Navbar;

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
