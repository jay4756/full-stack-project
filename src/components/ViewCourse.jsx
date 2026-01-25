import React, { useEffect, useState } from "react";
import axios from "axios"; 

const ViewCourse = () => {
    const [courses, setCourses] = useState([]);

    
    const getCourses = () => {
    axios.get("http://localhost:2005/courses").then(
        (response) => {
            console.log(response.data); // Log the response data
            setCourses(response.data); 
        },
        (error) => {
            alert("Server Error: Check if backend is running."); 
        }
    );
};


    useEffect(() => {
        getCourses();
    }, []);

    return (
        <div className="container text-center mt-3">
            <h2>All Courses</h2>
            <button className="btn btn-primary mb-3" onClick={getCourses}>Refresh List</button>

           
            {courses.length > 0 ? (
                courses.map((course, index) => (
                    <div key={course.id || index} className="card p-3 mb-2 shadow-sm">
                        <h4>{course.title}</h4>
                        <p>{course.description}</p>
                    </div>
                ))
            ) : (
                <p>No courses found.</p>
            )}
        </div>
    );
};

export default ViewCourse;
