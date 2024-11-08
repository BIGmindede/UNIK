package ru.matrosov.rentauto.RentAuto.dto;

import lombok.Data;

import java.time.LocalDate;

/**
 * @author Данил Матросов
 * @version 1.0
 */

@Data
public class PersonDTO {

    private String name;

    private String email;

    private String tel;

    private LocalDate dateOfBirth;

    private CarDTO carDTO;

}
