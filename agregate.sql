SELECT "last_name"
FROM "users";

SELECT avg("weight")
FROM "users"
WHERE "id"%2=0 AND "is_male"=true;


SELECT min("weight"), "last_name"
FROM "users"
WHERE "id"%2=0 AND "is_male"=true
GROUP BY "last_name"
LIMIT 10;


SELECT avg("weight") AS "average weight", "is_male"
FROM "users"
GROUP BY "is_male";

SELECT avg("height"), "is_male"
FROM "users"
GROUP BY "is_male";


SELECT count("id"),  
EXTRACT('year' from "birthday")
FROM "users"
WHERE EXTRACT('year' from "birthday")=1982
GROUP BY EXTRACT('year' from "birthday");


SELECT sum("weight"), "first_name"
FROM "users"
WHERE "first_name"='Anna'
GROUP BY "first_name";

SELECT count("id"), "last_name"
FROM "users"
WHERE "last_name" IN ('Andersen','Anderson','Musk')
GROUP BY "last_name";
