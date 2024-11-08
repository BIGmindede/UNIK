package ru.matrosov.rentauto.RentAuto.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.matrosov.rentauto.RentAuto.models.Car;
import ru.matrosov.rentauto.RentAuto.repositories.CarRepository;
import ru.matrosov.rentauto.RentAuto.util.EntityNotFoundException;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CarService {

    private final CarRepository carRepository;

    public void create(Car car) {
        carRepository.save(car);
    }


    public List<Car> findAll() {
        return carRepository.findAll();
    }

    public Car findOne(int id) {
        Optional<Car> foundCar = carRepository.findById(id);
        return foundCar.orElseThrow(EntityNotFoundException::new);
    }

    public Car update(Car car) {
        return carRepository.save(car);
    }

    public void delete(int id) {
        carRepository.deleteById(id);
    }



}

