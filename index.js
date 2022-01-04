fetch




const { Client } = require('pg');

const config = {
  user:'postgres',
  password:'postgres',
  host:'localhost',
  port: 5432,
  database: 'fm_test'
};

const client = new Client(config);
start();

async function start(){
  await client.connect();
  const res = await client.query();
  console.log(res);
  await client.end();
}