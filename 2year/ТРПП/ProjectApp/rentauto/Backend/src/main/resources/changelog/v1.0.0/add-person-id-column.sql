-- liquibase formatted sql

-- changeSet Danil:4
alter table car
    add column person_id int references person (id)

-- rollback alter table car delete column person_id;
