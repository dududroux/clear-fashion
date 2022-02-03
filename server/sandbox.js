/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sites/dedicatedbrand');
const adresseParis = require('./sites/adresseparis')
//https://adresse.paris/630-toute-la-collection
//https://www.dedicatedbrand.com/en/men/news
async function sandbox (eshop = 'https://adresse.paris/630-toute-la-collection') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await adresseParis.scrape(eshop);

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
