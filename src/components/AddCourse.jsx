import React, { useState } from "react";
import api from "../api/bootapi";
import { useNavigate } from "react-router-dom";

function AddCourse() {
    const [course, setCourse] = useState({ title: "", description: "" });
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await api.post('/courses', course);
            alert("Course added successfully");
            navigate('/view-course');
        } catch (err) {
            console.error("Failed to add course:", err);
            alert("Failed to add course. Check server and try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return(
        <div className="border border-light m-2 p-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Course Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        value={course.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Course Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        className="form-control"
                        value={course.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Adding...' : 'Add Course'}
                </button>
            </form>
        </div>
    )
}
export default AddCourse;