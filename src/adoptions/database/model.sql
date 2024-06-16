CREATE TABLE adoption (
    id integer auto_increment, 
    adoptionDate varchar(10),
    adoptionType varchar(20),
    adoptionDuration integer,
    adoptionConditions varchar(500),
    pet_id integer,
    user_id integer,
    primary key (id)
);
