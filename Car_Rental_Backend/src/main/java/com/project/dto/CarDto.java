package com.project.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
public class CarDto {
    private Long id;

    private String brand;

    private String color;

    private String name;

    private String type;

    private String transmission;

    private String description;

    private Integer price;

    private Date modelYear;

    private MultipartFile image;

    private byte[] returnedImage;
}