import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import "../styles/tourDetails.css";
import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleTour } from "../services/api";

function TourDetails() {
    const { id } = useParams();

    const {
        data: tour,
        isError,
        isLoading,
        error
    } = useQuery({
        queryKey: ["singleTour", id],
        queryFn: () => fetchSingleTour(id)
    });
    console.log(tour);

    if (isLoading) return <Loader />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className="tour-page">
            <div
                className="hero-image"
                style={{ backgroundImage: `url(/tours/${tour.imageCover})` }}
            >
                <div className="hero-overlay">
                    <h1 className="hero-title">{tour.name}</h1>
                    <p className="hero-subtitle">{tour.summary}</p>
                </div>
            </div>

            <div className="tour-content fade-in">
                <div className="tour-info">
                    <h2>Description</h2>
                    <p>{tour.description}</p>
                    <div className="tour-meta">
                        <p>
                            <strong>Difficulty:</strong> {tour.difficulty}
                        </p>
                        <p>
                            <strong>Duration:</strong> {tour.duration} days
                        </p>
                        <p>
                            <strong>Price:</strong> ${tour.price}
                        </p>
                        <p>
                            <strong>Rating:</strong> ⭐ {tour.ratingsAverage} (
                            {tour.ratingsQuantity} reviews)
                        </p>
                    </div>
                </div>

                <div className="tour-gallery">
                    {tour.images?.map((img, i) => (
                        <img
                            key={i}
                            src={`/tours/${img}`}
                            alt={`Tour ${i + 1}`}
                            className="gallery-img"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TourDetails;
