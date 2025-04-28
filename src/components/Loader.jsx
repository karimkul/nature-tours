import { ClipLoader } from "react-spinners";
import "../styles/loader.css";

function Loader() {
    return (
        <div className="loading-wrapper">
            <ClipLoader color="#4f46e5" size={50} />
        </div>
    );
}

export default Loader;
