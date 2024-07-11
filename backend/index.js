// // // backend/index.js
// // global.foodData = require('./db')(function call(err, data, CatData) {
// //     // console.log(data)
// //     if(err) console.log(err);
// //     global.foodData = data;
// //     global.foodCategory = CatData;
// //   })
  
// //   const express = require('express')
// //   const app = express()
// //   const port = 5000
// //   app.use((req, res, next) => {
// //     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
// //     res.header(
// //       "Access-Control-Allow-Headers",
// //       "Origin, X-Requested-With, Content-Type, Accept"
// //     );
// //     next();
// //   });
// //   app.use(express.json())
  
// //   app.get('/', (req, res) => {
// //     res.send('Hello World!')
// //   })
  
// //   app.use('/api/auth', require('./Routes/Auth'));
  
// //   app.listen(port, () => {
// //     console.log(`Example app listening on http://localhost:${port}`)
// //   })
  
  
// // // backend/index.js
// // const express = require('express');
// // const app = express();
// // const port = 5000;

// // app.use((req, res, next) => {
// //     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
// //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //     next();
// // });

// // app.use(express.json());

// // app.get('/', (req, res) => {
// //     res.send('Hello World!');
// // });

// // app.use('/api/auth', require('./Routes/Auth'));

// // global.foodData = require('./db')(function call(err, data, CatData) {
// //     if (err) {
// //         console.error(err);
// //         process.exit(1); // Exit the process with an error code
// //     }
// //     global.foodData = data;
// //     global.foodCategory = CatData;

// //     // Start the server only after the database is connected and global data is set
// //     app.listen(port, () => {
// //         console.log(`Example app listening on http://localhost:${port}`);
// //     });
// // });

// // backend/index.js
// // const express = require('express');
// // const app = express();
// // const port = 5000;

// // app.use((req, res, next) => {
// //     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
// //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //     next();
// // });

// // app.use(express.json());

// // app.get('/', (req, res) => {
// //     res.send('Hello World!');
// // });

// // app.use('/api/auth', require('./Routes/Auth'));

// // const connectToMongoDB = require('./db');

// // connectToMongoDB().then(({ foodData, categoryData }) => {
// //     global.foodData = foodData;
// //     global.foodCategory = categoryData;

// //     app.listen(port, () => {
// //         console.log(`Example app listening on http://localhost:${port}`);
// //     });
// // }).catch(error => {
// //     console.error("Error initializing server:", error);
// //     process.exit(1); // Exit the process with an error code
// // });


// // backend/index.js
// const express = require('express');
// const app = express();
// const port = 5000;

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.use('/api/auth', require('./Routes/Auth'));

// const connectToMongoDB = require('./db');

// connectToMongoDB().then(({ foodData, categoryData }) => {
//     global.foodData = foodData;
//     global.foodCategory = categoryData;

//     app.listen(port, () => {
//         console.log(`Example app listening on http://localhost:${port}`);
//     });
// }).catch(error => {
//     console.error("Error initializing server:", error);
//     process.exit(1); // Exit the process with an error code
// });
const express = require('express');
const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', require('./Routes/Auth'));

const connectToMongoDB = require('./db');

connectToMongoDB().then(({ foodData, categoryData }) => {
    global.foodData = foodData;
    global.foodCategory = categoryData;

    app.listen(port, () => {
        console.log(`Example app listening on http://localhost:${port}`);
    });
}).catch(error => {
    console.error("Error initializing server:", error);
    process.exit(1); // Exit the process with an error code
});
