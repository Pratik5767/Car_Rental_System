package com.project.service.customer;

import com.project.dto.BookACarDto;
import com.project.dto.CarDto;

import java.util.List;

public interface CustomerService {
    List<CarDto> getAllCars();

    CarDto getCarById(Long carId);

    boolean bookACar(Long carId, BookACarDto bookACarDto);

    List<BookACarDto> getBookingByUserId(Long userId);
}