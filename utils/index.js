const _ = require('lodash');

module.exports.mapUsers = (users) => {
  return users
    .map(
      ({name:{first, last}, email, gender, dob:{date} }) => 
      `('${first}', '${last}', '${email}', '${gender==='male'}', '${date}', '${(Math.random()+1.1).toFixed(2)}')`
    )
    .join(',');
}

const PHONES_BRANDS = [
  'Samsung',
  'Nokia',
  'Huawei',
  'Xiaomi',
  'Iphone',
  'Honor',
  'Siemens',
  'Sony',
  'Motorola'
];

const generatePhone = key =>({
  brand:PHONES_BRANDS[_.random(0,PHONES_BRANDS.length - 1, false)],
  model: `${key} model ${_.random(0,100,false)}`,
  price: _.random(500,30000,false),
  quantity: _.random(100,2500,false)
});

module.exports.generatePhones = (length=50) => 
new Array(length).fill(null).map((_, i)=> generatePhone(i));
