const {mapUsers} = require('../utils');

module.exports = class User{
  static _client;
  static _tableName = "users";

  static async createTableIfNotExist(){
    return this._client.query(`
      CREATE TABLE IF NOT EXISTS ${this._tableName}(
        "id" bigserial PRIMARY KEY,
        "firstName" VARCHAR(64) NOT NULL CHECK ("firstName" != ''),
        "lastName" VARCHAR(64) NOT NULL CHECK ("lastName" != ''),
        "email" VARCHAR(256) NOT NULL CHECK ("email" != '') UNIQUE,
        "isMale" BOOLEAN NOT NULL,
        "birthday" DATE NOT NULL CHECK ("birthday" < current_date),
        "height" NUMERIC(3,2) NOT NULL CHECK ("height">1.00 AND "height"<2.50)
      );
    `);
  }

  static async findAll(){
    return this._client.query(`SELECT * FROM ${this._tableName}`);
  }

  static async bulkCreate(users){
    return this._client.query(`
      INSERT INTO ${this._tableName}(
        "firstName",
        "lastName",
        "email",
        "isMale",
        "birthday",
        "height"
      ) VALUES ${mapUsers(users)};
    `);
  }
};