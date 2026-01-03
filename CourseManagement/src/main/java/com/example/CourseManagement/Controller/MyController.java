package com.example.CourseManagement.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.CourseManagement.Entity.Course;
import com.example.CourseManagement.Service.CourseService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MyController {


    @Autowired
    private CourseService courseService;

    @GetMapping("/courses")
    public List<Course> getCourses(){
        return this.courseService.getCourses();
    }


    @GetMapping("/courses/{id}")
    public Course getCourse(@PathVariable Long id){
        return this.courseService.getCourseById(id);
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course){
        return this.courseService.addCourse(course);
    }

    @DeleteMapping("/courses/{id}")
    public void deleteCourse(@PathVariable Long id){
        this.courseService.deleteCourse(id);
    }



}
