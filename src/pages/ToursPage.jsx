import { Link } from "react-router-dom";
import "../styles/toursPage.css";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { fetchTours } from "../services/api";

function Tours() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["tours"],
        queryFn: fetchTours,
        staleTime: 5 * 60 * 1000
    });

    const tours = data || [];

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!Array.isArray(tours) || tours.length === 0) {
        return <div>No tours available</div>;
    }

    return (
        <div className="tours-container">
            <h1 className="tours-heading">Explore Our Tours</h1>
            <div className="tours-list">
                {tours?.map((tour) => (
                    <div key={tour._id} className="tour-card">
                        <img
                            src={`/tours/${tour.imageCover}`}
                            alt={tour.name || "Tour image"}
                            className="tour-image"
                        />
                        <div className="tour-info">
                            <h2 className="tour-title">{tour.name}</h2>
                            <p className="tour-description">{tour.summary}</p>

                            <div className="tour-rating">
                                <span className="rating">
                                    Rating: {tour.ratingsAverage || "N/A"} (
                                    {tour.ratingsQuantity || 0} reviews)
                                </span>
                            </div>

                            <div className="tour-details">
                                <div className="tour-duration">
                                    <strong>Duration: </strong>
                                    {tour.duration} days
                                </div>
                                <div className="tour-difficulty">
                                    <strong>Difficulty: </strong>
                                    {tour.difficulty}
                                </div>
                                <div className="tour-price">
                                    <strong>Price: </strong>$
                                    {tour.price || "N/A"}
                                </div>
                            </div>

                            <div className="tour-location">
                                <strong>Location: </strong>
                                {Array.isArray(tour.locations)
                                    ? tour.locations
                                          .map((loc) => loc.name)
                                          .join(", ")
                                    : "Unknown"}
                            </div>

                            <div className="tour-guides">
                                <strong>Guides: </strong>
                                {Array.isArray(tour.guides)
                                    ? tour.guides
                                          .map((guide) => guide.name)
                                          .join(", ")
                                    : "None"}
                            </div>

                            <Link
                                to={`/tours/${tour._id}`}
                                className="view-details"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tours;
