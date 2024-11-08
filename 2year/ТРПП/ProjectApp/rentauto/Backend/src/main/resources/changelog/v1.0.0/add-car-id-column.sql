-- liquibase formatted sql

-- changeSet Danil:3
alter table person
    add column car_id int references car (id)

-- rollback alter table person delete column car_id;
