const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
       
    })
    .then(() => 
        console.log('Database connected successfully'))
    .catch((error) => {
        console.log('Database connection failed');
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;













// const mongoose = require("mongoose");

// const dbConnect = async () => {
//   try {
//     await mongoose.connect(process.env.DATABASE_URL);
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.log("Database connection failed");
//     console.error(error.message);
//     process.exit(1);
//   }
// };

// module.exports = dbConnect;