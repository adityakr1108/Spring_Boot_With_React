create type gender as enum ('MALE', 'FEMALE');

alter table student alter column gender type gender
USING gender::gender;