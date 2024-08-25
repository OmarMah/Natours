const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 3000; 

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB,{dbName:'natours'}).then(() => {
    console.log('DB connection successful');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});