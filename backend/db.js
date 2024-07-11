// // backend/db.js
// const mongoose = require('mongoose')
// // const mongoDbClient = require("mongodb").MongoClient
// const mongoURI = 'mongodb+srv://22je0717:FuOlBklW3hDID3tA@cluster0.0vqvamk.mongodb.net/'
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             foodCollection.find({}).toArray(async function (err, data) {
//                 const categoryCollection = await mongoose.connection.db.collection("Categories");
//                 categoryCollection.find({}).toArray(async function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };


// // backend/db.js
// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://22je0717:FuOlBklW3hDID3tA@cluster0.0vqvamk.mongodb.net/';

// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, async (err) => {
//         if (err) {
//             console.log("---" + err);
//             return callback(err);
//         }
//         console.log("connected to mongo");
//         try {
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             const categoryCollection = await mongoose.connection.db.collection("Categories");

//             const foodData = await foodCollection.find({}).toArray();
//             const categoryData = await categoryCollection.find({}).toArray();

//             callback(null, foodData, categoryData);
//         } catch (err) {
//             callback(err);
//         }
//     });
// };

// backend/db.js
// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://22je0717:FuOlBklW3hDID3tA@cluster0.0vqvamk.mongodb.net/';

// module.exports = async function () {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected to MongoDB");

//         const foodCollection = mongoose.connection.db.collection("food_items");
//         const categoryCollection = mongoose.connection.db.collection("Categories");

//         const foodData = await foodCollection.find({}).toArray();
//         const categoryData = await categoryCollection.find({}).toArray();

//         return { foodData, categoryData };
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// };
// backend/db.js
// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://22je0717:FuOlBklW3hDID3tA@cluster0.0vqvamk.mongodb.net/abc';

// module.exports = async function () {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected to MongoDB");

//         const foodCollection = mongoose.connection.db.collection("xyz");
//         const categoryCollection = mongoose.connection.db.collection("food_collection");

//         const foodData = await foodCollection.find({}).toArray();
//         const categoryData = await categoryCollection.find({}).toArray();

//         return { foodData, categoryData };
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// };

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://22je0717:FuOlBklW3hDID3tA@cluster0.0vqvamk.mongodb.net/abc';

module.exports = async function () {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("xyz");
        const categoryCollection = mongoose.connection.db.collection("food_collection");

        const foodData = await foodCollection.find({}).toArray();
        const categoryData = await categoryCollection.find({}).toArray();

        return { foodData, categoryData };
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};
