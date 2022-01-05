const { Client } = require('pg');

const config = {
  user:'postgres',
  password:'postgres',
  host:'localhost',
  port: 5432,
  database: 'fm_test'
};

const users = [
  {
  first_name: 'Tim',
  last_name: 'Bom',
  email: 'Tim@gmail.com',
  is_male: true,
  birthday: '1961-06-28',
  height: 1.85,
},
{
  first_name: 'Dim',
  last_name: 'Rom',
  email: 'dim@gmail.com',
  is_male: true,
  birthday: '1961-06-28',
  height: 1.85,
},
{
  first_name: 'Bim',
  last_name: 'Bom',
  email: 'bim@gmail.com',
  is_male: true,
  birthday: '1961-06-28',
  height: 1.85,
}
]

const client = new Client(config);
start();

async function start(){
  await client.connect();
  const res = await client.query(`
    INSERT INTO "users"("first_name","last_name","email","is_male","birthday","height")
    VALUES ${mapUsers(users)};
  `);
  console.log(res);
  await client.end();
}

function mapUsers(users){
  return users
    .map(
      user => `('${user.first_name}', '${user.last_name}', '${user.email}', '${user.is_male}', '${user.birthday}', '${user.height}')`
    )
    .join(',');
}
//console.log(mapUsers(users));