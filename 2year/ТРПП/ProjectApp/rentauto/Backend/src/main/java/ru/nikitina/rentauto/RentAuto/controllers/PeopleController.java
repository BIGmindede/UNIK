package ru.matrosov.rentauto.RentAuto.controllers;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;
import ru.matrosov.rentauto.RentAuto.dto.CarDTO;
import ru.matrosov.rentauto.RentAuto.dto.PersonDTO;
import ru.matrosov.rentauto.RentAuto.models.Person;
import ru.matrosov.rentauto.RentAuto.services.PersonService;

import java.util.List;

import static java.util.Objects.isNull;

@RestController
@AllArgsConstructor
@RequestMapping("/people")
@CrossOrigin(origins = "http://localhost:3000")
public class PeopleController {

    private final PersonService personService;
    private final ModelMapper modelMapper;

    @GetMapping()
    public List<PersonDTO> findAll() {
        return personService.findAll().stream().map(this::convertToPersonDTO).toList();
    }

    @GetMapping("/{id}")
    public PersonDTO findOne(@PathVariable("id") int id) {
        return this.convertToPersonDTO(personService.findOne(id));
    }

    @PutMapping
    public Person update(@RequestBody Person person) {
        return personService.update(person);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id) {
        personService.delete(id);
    }

    private PersonDTO convertToPersonDTO(Person person) {
        PersonDTO personDTO = modelMapper.map(person, PersonDTO.class);

        if (!isNull(person.getCar())) {
            CarDTO carDTO = modelMapper.map(person.getCar(), CarDTO.class);
            personDTO.setCarDTO(carDTO);
        }
        return personDTO;
    }
}
