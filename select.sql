SELECT * 
FROM "users"
WHERE "is_male"=true
LIMIT 10 OFFSET 0; 


SELECT "first_name", "email", "height" 
FROM "users";

SELECT * 
FROM "users"
WHERE "is_male"=true;

SELECT * 
FROM "users"
WHERE "id"%2=0 AND "is_male"=false;

SELECT * 
FROM "users"
WHERE "first_name"='Julia';


SELECT * 
FROM "users"
WHERE "first_name" IN ('Julia','Lia','Anna','Elon');

SELECT * 
FROM "users"
WHERE "id" BETWEEN 1400 AND 1700;

SELECT "id",
age("birthday"), 
"birthday"
FROM "users"
WHERE age("birthday")>make_interval(40);


SELECT * 
FROM "users"
WHERE "is_male"=true 
AND age("birthday") BETWEEN make_interval(40) AND make_interval(50);


SELECT * 
FROM "users"
WHERE "height" >1.9;

SELECT "id", "birthday", "is_male"
FROM "users"
WHERE EXTRACT('month' from "birthday")=5
AND "is_male"=false;

SELECT "id", "birthday", "is_male"
FROM "users"
WHERE EXTRACT('day' from "birthday")=31;