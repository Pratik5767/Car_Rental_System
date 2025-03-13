package com.project.service.customer;

import com.project.dto.BookACarDto;
import com.project.dto.CarDto;
import com.project.entity.BookACar;
import com.project.entity.Car;
import com.project.entity.User;
import com.project.enums.BookCarStatus;
import com.project.repository.BookACarRepository;
import com.project.repository.CarRepository;
import com.project.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CarRepository carRepository;
    private final UserRepository userRepository;
    private final BookACarRepository bookACarRepository;

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }

    @Override
    public CarDto getCarById(Long carId) {
        Optional<Car> optionalCar = carRepository.findById(carId);
        return optionalCar.map(Car::getCarDto).orElse(null);
    }

    @Override
    public boolean bookACar(Long carId, BookACarDto bookACarDto) {
        Optional<User> optionalUser = userRepository.findById(bookACarDto.getUserId());
        Optional<Car> optionalCar = carRepository.findById(carId);

        if (optionalCar.isPresent() && optionalUser.isPresent()) {
            BookACar bookACar = new BookACar();
            long differenceInMilliseconds = bookACarDto.getToDate().getTime() - bookACarDto.getFromDate().getTime();
            long days = TimeUnit.MILLISECONDS.toDays(differenceInMilliseconds);
            bookACar.setDays(days);
            bookACar.setUser(optionalUser.get());
            bookACar.setCar(optionalCar.get());
            bookACar.setAmount(optionalCar.get().getPrice() * days);
            bookACar.setFromDate(bookACarDto.getFromDate());
            bookACar.setToDate(bookACarDto.getToDate());
            bookACar.setBookCarStatus(BookCarStatus.PENDING);
            bookACarRepository.save(bookACar);
            return true;
        }
        return false;
    }

    @Override
    public List<BookACarDto> getBookingByUserId(Long userId) {
        return bookACarRepository.findAllByUserId(userId)
                .stream().map(BookACar::getBookACarDto).collect(Collectors.toList());
    }
}