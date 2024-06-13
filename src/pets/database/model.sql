CREATE TABLE pet {
    id integer auto_increment, 
    name varchar(100),
    birthDate varchar(10),
    type varchar(50),
    gender varchar(10),
    size varchar(20),
    color varchar(20),
    story varchar(2000),
    specialSkills varchar(500),
    energyLevel integer,
    compatibility integer,
    status varchar(10),
    primary key(id)
};

CREATE TABLE picture {
    id integer auto_increment, 
    name varchar(100),
    size integer,
    primary key (id)
};

CREATE TABLE medical_data {
    id integer auto_increment,
    vacines integer,
    sterilization integer,
    hospitalization integer,
    primary key (id)
};