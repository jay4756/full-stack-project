package com.example.CourseManagement.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity 
@Table
@AllArgsConstructor
@NoArgsConstructor
@lombok.Getter
@lombok.Setter
public class Course {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long Id;

    @Column
    private String title;

    @Column
    private String description;



}
