package com.project.service.customer;

import com.project.dto.CarDto;

import java.util.List;

public interface CustomerService {
    List<CarDto> getAllCars();

    CarDto getCarById(Long carId);
}