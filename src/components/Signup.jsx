import { useNavigate } from "react-router-dom";
import "../styles/signUp.css";

export default function Signup({ onClose }) {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password, passwordConfirm } = e.target.elements;

        try {
            const res = await fetch(
                "http://localhost:3000/api/v1/users/signup",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: name.value,
                        email: email.value,
                        password: password.value,
                        passwordConfirm: passwordConfirm.value
                    })
                }
            );

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                alert(`Welcome, ${data.data.user.name}!`);
                onClose();
                navigate("/");
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (err) {
            console.error("Signup error:", err);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={onClose}>
                    &times;
                </button>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <input
                        type="password"
                        name="passwordConfirm"
                        placeholder="Confirm Password"
                        required
                    />
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    );
}
