create type gender as ENUM ('MALE', 'FEMALE');

alter table student alter column gender type gender;