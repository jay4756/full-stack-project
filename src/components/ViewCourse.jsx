import React, { useEffect, useState } from "react";
import axios from "axios"; // Using standard axios for simplicity

const ViewCourse = () => {
    const [courses, setCourses] = useState([]);

    // 1. Function to get data
    const getCourses = () => {
        axios.get("http://localhost:2005/courses").then(
            (response) => {
                setCourses(response.data); // Success: Set data to state
            },
            (error) => {
                alert("Server Error: Check if backend is running."); // Error: Alert user
            }
        );
    };

    // 2. Run getCourses when the page loads
    useEffect(() => {
        getCourses();
    }, []);

    return (
        <div className="container text-center mt-3">
            <h2>All Courses</h2>
            <button className="btn btn-primary mb-3" onClick={getCourses}>Refresh List</button>

            {/* 3. Display data using map */}
            {courses.length > 0 ? (
                courses.map((item) => (
                    <div key={item.id} className="card p-3 mb-2 shadow-sm">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))
            ) : (
                <p>No courses found.</p>
            )}
        </div>
    );
};

export default ViewCourse;
