package com.example.CourseManagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.CourseManagement.Entity.Course;


@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

    

  

}
