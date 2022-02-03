/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sites/dedicatedbrand');
const adresseParis = require('./sites/adresseparis');
const montlimart = require('./sites/montlimard');

//https://adresse.paris/630-toute-la-collection
//https://www.dedicatedbrand.com/en/men/news
//https://www.montlimart.com/toute-la-collection.html

async function sandbox (eshop = 'https://www.montlimart.com/toute-la-collection.html') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await montlimart.scrape(eshop);

    console.log(products);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;

sandbox(eshop);
