import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import Tours from "./pages/ToursPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SignUp from "./components/Signup.jsx";
import TourDetails from "./components/TourDetails.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Oops! Something went wrong.</div>,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "/tours",
                element: (
                    // <ProtectedRoute>
                    <Tours />
                    // </ProtectedRoute>
                )
            },
            { path: "/tours/:id", element: <TourDetails /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/signup", element: <SignUp /> }
        ]
    }
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <div className="app">
                    <RouterProvider
                        router={router}
                        future={{
                            v7_startTransition: true,
                            v7_relativeSplatPath: true
                        }}
                    />
                </div>
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>
);
