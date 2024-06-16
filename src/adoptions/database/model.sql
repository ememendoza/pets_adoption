CREATE TABLE adoption (
    id integer auto_increment, 
    adoptionDate varchar(10),
    adoptionType varchar(20),
    adoptionDuration integer,
    adoptionConditions varchar(500),
    certified_id integer,
    foreign key (certified_id) references certified(id),
    primary key (id)
);

CREATE TABLE certified (
    id integer auto_increment, 
    adoptionAgreement integer,
    adoptionContract integer, 
    inmunizationAndHealth integer,
    primary key (id)
);