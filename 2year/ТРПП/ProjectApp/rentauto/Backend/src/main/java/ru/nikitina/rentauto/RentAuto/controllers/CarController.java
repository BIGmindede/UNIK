package ru.matrosov.rentauto.RentAuto.controllers;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;
import ru.matrosov.rentauto.RentAuto.dto.CarDTO;
import ru.matrosov.rentauto.RentAuto.models.Car;
import ru.matrosov.rentauto.RentAuto.services.CarService;
import ru.matrosov.rentauto.RentAuto.services.PersonService;
import ru.matrosov.rentauto.RentAuto.util.AuthenticatedPersonService;

import java.util.List;

/**
 * @author Данил Матросов
 * @version 1.0
 * Класс контроллера авто с внедренными классами сервисов
 */

@RestController
@AllArgsConstructor
@RequestMapping("/cars")
@CrossOrigin(origins = "http://localhost:3000")
public class CarController {

    private final CarService carService;
    private final ModelMapper modelMapper;
    private final PersonService personService;
    private final AuthenticatedPersonService authenticatedPersonService;



    @GetMapping()
    public List<CarDTO> readAll() {
        return carService.findAll().stream().map(this::convertToCarDTO).toList();
    }



    @GetMapping("/{id}")
    public Car getCar(@PathVariable("id") int id) {
        return carService.findOne(id);
    }

    /**
     * POST - "/cars"
     * Добавление машины
     *
     * @param carDTO - {
     *               "modelName": "mercedes rs6",
     *               "horsePowers": 87,
     *               "description": "mashina",
     *               "category": "sportcar",
     *               "personId": 4,
     *               "price": 1000,
     *               "imageName": "lada.png"
     *               }
     * @return - статус завершения программы (ок - 200)
     */

    @PostMapping
    public void create(@RequestBody CarDTO carDTO) {
        Car car = convertToCar(carDTO);
        car.setTaken(false);
        carService.create(car);
    }

    /**
     * POST - "cars/set_car_to_person/{person_id}/{car_id}"
     * Привязка машины к пользователю
     *
     * @param personId - уникальный идентификатор пользователя
     * @param carId - уникальный идентификатор авто
     */

    @PostMapping("/set_car_to_person/{person_id}/{car_id}")
    public void setCarToPerson(@PathVariable("person_id") int personId,
                               @PathVariable("car_id") int carId) {
        Car newCar = carService.findOne(carId);
        newCar.setPerson(personService.findOne(personId));
        newCar.setTaken(true);
        carService.create(newCar);
    }

    /**
     * POST - "/cars/set_image_name/{car_id}/{image_name}"
     * Установка картинки для авто
     *
     * @param carId - id авто
     * @param imageName - имя картинки
     */

    @PostMapping("set_image_name/{car_id}/{image_name}")
    public void setImageName(@PathVariable("car_id") int carId,
                             @PathVariable("image_name") String imageName) {
        Car car = carService.findOne(carId);
        car.setImageName(imageName);
        carService.create(car);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id) {
        carService.delete(id);
    }


    private Car convertToCar(CarDTO carDTO) {
        Car car = modelMapper.map(carDTO, Car.class);
        carDTO.setPersonId(authenticatedPersonService.getAuthenticatedPerson().getId());
        car.setPerson(personService.findOne(carDTO.getPersonId()));
        return car;
    }

    private CarDTO convertToCarDTO(Car car) {
        CarDTO carDTO = modelMapper.map(car, CarDTO.class);
        carDTO.setPersonId(car.getPerson().getId());
        return carDTO;
    }

}
