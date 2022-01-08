DROP TABLE "users";
CREATE TABLE "users"(
  "id" bigserial PRIMARY KEY,
  "firstName" VARCHAR(64) NOT NULL CHECK ("firstName" != ''),
  "lastName" VARCHAR(64) NOT NULL CHECK ("lastName" != ''),
  "email" VARCHAR(256) NOT NULL CHECK ("email" != '') UNIQUE,
  "isMale" BOOLEAN NOT NULL,
  "birthday" DATE NOT NULL CHECK ("birthday" < current_date),
  "height" NUMERIC(3,2) NOT NULL CHECK ("height">1.00 AND "height"<2.50)
);