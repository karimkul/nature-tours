import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";

const Modal = ({ onClose, onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/users/login",
                { email, password }
            );
            console.log("Respond", response);

            if (response.status === 200) {
                const userData = {
                    token: response.data.token,
                    user: response.data.data.user
                };
                onLogin(userData);
                onClose();
            }
        } catch (error) {
            console.error("Login error", error);
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={onClose}>
                    &times;
                </button>
                <h2>Login to Your Account</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

const LoginPage = ({ onClose, onLogin }) => {
    return <Modal onClose={onClose} onLogin={onLogin} />;
};

export default LoginPage;
