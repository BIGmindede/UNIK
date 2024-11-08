package ru.matrosov.rentauto.RentAuto.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.matrosov.rentauto.RentAuto.dto.PersonDTO;
import ru.matrosov.rentauto.RentAuto.models.Person;
import ru.matrosov.rentauto.RentAuto.repositories.PersonRepository;
import ru.matrosov.rentauto.RentAuto.util.EntityNotFoundException;

import java.util.List;
import java.util.Optional;

/**
 * @author Данил Матросов
 * @version 1.0
 */

@Service
@AllArgsConstructor
public class PersonService {

    private final PersonRepository personRepository;

    public List<Person> findAll() {
        return personRepository.findAll();
    }

    public Person findOne(int id) {
        Optional<Person> foundPerson = personRepository.findById(id);
        return foundPerson.orElseThrow(EntityNotFoundException::new);
    }

    public int findPersonsId(String email) {
        return personRepository.findByEmail(email).get().getId();
    }

    public Person update(Person person) {
        return personRepository.save(person);
    }

    public void delete(int id) {
        personRepository.deleteById(id);
    }

}

