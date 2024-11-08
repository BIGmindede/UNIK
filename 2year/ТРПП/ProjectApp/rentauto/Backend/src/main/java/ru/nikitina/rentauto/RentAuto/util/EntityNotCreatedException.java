package ru.matrosov.rentauto.RentAuto.util;

public class EntityNotCreatedException extends RuntimeException {
    public EntityNotCreatedException(String msg) {
        super(msg);
    }
}
