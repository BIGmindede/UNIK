-- liquibase formatted sql

-- changeSet Danil:5
alter table car
    add column image_name varchar;
alter table car
    add column is_taken bool;

-- rollback alter table car delete column image_name;
