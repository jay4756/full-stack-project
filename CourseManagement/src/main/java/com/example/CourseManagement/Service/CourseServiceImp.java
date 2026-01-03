package com.example.CourseManagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CourseManagement.Entity.Course;
import com.example.CourseManagement.Repository.CourseRepository;

@Service
public class CourseServiceImp implements CourseService {

    @Autowired
    private CourseRepository courseRepository;
    
    @Override
    public List<Course> getCourses() {
       
        return courseRepository.findAll();
    }

    public Course getCourseById(Long id) {
        return courseRepository.getOne(id);

    }

    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(Course course) {
        return courseRepository.save(course);
    }

    public void deleteCourse(Long id) {
        Course entity = courseRepository.getOne(id);
        courseRepository.delete(entity);
    }

}
