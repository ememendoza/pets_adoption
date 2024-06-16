CREATE TABLE auth (
    id integer, 
    username varchar(100),
    password varchar(100),
    role integer,
    primary key(id)
);

CREATE TABLE location (
    id integer,
    country varchar(100),
    city varchar(100),
    zone varchar(100),
    address varchar(100),
    neighborhood varchar(100),
    primary key(id)
);

CREATE TABLE user (
    id integer,
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
    auth_id integer,
    location_id integer,
    foreign key (auth_id) references auth(id),
    foreign key (location_id) references location(id),
    primary key(id)
);