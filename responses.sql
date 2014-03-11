CREATE TABLE responses2013  (
    responseid  serial          PRIMARY KEY NOT NULL,
    fullname    varchar(256)    NOT NULL,
    school      varchar(256)    NOT NULL,
    regionid    integer         REFERENCES regions(regionid) NOT NULL,
    body        text            NOT NULL,
    hasimage    boolean         DEFAULT false,
    imagelink   text,
    insertedon  timestamp       DEFAULT now()
);

CREATE TABLE regions	(
    regionid    serial          PRIMARY KEY NOT NULL,
    regionname  varchar(32)
);

INSERT INTO regions(regionname)
	VALUES	('NCR'),
			('CAR'),
			('Region I'),
			('Region II'),
			('Region III'),
			('Region IV-A'),
			('Region IV-B'),
			('Region V'),
			('Region VI'),
			('Region VII'),
			('Region VIII'),
			('Region IX'),
			('Region X'),
			('Region XI'),
			('Region XII'),
			('Region XIII'),
			('ARMM')
;
