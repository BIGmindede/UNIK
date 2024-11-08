package ru.matrosov.rentauto.RentAuto.dto;

import lombok.Data;

/**
 * @author Данил Матросов
 * @version 1.0
 */

@Data
public class CarDTO {
    private int id;

    private String modelName;

    private int horsePowers;

    private String description;

    private String category;

    private int price;

    private String imageName;

    private boolean isTaken;

    private int personId;

}
