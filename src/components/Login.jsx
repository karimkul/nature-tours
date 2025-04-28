// import { useState } from "react";
// import "../styles/login.css";

// import { useState } from "react";

// export default function LoginModal({ onClose }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(
//                 "http://localhost:3000/api/v1/users/login",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify({
//                         email,
//                         password
//                     })
//                 }
//             );

//             const data = await response.json();

//             if (response.ok) {
//                 // Store the token in localStorage
//                 localStorage.setItem("token", data.token);
//                 localStorage.setItem("user", JSON.stringify(data.data.user));

//                 alert("Login successful!");
//                 onClose(); // Close the modal
//             } else {
//                 alert(data.message || "Login failed");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             alert("Something went wrong!");
//         }
//     };

//     return (
//         <div className="modal-backdrop" onClick={onClose}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//                 <button className="close-modal" onClick={onClose}>
//                     &times;
//                 </button>
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button type="submit">Log In</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// import { useState } from "react";
// import "../styles/login.css";

// export default function LoginModal({ onClose, onLogin }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(
//                 "http://localhost:3000/api/v1/users/login",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify({
//                         email,
//                         password
//                     })
//                 }
//             );

//             const data = await response.json();

//             if (response.ok) {
//                 const userData = { token: data.token, user: data.data.user };
//                 onLogin(userData); // Pass the user data to the parent (Navbar)
//                 onClose(); // Close the modal
//             } else {
//                 alert(data.message || "Login failed");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             alert("Something went wrong!");
//         }
//     };

//     return (
//         <div className="modal-backdrop" onClick={onClose}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//                 <button className="close-modal" onClick={onClose}>
//                     &times;
//                 </button>
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button type="submit">Log In</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default function LoginModal({ onClose, onLogin }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(
//                 "http://localhost:3000/api/v1/users/login",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify({
//                         email,
//                         password
//                     })
//                 }
//             );

//             const data = await response.json();

//             if (response.ok) {
//                 const userData = { token: data.token, user: data.data.user };
//                 onLogin(userData); // Pass the user data to the parent (Navbar)
//                 onClose(); // Close the modal
//             } else {
//                 alert(data.message || "Login failed");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             alert("Something went wrong!");
//         }
//     };

//     return (
//         <div className="modal-backdrop" onClick={onClose}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//                 <button className="close-modal" onClick={onClose}>
//                     &times;
//                 </button>
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button type="submit">Log In</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// import { useState } from "react";
// import { useAuth } from "../context/AuthContext"; // <== import

// export default function LoginModal({ onClose }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const { login } = useAuth(); // <== use login from context

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(
//                 "http://localhost:3000/api/v1/users/login",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify({ email, password })
//                 }
//             );

//             const data = await response.json();

//             if (response.ok) {
//                 const userData = { token: data.token, user: data.data.user };
//                 login(userData); // <== use login() from context
//                 onClose(); // Close modal
//             } else {
//                 alert(data.message || "Login failed");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             alert("Something went wrong!");
//         }
//     };

//     return (
//         <div className="modal-backdrop" onClick={onClose}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//                 <button className="close-modal" onClick={onClose}>
//                     &times;
//                 </button>
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button type="submit">Log In</button>
//                 </form>
//             </div>
//         </div>
//     );
// }
