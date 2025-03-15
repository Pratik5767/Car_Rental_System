package com.project.controller;

import com.project.dto.CarDto;
import com.project.service.admin.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/car")
    public ResponseEntity<?> postCar(@ModelAttribute CarDto carDto) {
        boolean success = adminService.postCar(carDto);
        if (success) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping("/cars")
    public ResponseEntity<List<CarDto>> getAllCars() {
        List<CarDto> carDtoList = adminService.getAllCars();
        return ResponseEntity.ok(carDtoList);
    }

    @DeleteMapping("/car/{carId}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long carId) {
        adminService.deleteCar(carId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/car/{carId}")
    public ResponseEntity<CarDto> getCarById(@PathVariable Long carId) {
        CarDto carDto = adminService.getCarById(carId);
        if (carDto != null) {
            return ResponseEntity.ok(carDto);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/car/{carId}")
    public ResponseEntity<?> updateCar(@PathVariable Long carId, @ModelAttribute CarDto carDto) {
        boolean success = adminService.updateCar(carId, carDto);
        if (success) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/car/bookings")
    public ResponseEntity<?> getBookings() {
        return ResponseEntity.ok(adminService.getBooking());
    }

    @GetMapping("/car/booking/{bookingId}/{status}")
    public ResponseEntity<?> changeBookingStatus(@PathVariable Long bookingId, @PathVariable String status) {
        boolean success = adminService.changeBookingStatus(bookingId, status);
        if (success) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}