import React, { useEffect, useState } from "react";
import api from "../api/bootapi";

const ViewCourse = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadCourses = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get('/courses');
            setCourses(Array.isArray(response.data) ? response.data : []);
        } catch (e) {
            console.error("Fetch error:", e);
            setError("Cannot connect to server. Ensure Backend is running on port 2005.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCourses();
    }, []);

    return (
        <div className="border p-3 bg-light text-center">
            <h2>View Courses</h2>
            <button className="btn btn-secondary btn-sm mb-3" onClick={loadCourses}>
                {loading ? "Loading..." : "Refresh"}
            </button>
            
            {error && <p className="text-danger">{error}</p>}

            <div className="mt-2">
                {courses.length === 0 && !loading ? (
                    <p>No courses available.</p>
                ) : (
                    courses.map((c, index) => (
                        <div key={index} className="border p-2 mb-2 bg-white">
                            <h5>{c.title}</h5>
                            <p>{c.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ViewCourse;