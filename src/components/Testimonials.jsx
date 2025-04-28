// Testimonials.jsx
import React, { useState } from "react";
const testimonials = [
    {
        user: "John Doe",
        comment: "The best tour experience I’ve had! Highly recommend it.",
        avatar: "/path-to-avatar1.jpg"
    },
    {
        user: "Jane Smith",
        comment: "An unforgettable adventure! Will definitely book again.",
        avatar: "/path-to-avatar2.jpg"
    },
    {
        user: "Mark Johnson",
        comment: "Amazing guides and beautiful destinations. A must-do!",
        avatar: "/path-to-avatar3.jpg"
    }
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const nextTestimonial = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial">
                <img
                    src={testimonials[index].avatar}
                    alt={testimonials[index].user}
                    className="testimonial-avatar"
                />
                <p>"{testimonials[index].comment}"</p>
                <h3>{testimonials[index].user}</h3>
            </div>
            <div className="testimonial-controls">
                <button onClick={prevTestimonial}>❮</button>
                <button onClick={nextTestimonial}>❯</button>
            </div>
        </section>
    );
};

export default Testimonials;
