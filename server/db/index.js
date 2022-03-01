//NWjm68ZFZlHI0ZW7

const {MongoClient} = require('mongodb');
const MONGODB_URI = 'mongodb+srv://dududroux:NWjm68ZFZlHI0ZW7@clearfashion.bxzdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'clearfashion';
let client = null;
var adresseP = require('E:/clear-fashion/server/sites/adresseParis.json');
var dedicated = require('E:/clear-fashion/server/sites/dedicated.json');
var montlimart = require('E:/clear-fashion/server/sites/montlimart.json');
var products = adresseP.concat(dedicated, montlimart);

async function Connect(){
    client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
    console.log("Connection Successful");
}

async function Close(){
    await client.close();
    console.log("Connection Closed");
}

async function InsertProduct(){ 
    const db =  await client.db(MONGODB_DB_NAME);
    db.createCollection("products");
    const collection = db.collection('products');
    //console.log(typeof(products));
    const result = collection.insertMany(products);
    console.log(result);
}

async function main(){
    await Connect();
    await InsertProduct();
    //await Close();
}


main(); 

