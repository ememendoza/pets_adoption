CREATE TABLE pet (
    id integer, 
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
    picture_id integer,
    medical_data_id integer,
    foreign key (picture_id) references picture(id),
    foreign key (medical_data_id) references medical_data(id),
    primary key(id)
);

CREATE TABLE picture (
    id integer, 
    name varchar(100),
    size integer,
    primary key (id)
);

CREATE TABLE medical_data (
    id integer,
    vacines integer,
    sterilization integer,
    hospitalization integer,
    primary key (id)
);