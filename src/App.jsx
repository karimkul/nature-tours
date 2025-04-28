// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { useEffect, useState } from "react";

// function App() {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         if (storedUser) {
//             setUser(storedUser.user); // get only the user object
//         }
//     }, []);

//     return (
//         <div>
//             <Navbar user={user} />
//             <main>
//                 <Outlet />
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default App;

// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { useEffect, useState } from "react";
// import LoginPage from "./pages/LoginPage";
// import Signup from "./components/Signup"; // Import the Signup component

// function App() {
//     const [user, setUser] = useState(null);
//     const [showLogin, setShowLogin] = useState(false); // Modal visibility state for login
//     const [showSignup, setShowSignup] = useState(false); // Modal visibility state for sign-up

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         if (storedUser) {
//             setUser(storedUser.user); // Get only the user object
//         }
//     }, []);

//     const handleLogin = (userData) => {
//         localStorage.setItem("user", JSON.stringify(userData));
//         setShowLogin(false); // Close modal after successful login
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("user"); // Remove user data from localStorage
//         setUser(null); // Reset user state
//         window.location.reload(); // Reload page to reset user
//     };

//     const handleSignup = (userData) => {
//         localStorage.setItem("user", JSON.stringify(userData));
//         setUser(userData); // Set user state after successful signup
//         setShowSignup(false); // Close the sign-up modal after successful signup
//     };

//     return (
//         <div>
//             <Navbar
//                 user={user}
//                 setShowLogin={setShowLogin}
//                 setShowSignup={setShowSignup} // Pass setShowSignup to handle sign-up modal
//                 handleLogout={handleLogout}
//             />
//             <main>
//                 <Outlet />
//             </main>
//             <Footer />

//             {showLogin && (
//                 <LoginPage
//                     onClose={() => setShowLogin(false)}
//                     onLogin={handleLogin}
//                 />
//             )}

//             {showSignup && (
//                 <Signup
//                     onClose={() => setShowSignup(false)}
//                     onSignup={handleSignup}
//                 />
//             )}
//         </div>
//     );
// }

// export default App;
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import Signup from "./components/SignUp";

function App() {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser.user);
        }
    }, []);

    useEffect(() => {
        if (user) {
            setShowLogin(false);
        }
    }, [user]);

    const handleLogin = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        setShowLogin(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    const handleSignup = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        setShowSignup(false);
    };

    return (
        <div>
            <Navbar
                user={user}
                setShowLogin={setShowLogin}
                setShowSignup={setShowSignup} // Pass setShowSignup to handle sign-up modal
                handleLogout={handleLogout}
            />
            <main>
                <Outlet />
            </main>
            <Footer />

            {/* Show login modal only if user is not logged in */}
            {!user && showLogin && (
                <LoginPage
                    onClose={() => setShowLogin(false)}
                    onLogin={handleLogin}
                />
            )}

            {/* Show signup modal only if user is not logged in */}
            {!user && showSignup && (
                <Signup
                    onClose={() => setShowSignup(false)}
                    onSignup={handleSignup}
                />
            )}
        </div>
    );
}

export default App;
