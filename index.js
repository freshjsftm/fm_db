const { Client } = require('pg');

const config = {
  user:'postgres',
  password:'postgres',
  host:'localhost',
  port: 5432,
  database: 'fm_test'
};

const user = {
  first_name: 'Tom',
  last_name: 'Bom',
  email: 'Tom@gmail.com',
  is_male: true,
  birthday: '1961-06-28',
  height: 1.85,
}

const client = new Client(config);
start();

async function start(){
  await client.connect();
  const res = await client.query(`
    INSERT INTO "users"("first_name","last_name","email","is_male","birthday","height")
    VALUES 
      ('${user.first_name}', '${user.last_name}', '${user.email}', '${user.is_male}', '${user.birthday}', '${user.height}');
  `);
  console.log(res);
  await client.end();
}