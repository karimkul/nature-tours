import "../styles/error.css";

function Error({ message }) {
    return (
        <div className="error-container">
            <div className="error-box">
                <h2>🚫 Error</h2>
                <p>Error: {message}</p>
            </div>
        </div>
    );
}

export default Error;
