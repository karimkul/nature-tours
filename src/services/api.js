import axios from "axios";

// ------------ FETCHING ALL TOURS ---------------

export const fetchTours = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/v1/tours");

        const tours = Array.isArray(response.data?.data?.data)
            ? response.data.data.data
            : [];

        if (tours.length === 0) {
            console.warn("⚠️ No tours available.");
        }

        return tours;
    } catch (error) {
        console.error("Error fetching tours:", error.message);
        throw new Error("Failed to fetch tours");
    }
};

// ------------ FETCHING SINGLE TOUR ---------------

export const fetchSingleTour = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/tours/${id}`);

        return res.data?.data?.data || null;
    } catch (err) {
        console.error("Error fetching tour:", err.message);
        throw new Error("Failed to fetch tour");
    }
};

// export const fetchReviews = async (tourId) => {
//     const response = await fetch(`/api/v1/tours/${tourId}/reviews`);

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
// };
