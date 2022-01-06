ALTER TABLE "users"
ADD COLUMN "weight" INT CHECK ("weight" BETWEEN 0 AND 250);

SELECT * 
FROM "users";

UPDATE "users"
SET "weight" = ("height"-1)*100;

UPDATE "users"
SET "weight" = 55
WHERE "first_name"='Anna';

SELECT * 
FROM "users"
WHERE "first_name"='Anna';

UPDATE "users"
SET "last_name" = 'Qwerty'
WHERE "id"=1510;

DELETE FROM "users"
WHERE "id"=2112;

UPDATE "users"
SET "weight" = 57
WHERE "first_name"='Anna'
RETURNING "id", "weight", "email", "height";

SELECT "id", 
  concat("first_name", ' ', "last_name") AS "Full name",
  "email"
FROM "users"  AS "u"
WHERE "u"."first_name"='Anna';


SELECT "id", 
  concat("first_name", ' ', "last_name") AS "Full name",
  length(concat("first_name", ' ', "last_name")) AS "length"
FROM "users"
WHERE length(concat("first_name", ' ', "last_name"))=9
LIMIT 10;


SELECT *
FROM (
    SELECT "id", "height",
      concat("first_name", ' ', "last_name") AS "Full name",
      length(concat("first_name", ' ', "last_name")) AS "length"
    FROM "users"
  ) AS "tableFN"
WHERE "tableFN"."height">1.2
LIMIT 10;

