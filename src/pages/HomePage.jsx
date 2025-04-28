import "../styles/homePage.css";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { fetchTours } from "../services/api";

const reviews = [
    {
        name: "John Doe",
        rating: 5,
        comment: "Amazing experience, would recommend to everyone!",
        image: "/users/user-5.jpg"
    },
    {
        name: "Jane Smith",
        rating: 4,
        comment: "Had a great time, but the weather was a bit chilly.",
        image: "/users/user-7.jpg"
    },
    {
        name: "Michael Lee",
        rating: 5,
        comment: "Everything was perfect, exceeded my expectations.",
        image: "/users/user-9.jpg"
    }
];

function HomePage() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["tours"],
        queryFn: fetchTours
    });

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return (
            <Error message={error.message || "Oops! Something went wrong."} />
        );
    }

    const tours = data?.data?.data || [];

    const popularTours = tours
        .slice()
        .sort((a, b) => b.ratingsAverage - a.ratingsAverage)
        .slice(0, 4);

    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1>Your Next Adventure Awaits</h1>
                    <p>
                        Explore the world's most beautiful destinations with us.
                    </p>
                    <Link
                        to="/tours"
                        className="btn cta"
                        style={{ textDecoration: "none" }}
                    >
                        Start Your Journey
                    </Link>
                </div>
            </section>

            <section className="popular-tours">
                <h2>Popular Tours</h2>
                <div className="tour-cards">
                    {popularTours.slice(0, 4).map((tour) => (
                        <div key={tour._id} className="tour-card">
                            <img
                                src={`/tours/${tour.imageCover}`}
                                alt={`${tour.name} cover image`}
                                className="tour-image"
                            />
                            <div className="tour-info">
                                <h3>{tour.name}</h3>{" "}
                                <p>
                                    {tour.price
                                        ? `$${tour.price}`
                                        : "Price info not available"}
                                </p>
                                <Link
                                    to={`/tours/${tour._id}`}
                                    className="btn cta"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="reviews">
                <h2>What Our Customers Say</h2>
                <div className="reviews-container">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="review-image"
                            />
                            <div className="review-content">
                                <h3>{review.name}</h3>
                                <p>{`Rating: ${"⭐".repeat(review.rating)}`}</p>
                                <p>"{review.comment}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="explore-more">
                <h2>Ready to Explore More?</h2>
                <p>
                    Discover new destinations and amazing experiences that await
                    you.
                </p>
                <Link to="/tours" className="btn cta">
                    Explore Now
                </Link>
            </section>
        </div>
    );
}

export default HomePage;
