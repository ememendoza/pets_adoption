CREATE TABLE auth (
    id integer auto_increment, 
    username varchar(100),
    password varchar(100),
    safetyQuestion varchar(100),
    primary key(id)
);

CREATE TABLE location (
    id integer auto_increment,
    country varchar(100),
    city varchar(100),
    zone varchar(100),
    address varchar(100),
    neighborhood varchar(100),
    primary key(id)
);

CREATE TABLE user (
    id integer auto_increment,
    firstName varchar(100),
    lastName varchar(100),
    phone varchar(10),
    birthDate varchar(10),
    gender varchar(10),
    maritalStatus varchar(100),
    housingType varchar(100),
    childrenPresent integer,
    petsPresent integer,
    availableHours integer,
    primary key(id)
);