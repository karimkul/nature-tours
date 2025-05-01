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
        setUser(userData.user);

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
                setShowSignup={setShowSignup}
                handleLogout={handleLogout}
            />
            <main>
                <Outlet />
            </main>
            <Footer />

            {!user && showLogin && (
                <LoginPage
                    onClose={() => setShowLogin(false)}
                    onLogin={handleLogin}
                />
            )}

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
