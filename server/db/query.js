var MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb+srv://dududroux:ouioui@clearfashion.bxzdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'clearfashion';

async function Connect(){
    client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
    console.log("Connection Successful");
    db =  await client.db(MONGODB_DB_NAME);
}

async function Close(){
    await client.close();
    console.log("Connection Closed");
}

async function query_brand(brand_name){
    //var dbo = await db.db(MONGODB_DB_NAME);
    var oui = await db.collection("products").find({brand : brand_name}).toArray();
    console.log(oui);
}

async function query_price(max_price){
    var oui = await db.collection("products").find({price : { $lt : max_price}}).toArray();
    console.log(oui);
}

async function query_sort_price(){
    var oui = await db.collection("products").find().sort({price : -1}).toArray();
    console.log(oui);
}

async function query_general(query_){
    var result = await db.collection("products").find().sort(query).toArray();
    return result;
}

async function main(){
    await Connect();
    //await query_brand("Adresse Paris");
    //await query_price(51);
    await query_sort_price();
    await Close();
}

main()