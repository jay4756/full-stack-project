package com.example.CourseManagement.Service;

import java.util.List;

import com.example.CourseManagement.Entity.Course;

public interface CourseService {

    public List<Course> getCourses();

    public Course getCourseById(Long id);

    public Course addCourse(Course course);

    public void deleteCourse(Long id);
    
}
