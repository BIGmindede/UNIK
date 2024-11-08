package ru.matrosov.rentauto.RentAuto.util;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ru.matrosov.rentauto.RentAuto.models.Person;
import ru.matrosov.rentauto.RentAuto.security.PersonDetails;

@Service
public class AuthenticatedPersonService {
    public Person getAuthenticatedPerson() {
        PersonDetails personDetails = (PersonDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        return personDetails.getPerson();
    }
}
